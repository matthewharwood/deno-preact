import { h, hydrate } from "preact";
import {AH} from './components/component-map.js';

class ComponentRoot extends HTMLElement {
  connectedCallback() {
    const childNodes = [];
    let $end = this;
    let data = {};
    // eslint-disable-next-line
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

    // We provide Preact a fake root DOM element.
    // This is how we avoid hydrate() "picking" the wrong children.
    this.root = {
      childNodes,
      // In correct setups, only childNodes is required,
      // appendChild() is shown here for completeness' sake.
      appendChild(c) {
        // note: $end can be null, acts like appendChild
        this.insertBefore(c, $end);
      }
    };

    hydrate(h(Component, data.props), this.root);
  }

  disconnectedCallback() {
    render(null, this.root);
  }
}

customElements.define(
  "component-root",
  ComponentRoot,
);

