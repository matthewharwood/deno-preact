import { App } from "../client/app.js";
import { html } from "htm/preact";
import { RenderDocument } from "./document.ts";
import { Router } from "oak";

const router = new Router();
router.get("/", (context, next) => {
  context.response.body = RenderDocument("About", html `<${App} url=${"hi"} />`);
});

export const routes = router.routes();
export const allowedMethods = router.allowedMethods();
