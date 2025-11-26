import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	resolve: process.env.VITEST
	? {
		conditions: ['browser']
	}
	: undefined,
	test:{
		environment: 'jsdom',
		globals: true,
		exclude: ['**/node_modules/**','**/e2e/**']
	}
});
