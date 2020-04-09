// TODO(mh) Make these components run from a map and be driven
//  1. lazy via fs and convention?
//  2. more configuraion though a conventional file type

import { Counter } from "../../client/components/app.js";
import { html } from "htm/preact";
import { Document } from "../document.ts";

export const Home = Document("About", html `<${Counter} url=${"hi"} />`);
