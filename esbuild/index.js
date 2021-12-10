const esbuild = require("esbuild");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("postcss-multiple-tailwind");
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");
const sveltePlugin = require("esbuild-svelte");
const sveltePreprocess = require("svelte-preprocess");

const isProd = process.env.NODE_ENV === "production";
const watch = process.argv.filter((item) => item === "-w").length > 0;

esbuild
    .build({
        entryPoints: {
            background: "./src/background/background.bs.js",
            content: "./src/content/main.js",
            browserAction: "./src/browserAction/main.js",
            options: "./src/options/options.bs.js",
            "browserAction.tailwind": "./src/browserAction/styles/style.css",
        },
        platform: "browser",
        bundle: true,
        minify: isProd,
        sourcemap: false,
        target: ["chrome58", "firefox57", "safari11"],
        outdir: "./public/dist",
        define: {
            "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
        },
        logLevel: "info",
        plugins: [
            sveltePlugin({
                compilerOptions: { css: true },
                preprocess: sveltePreprocess({
                    postcss: {
                        plugins: [tailwindcss, autoprefixer],
                    },
                }),
            }),
            postCssPlugin({
                plugins: [tailwindcss, autoprefixer],
            }),
        ],
        watch: watch && {
            onRebuild(error, result) {
                if (error) {
                    console.error("watch build failed:", error);
                } else {
                    console.log("watch build succeeded!");
                }
            },
        },
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
