import {html, h} from '../components/preact.js';
import {AH} from '../components/component-map.js';
import {Navigation} from '../components/navigation/mod.js';
const __DOMAIN__ = 'http://localhost:8000';

const navigationLinks = [
  {className: 'wow', link: {text: 'Work', ariaLabel:'Work', href:`${__DOMAIN__}/work/index.html`}},
  {className: 'wow', link: {text: 'Lab', ariaLabel:'Lab', href: `${__DOMAIN__}/lab`}},
  {className: 'wow', link: {text: 'Profile', ariaLabel:'Profile', href: `${__DOMAIN__}/profile`}},
];

export const Home = () => {
  return html`
    <div class="grid grid-rows-2 grid-cols-4 gap-4 h-screen">
      <div class="col-start-4 row-end-3">
        <${Navigation}>
          ${navigationLinks.map((nl, index)=> html`<${AH.NavigationItem} className="${nl.className}" link="${nl.link}" index="${index}"/>`)}
        <//>
      </div>
    </div>
  `;
};
