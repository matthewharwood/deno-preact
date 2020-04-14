import { h, hydrate, render } from "preact";
import {AH} from './components/component-map';
import {whenVisible} from '../utils/when_visible';

class ComponentRoot extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const childNodes = [];
    let $end = this;
    let data = {};

    whenVisible(this, () => {
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

      this.root = {
        childNodes,
        appendChild: c => this.parentNode.insertBefore(c, $end)
      };
      const Component = AH[this.getAttribute("name")];
      hydrate(h(Component, data.props), this.root);
    });
  }

  disconnectedCallback() {
    render(null, this.root);
  }
}

customElements.define("component-root", ComponentRoot);
