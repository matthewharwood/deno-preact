Bootstrap and Run All - Watch
npm i && deno --allow-run --allow-read main.ts


Bundle
npm run build

Prerender
deno --allow-write --allow-read --importmap=imports.json prerender.ts

Server:
deno --allow-net --allow-read --importmap=imports.json server.ts

Prerender & Bundle  & Serve:
deno --allow-write --allow-read  --importmap=imports.json prerender.ts && npm run build && deno --allow-net --allow-read --importmap=imports.json server.ts







## NOT UNTIL LATER

To bundle client side: (must be on master as of April 7th)
../deno/target/debug/deno bundle --importmap=imports.json client/app.js dist/bundle.js
