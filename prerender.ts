import {
    ensureDir,
    writeFileStr,
} from "https://deno.land/std/fs/mod.ts";

import { Home } from "./client/pages/home.js";
import { html } from "htm/preact";
import { RenderDocument } from "./server/document.ts";

const content = RenderDocument("Home Page", html `<${Home} />`);


await ensureDir("./dist")
writeFileStr("./dist/index.html", content);
