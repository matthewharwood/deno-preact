deno --allow-net --allow-read=public --importmap=imports.json main.ts

To bundle client side: (must be on master as of April 7th)
../deno/target/debug/deno bundle --importmap=imports.json app.ts public/resources/bundle.js
