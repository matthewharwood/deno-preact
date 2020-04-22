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
      <div data-outlet="aux" class="fixed text-black z-10 bg-gray-400 w-full"></div>
       <div data-outlet="nav" class="fixed text-black z-10 bg-gray-400 w-full transform -translate-y-full">
       <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
          </div>
          <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Docs
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Examples
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Blog
              </a>
            </div>
            <div>
              <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
            </div>
          </div>
        </nav>
        </div>
        <main data-outlet="main">
          ${content}
        </main>
        <div data-outlet="work" class="fixed inset-0 text-black transform translate-x-full"></div>
        <div data-outlet="lab" class="fixed inset-0 text-black transform translate-x-full overflow-y-auto"></div>
        <div data-outlet="labA"></div>
        <div data-outlet="profile" class="fixed inset-0 text-black transform translate-x-full"></div>
        <script type="module" src="deno-preact.modern.js" defer></script>
      </body>
    </html>`;
};


export const RenderDocument = (title: string, page: any): any => Document({ title, content: render(page) });
