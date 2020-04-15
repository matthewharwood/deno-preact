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
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body>
        <main>
          ${content}
        </main>
        <div id="primary" class="fixed top-0 text-black"></div>
        <script type="module" src="deno-preact.modern.js" defer></script>
      </body>
    </html>`;
};


export const RenderDocument = (title: string, page: any): any => Document({ title, content: render(page) });
