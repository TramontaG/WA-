import dotenv from 'dotenv';
import axios from 'axios';
import fs from 'fs/promises';
import { exec } from 'child_process';

dotenv.config({
    path: ".env"
});

const updateType = process.argv[2];
if (!updateType || !["minor", "major", "patch"].includes(updateType)) {
    console.error('Provide a valid update type. Accepted are "patch", "minor" and "major"');
    process.exit(1);
}

const CDNApi = axios.create({
    baseURL: "https://gramont.ddns.net/cdn",
    headers: {
        Authorization: process.env.CDN_JWT,
    }
});

const bumpVersion = (updateType, preBumpVersion) => {
    const [major, minor, patch] = preBumpVersion.split(".");

    if (updateType === "major") {
        return `${Number(major) + 1}.0.0`;
    }

    if (updateType === "minor") {
        return `${major}.${Number(minor) + 1}.0`;
    }

    return `${major}.${minor}.${Number(patch) + 1}`;
}

const publish = async () => {
    const packageJson = JSON.parse(await fs.readFile("package.json", { encoding: "utf-8" }))
    const preBumpVersion = packageJson.version;
    const newVersion = bumpVersion(updateType, preBumpVersion);
    console.log(newVersion);

    await fs.writeFile("package.json", JSON.stringify({
        ...packageJson,
        version: newVersion,
    }, undefined, "  "));

    await new Promise((resolve, reject) => {
        exec("yarn build", (stderr, stdout) => {
            console.log({ stdout, stderr });
            stderr ? reject(stderr) : resolve(stdout);
        });
    }).catch(async err => {
        // revert package.json changes
        await fs.writeFile("package.json", JSON.stringify({
            ...packageJson,
        }, undefined, "  "));

        //exit process
        console.warn(err);
        process.exit(1);
    });

    const bundle = await fs.readFile("./dist/wa-plusplus.user.js");
    const meta = await fs.readFile("./dist/wa-plusplus.meta.js");

    const { data } = await CDNApi.post("/file/upload", {
        userspace: "public",
        fileName: "wa-plusplus@latest.user.js",
        data: bundle.toString("base64")
    });

    await CDNApi.post("/file/upload", {
        userspace: "public",
        fileName: "wa-plusplus@latest.meta.js",
        data: meta.toString("base64")
    });

    await CDNApi.post("/file/upload", {
        userspace: "public",
        fileName: `wa-plusplus@${newVersion}.user.js`,
        data: bundle.toString("base64")
    });

    await CDNApi.post("/file/upload", {
        userspace: "public",
        fileName: `wa-plusplus@${newVersion}.user.js`,
        data: meta.toString("base64")
    });

    await CDNApi.post("/file/upload", {
        userspace: "public",
        fileName: `wa-plusplus-latest-version.txt`,
        data: Buffer.from(newVersion).toString("base64"),
    });

    console.log(data);
}

publish();