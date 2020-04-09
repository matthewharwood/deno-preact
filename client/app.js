import { html, render } from 'htm/preact';

import {Counter} from './components/counter';

const componentMap = {
  Counter,
};

const $componentMarkers = document.querySelectorAll(`[data-cmp-id]`);

Array.from($componentMarkers).forEach(($marker) => {
  const $component = $marker.nextElementSibling;
  const { name, props } = window.__STATE__.components[$marker.dataset.cmpId];
  const Component = componentMap[name];

  render(html`<${Component} ...${props}/>`, $component.parentNode, $component);
});
