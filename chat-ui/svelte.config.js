import adapter from "@sveltejs/adapter-netlify";
import sveltePreprocess from "svelte-preprocess";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });
dotenv.config({ path: "./.env" });

process.env.PUBLIC_VERSION = process.env.npm_package_version;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),

	kit: {
		adapter: adapter({
			edge: false,
			split: true,
		}),

		paths: {
			base: process.env.APP_BASE || "",
		},
		csrf: {
			checkOrigin: false,
		},
	},
};

export default config;
