const esbuild = require("esbuild");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");

const isProd = process.env.NODE_ENV === "production";
const watch = process.argv.filter((item) => item === "-w").length > 0;

esbuild.build({
  entryPoints: {
      background: "./src/background/background.bs.js",
      content: "./src/content/content.bs.js",
      popup: "./src/popup/popup.bs.js",
      options: "./src/options/options.bs.js",
      styles: "./src/style.css",
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
  plugins: [
      postCssPlugin({
          plugins: [tailwindcss("./tailwind.config.js"), autoprefixer],
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
  process.exit(1)
});