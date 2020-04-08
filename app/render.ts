import render from "preact-render-to-string";
import { Document } from "./document.ts";

export const Render = (title: string, page: any) => {
  return Document({ title, content: render(page) });
};
