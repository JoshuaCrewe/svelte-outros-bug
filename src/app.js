import App from "./DocumentSearch.svelte";

const mounts = document.querySelectorAll(".documentSearch");
mounts.forEach(mount => {
  new App({
    target: mount,
    props: {}
  });
});
