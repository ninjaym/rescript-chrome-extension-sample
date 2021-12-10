import BrowserActionApp from "./BrowserActionApp.svelte";

console.log("browser action script loaded!");

const app = new BrowserActionApp({
    target: document.getElementById("root"),
    props: {
        name: "Svelte + Rescript",
    },
});

export default app;
