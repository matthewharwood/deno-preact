import htm from 'htm'
import { h } from "preact";
const html = htm.bind(h);

import {HydrateCounter} from '../components/counter.js';

export const Home = () => {
  return html`
      <${HydrateCounter} />
      <${HydrateCounter} />  
  `;
};
