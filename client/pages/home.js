import htm from 'htm'
import { h } from "preact";
const html = htm.bind(h);

import {AH} from '../components/component-map.js';

export const Home = () => {
  return html`
    <h3>First Counter</h3>
    <${AH.Counter} />

    <h3>Second Counter</h3>
    <${AH.Counter} initialValue=${10} />
  `;
};
