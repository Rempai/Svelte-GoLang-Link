import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	kit: {
		// No need to specify the directory for routes if using the default location
	},
	plugins: [svelte()]
});
