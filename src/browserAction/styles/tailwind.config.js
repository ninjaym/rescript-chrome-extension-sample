module.exports = {
    mode: "jit",
    content: ["./public/browser_action.html", "./src/browserAction/**/*.svelte"],
    darkMode: "media",
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
