const iter = Deno.fsEvents(Deno.cwd() + "/src/client");

async function build() {
   await Deno.run({
        cmd: ["deno", "--allow-write", "--allow-read", "--importmap=imports.json", "src/prerender.ts"]
   });
   await Deno.run({
        cmd: ["npm", "run", "build"]
   });
}
await build();
Deno.run({
    cmd: ["deno", "--allow-net", "--allow-read", "--importmap=imports.json", "src/server/serve.ts"]
});
// Clever ways to refresh a chrome browser using deno?
// Listen https://chromedevtools.github.io/devtools-protocol/1-2/Page/#method-reload
//
//
// TODO (mh) make debounce this event from building
// TODO (mh) Deno.kill all previous Deno.run commands https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.signal
for await (const event of iter) {
    build();
}
