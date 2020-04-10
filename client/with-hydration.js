import htm from 'htm';
import { h } from "preact";
const html = htm.bind(h);
//@ts-ignore
const isServer = typeof window.matchMedia === 'undefined';

let id = 0;

export const withHydration = (Component) =>
  (props) => {
    id += 1;
    const scriptSrc = JSON.stringify({"props": props});

    return html`
    <div data-component="${Component.name}">
        <${Component} ...${props} />
        ${isServer && html`<script dangerouslySetInnerHTML=${{ __html: scriptSrc }} type="text/hydration"></script>`}
    </div>
  `;
  };
