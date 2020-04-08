import { html } from "htm/preact";
import render from "preact-render-to-string";
import { serve } from "https://deno.land/std@v0.39.0/http/server.ts";
import { Document } from "./document.ts ";
import { App } from "./app.ts";

const s = serve({ port: 8000 });

const renderPage = (title: string, page: any) => {
  return Document({ title, content: render(page) });
};

for await (const req of s) {
  const body = renderPage("About", html`<${App} url=${"hi"} />`);
  req.respond({ body });
}
