let mix = require("laravel-mix");
require("laravel-mix-svelte");

mix.js("src/app.js", "dist/").svelte({ dev: true });
