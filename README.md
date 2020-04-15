# What This is:
This is a working example of a SSG with partial hydration aka ⚡🧩💦.


# Why

> The server and client render should not be 1:1.
> Don't render buttons on the server that require JS to work.
> Don't ship code to the client that simply repeats what the server has already done
- https://twitter.com/jaffathecake/status/1230388412806520833

# Inspired by:
https://markus.oberlehner.net/blog/building-partially-hydrated-progressively-enhanced-static-websites-with-isomorphic-preact-and-eleventy/#demo-and-full-code



# How
## Prerequisite
node v10+ (until deno has a proper bundler)
deno: (brew install deno)

## Bootstrap and Run All - Watch
`npm i && deno --allow-run --allow-read src/main.ts`


### Or run commands independent.
#### Bundle frontend.
`npm run build`

#### Prerender HTML
`deno --allow-write --allow-read --importmap=imports.json ./src/prerender.ts`

#### Server Dist:
deno --allow-net --allow-read --importmap=imports.json ./src/server/serve.ts

#### Prerender & Bundle  & Serve:
deno --allow-write --allow-read  --importmap=imports.json prerender.ts && npm run build && deno --allow-net --allow-read --importmap=imports.json server.ts







## TODO

To bundle client side: (must be on master as of April 7th)
../deno/target/debug/deno bundle --importmap=imports.json client/app.js dist/bundle.js
1. deno bundler still isn't ready for primetime.
2. until then we'll use microbundle to bundle our front end.
3. Minify html
4. Purgecss
5. device testing with refreshing?
6. Make a SSR Framework like fusion using oak
7. figure out DI by looking into fusion core.
8. Have a monorepo command line like nx
9. 

