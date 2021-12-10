import ContentAttachedIcon from "./ContentAttachedIcon.svelte";

console.log("content script laoded!");

const attachedIcon = document.createElement("div");
attachedIcon.id = "rces-23b883";
attachedIcon.style.position = "absolute";
attachedIcon.style.bottom = "20px";
attachedIcon.style.right = "16px";
attachedIcon.style.borderRadius = "9999px";
attachedIcon.style.width = "28px";
attachedIcon.style.height = "28px";
attachedIcon.style.backgroundColor = "white";
attachedIcon.style.border = "1px solid #23b883";
attachedIcon.style.display = "block";
attachedIcon.style.zIndex = 99999;

const attachedIconShadowRoot = attachedIcon.attachShadow({ mode: "open" });

new ContentAttachedIcon({
    target: attachedIconShadowRoot,
    props: {},
});

document.body.appendChild(attachedIcon);
