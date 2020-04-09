import { html } from "htm/preact";
//@ts-ignore
const isServer = typeof window.matchMedia === 'undefined';

let id = 0;

export const withHydration = (Component) =>
  (props) => {
    id += 1;
    console.log(typeof window.matchMedia === 'undefined');
    const scriptSrc = `
    window.__STATE__.components[${id}]={name:${JSON.stringify(
      Component.name,
    )},props:${JSON.stringify(props)}}
  `;

    return html `
    ${isServer && html`<script dangerouslySetInnerHTML=${{ __html: scriptSrc }} data-cmp-id=${id}></script>`}
    <${Component} ...${props} />
  `;
  };
