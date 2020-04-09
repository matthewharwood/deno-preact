Prerender
deno --allow-net --allow-read=public --importmap=imports.json main.ts

Bundle CLient:
rollup --config --file dist/app.js --format iife --name App client/app.js



## NOT UNTIL LATER

To bundle client side: (must be on master as of April 7th)
../deno/target/debug/deno bundle --importmap=imports.json client/app.js dist/bundle.js
