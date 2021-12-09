import BrowserActionApp from "./BrowserActionApp.svelte";

const app = new BrowserActionApp({
    target: document.getElementById("root"),
    props: {
        name: "Svelte + Rescript",
    },
});

export default app;
