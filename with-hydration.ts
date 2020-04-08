import { html } from "htm/preact";
//@ts-ignore
const isServer = typeof window?.matchMedia === `undefined`;

let id = 0;

export const withHydration = (Component: any) => (props: any) => {
  id += 1;

  const scriptSrc = `
    window.__STATE__.components[${id}]={name:${JSON.stringify(
    Component.name
  )},props:${JSON.stringify(props)}}
  `;
  console.log(isServer, window);
  return html`
    ${isServer &&
    html`<script
      dangerouslySetInnerHTML=${{ __html: scriptSrc }}
      data-cmp-id=${id}
    ></script>`}
    <${Component} ...${props} />
  `;
};
