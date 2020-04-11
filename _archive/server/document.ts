import render from "preact-render-to-string";

export const Document = ({ title, content }: any) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <meta name="description" content="SSR Demo" />
        <meta name="author" content="Tim Arney" />
        <style>
        body {
          font-family: Helvetica, Arial, Sans-Serif;
          font-size:1.2em;
          margin:20px;
        }
        a{
          color:#000;
          display:inline-block;
          margin-right:20px;
        }
        a:hover{
          color:#888;
        }
        </style>
      </head>
      <body>
        <main>
          ${content}
        </main>
        <script type="module" src="deno-preact.module.js" defer></script>
      </body>
    </html>`;
};


export const RenderDocument = (title: string, page: any): any => Document({ title, content: render(page) });
