import { h, hydrate } from "preact";
import {Counter} from './components/counter.js';

const componentMap = {
  Counter,
};

const $componentRoots = document.querySelectorAll(`[data-component]`);

Array.from($componentRoots).forEach($root => {
  const $script = $root.querySelector('script[type="text/hydration"]');
  const data = ($script && JSON.parse($script.textContent)) || {};

  const name = $root.getAttribute("data-component");
  const Component = componentMap[name];

  hydrate(
    h(Component, data.props), // equiv: html`<${Component} ...${props} />`
    $root
  );
});
