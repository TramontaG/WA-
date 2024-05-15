import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import monkey, { cdn } from 'vite-plugin-monkey';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		cors: true,
		https: {
			key: fs.readFileSync('./Certs/server.key'),
			cert: fs.readFileSync('./Certs/server.cert'),
		},
	},

	plugins: [
		preact(),
		monkey({
			entry: 'src/main.tsx',
			userscript: {
				icon: 'https://vitejs.dev/logo.svg',
				namespace: 'npm/vite-plugin-monkey',
				match: ['https://web.whatsapp.com'],
				sandbox: 'JavaScript',
				grant: 'none',
			},
			build: {
				externalGlobals: {
					preact: cdn.jsdelivr('preact', 'dist/preact.min.js'),
				},
				metaFileName: true,
			},
		}),
	],
});
