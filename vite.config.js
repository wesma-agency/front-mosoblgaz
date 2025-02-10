import { defineConfig } from 'vite';

import path from "path";
import injectHTML from 'vite-plugin-html-inject';
import postcssImport from 'postcss-import';

export default defineConfig({
	base: './',

	plugins: [injectHTML()],
	css: {
		postcss: {
		  plugins: [
			postcssImport(),
		  ],
		},
	},
	server: {
		// open: true,
	},
	root: './',
	build: {
		rollupOptions: {
			input: {
				index: 'index.html',
				catalog: 'catalog.html',
				catalog_category: 'catalog-category.html',
				product_card: 'product-card.html',
				trade_in: 'trade-in.html',
				stocks: 'stocks.html',
				boilers_result: 'boilers-result.html',
				boilers_selection: 'boilers-selection.html',
				safe_house: 'safe-house.html',
				montazh: 'montazh.html',
				contacts: 'contacts.html',
				cart: 'cart.html',
				order: 'order.html',
				about: 'about.html',
				materials: 'materials.html',
				article: 'article.html',
				brands: 'brands.html',
				payment_refund: 'payment-refund.html',
				refund: 'refund.html',
				quality_assurance: 'quality-assurance.html',
				delivery: 'delivery.html',
				page404: '404.html',
				personal_data: "personal-data.html",
				auto_gasification: "auto-gasification.html",
				product_comparison: "product-comparison.html",
			},
		},
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
