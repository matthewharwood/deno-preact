const iter = Deno.fsEvents(Deno.cwd() + "/client");

async function build() {
   await Deno.run({
        cmd: ["deno", "--allow-write", "--allow-read", "--importmap=imports.json", "prerender.ts"]
   });
   await Deno.run({
        cmd: ["npm", "run", "build"]
   });
}
await build();
Deno.run({
    cmd: ["deno", "--allow-net", "--allow-read", "--importmap=imports.json", "server.ts"]
});

for await (const event of iter) {
    build();
}
