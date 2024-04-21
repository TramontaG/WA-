import { useEffect } from 'preact/hooks';
import { version } from '../../package.json';

export const checkVersion = () => {
	const fetchLatestVersion = async () => {
		const latestVersion = await fetch(
			'https://gramont.ddns.net/cdn/file/public/wa-plusplus-latest-version.txt'
		)
			.then(resp => resp.text())
			.catch(err => version);
		if (latestVersion !== version) {
			console.log('version mismatch!');
		} else {
			console.log('you have the last version');
		}
	};

	useEffect(() => {
		fetchLatestVersion();
	}, []);
};
