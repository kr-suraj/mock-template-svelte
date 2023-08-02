import config from 'svelte-components/tailwind-config';
import plugin from 'svelte-components/plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts,svg}',
		'./node_modules/svelte-components/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {}
	},
	plugins: [...config.plugins, plugin]
};
