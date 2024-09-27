import { defineConfig } from 'vite';

import path from "path";
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
	// base: './',

	plugins: [injectHTML()],

	server: {
		// open: true,
	},

	build: {
		// Не обязательные опции
		// minify: true,
	},
	resolve: {
		alias: {
		  "@": path.resolve(__dirname, "./src/"),
		  public: `${path.resolve(__dirname, "./public/")}`,
		  pages: path.resolve(__dirname, "./src/html"),
		},
	},


	preview: {
		// open: true,
	},
});
