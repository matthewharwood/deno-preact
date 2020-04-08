import {App} from "../app/app.ts";
import { html } from "htm/preact";
import {Render} from '../app/render.ts';
import { Router } from "oak";

const router = new Router();
router.get("/", (context, next) => {
    context.response.body = Render("About", html`<${App} url=${"hi"} />`);
});

export const routes = router.routes();
export const allowedMethods = router.allowedMethods();
