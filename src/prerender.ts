import {
    ensureDir,
    writeFileStr,
    copy,
} from "https://deno.land/std/fs/mod.ts";

import { Home } from "./client/pages/index.js";
import { Lab } from "./client/pages/lab.js";
import { Profile } from "./client/pages/profile.js";
import { Work } from "./client/pages/work.js";
import { html } from "htm/preact";
import { RenderDocument } from "./server/document.ts";
import {Rorschach} from './client/pages/lab/rorschach.js';



// Read all pages.
// pull out default export
// dynamically load export
// bootstrap each component to match shape below
// have some front matter on the pages like export const social = {}
const pages =[
    {fileName: 'index', content: RenderDocument("Home Page", html `<${Home} />`)},
    {fileName: 'work', content: RenderDocument("Work Page", html `<${Work} />`)},
    {fileName: 'lab', content: RenderDocument("Lab Page", html `<${Lab} />`)},
    {fileName: 'lab/rorschach', content: RenderDocument("Rorschach Page", html `<${Rorschach} />`)},
    {fileName: 'profile', content: RenderDocument("Profile Page", html `<${Profile} />`)},
];

const DIST_DIR = `${Deno.cwd()}/dist`;
const SRC_DIR = `${Deno.cwd()}/src`;
const STATIC = `${SRC_DIR}/static`;
await ensureDir(DIST_DIR);
await copy(STATIC, `${DIST_DIR}/static`, {overwrite: true});

for await (const p of pages) {
    if(p.fileName === 'index') {
        await writeFileStr(`${DIST_DIR}/index.html`, p.content);
    } else {
        const deepDistDir = `${DIST_DIR}/${p.fileName}`;
        await ensureDir(deepDistDir);
        await writeFileStr(`${deepDistDir}/index.html`, p.content);
    }
}


// for await (const p of pages) {
//     const currentDir = `${DIST_DIR}/${p.fileName}`;
//     ensureDir(currentDir);
//     writeFileStr(`${currentDir}/index.html`, p.content);
// }

