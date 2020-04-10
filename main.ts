// const iter = Deno.fsEvents(Deno.cwd());
//
function build() {
    Deno.run({
        cmd: ["deno", "--allow-write", "--importmap=imports.json", "prerender.ts"]
    });
    Deno.run({
        cmd: ["npm", "run", "build"]
    });
}
build();
// for await (const event of iter) {
//     build();
// }
