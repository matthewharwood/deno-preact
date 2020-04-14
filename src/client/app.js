import { h, hydrate, render } from "preact";
import {AH} from './components/component-map';

class ComponentRoot extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const childNodes = [];
    let $end = this;
    let data = {};
    while (($end = $end.nextSibling)) {
      if (
        $end.nodeName === "SCRIPT" &&
        $end.getAttribute("type") === "text/hydration"
      ) {
        try {
          data = JSON.parse($end.textContent) || {};
        } catch (e) {}
        break;
      }
      childNodes.push($end);
    }

    const name = this.getAttribute("name");
    const Component = AH[name];

    this.root = {
      childNodes,
      appendChild: c => {
        this.parentNode.insertBefore(c, $end);
      }
    };

    hydrate(h(Component, data.props), this.root);
  }

  disconnectedCallback() {
    render(null, this.root);
  }
}

customElements.define("component-root", ComponentRoot);
