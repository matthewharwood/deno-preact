
// Todo (mh) lift this into a library put on github import via deno
import { html } from "htm/preact";
//@ts-ignore
const isServer = window && window.matchMedia;

let id = 0;

export const withHydration = (Component) =>
  (props) => {
    id += 1;

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
