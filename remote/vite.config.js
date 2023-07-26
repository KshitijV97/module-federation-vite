import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "remote_app", // Whatever you like
			filename: "remoteEntry.js", // Final name for the manifest of all of the modules that are exposed by this application
			exposes: {
				// What are we exposing and its path
				"./Button": "./src/Button",
				"./store": "./src/store",
			},
			shared: ["react", "react-dom", "jotai"], // Which libraries does your module depend on
		}),
	],
	build: {
		modulePreload: false, // Module preload is a feature that allows the browser to fetch and load modules before they are actually needed, improving the performance of the application. By setting it to false, the build won't generate preload hints for modules.
		target: "esnext", //  build output will be in ECMAScript 6 (ES6) syntax, which includes the latest JavaScript features.
		minify: false, //  build output will not be minified.
		cssCodeSplit: false, // CSS code splitting allows for splitting CSS files based on dynamic imports or routes, resulting in smaller initial CSS payloads for faster loading. By setting it to false, CSS code splitting will not be used, and all CSS will be included in a single file
	},
});
