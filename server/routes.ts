import { Counter } from "../client/components/counter.js";
import { html } from "htm/preact";
import { RenderDocument } from "./document.ts";
import { Router } from "oak";

const router = new Router();
router.get("/", (context, next) => {
  context.response.body = RenderDocument("Home Page", html `<${Counter} />`);
});

export const routes = router.routes();
export const allowedMethods = router.allowedMethods();
