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
        <style>
        .sans {
            font-family: sans-serif;
        }
        .center {
          transform: translate3d(50vw, 50vh, 0);
        }
        .navigation-start {
          transform: translate3d(0, 175%, 0);
        }
        .boner-shadow {
          box-shadow: -14px -2px 24px rgba(255, 255, 255, 0.75), 12px 12px 12px rgba(170, 170, 170, 0.25);
        }
        .text-accent {
            color: #001AFF;
        }
        .text-accent-hover:hover {
            color: #001AFF;
        }
        </style>
      </head>
      <body>
       <div id="previous" class="fixed inset-0 text-black transform -translate-x-full bg-gray-400"></div>
        <main id="main">
          ${content}
        </main>
        <div id="next" class="fixed inset-0 text-black transform translate-x-full bg-gray-900"></div>
        <script type="module" src="deno-preact.modern.js" defer></script>
      </body>
    </html>`;
};


export const RenderDocument = (title: string, page: any): any => Document({ title, content: render(page) });
