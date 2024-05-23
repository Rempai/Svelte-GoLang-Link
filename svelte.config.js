import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-auto';

export default defineConfig({
	kit: {
		adapter: adapter() // Automatically selects appropriate adapter
	},
	plugins: [svelte()]
});
