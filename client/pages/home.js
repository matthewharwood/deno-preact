import htm from 'htm'
import { h } from "preact";
const html = htm.bind(h);

import {AH} from '../components/component-map.js';

export const Home = () => {
  return html`
      <${AH.Counter} />
      <${AH.Counter} />
      <${AH.Counter} />  
  `;
};
