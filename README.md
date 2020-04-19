# What This is:
This is a working example of a SSG with partial(selective) hydration[⚡🧩💦].


# Why

> The server and client render should not be 1:1.
> Don't render buttons on the server that require JS to work.
> Don't ship code to the client that simply repeats what the server has already done
- https://twitter.com/jaffathecake/status/1230388412806520833

# Inspired by:
- https://markus.oberlehner.net/blog/building-partially-hydrated-progressively-enhanced-static-websites-with-isomorphic-preact-and-eleventy/#demo-and-full-code
- https://developers.google.com/web/updates/2019/02/rendering-on-the-web

### More features
- Lazy evaluate hydrated components with intersection observer
- Prefetch templates based on hover.
- Portal Based router using TurboLink-esq appraoch (super ugly right now)
- Host on render.com and get free brotli compression


### Coming soon
- Build a unique component chunk and prerender each page with 
- ServiceWorkers https://developers.google.com/web/updates/2019/02/rendering-on-the-web
- Better folder structure with to prerender many apps (monorepo?)
- Better AutoHydration Developer Experience
- Full deno bundling.
- SEO mobile/Desktop SSR https://developers.google.com/web/updates/2019/02/rendering-on-the-web#trisomorphic

### Coming in the future
- Replace Turbolinks with https://web.dev/hands-on-portals/
- API for selective SSG or SSR https://nextjs.org/blog/next-9-3

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
`   `

#### Prerender & Bundle  & Serve:
`deno --allow-write --allow-read  --importmap=imports.json prerender.ts && npm run build && deno --allow-net --allow-read --importmap=imports.json server.ts`

## HUGE THANKS
- @developit





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
9. What is http3?

