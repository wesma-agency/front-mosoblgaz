import { defineConfig } from 'vite';
// import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
	// base: './',

	plugins: [injectHTML()],

	server: {
		// open: true,
	},

	build: {
		// rollupOptions: {
		// 	input: {
		// 		index: '/index.html',
		// 		catalog: '/catalog.html',
		// 	},
		// },
		// Не обязательные опции
		// minify: true,
	},

	preview: {
		// open: true,
	},
});
