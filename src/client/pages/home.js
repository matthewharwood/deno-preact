import {html, h} from '../components/preact.js';
import {AH} from '../components/component-map.js';
import {Navigation} from '../components/navigation/mod.js';
const __DOMAIN__ = 'http://localhost:8000'
const navigationLinks = [
  {className: 'wow', link: {text: 'Work', ariaLabel:'Work', href:`${__DOMAIN__}/work/index.html`}},
  {className: 'wow', link: {text: 'Lab', ariaLabel:'Lab', href: `${__DOMAIN__}/lab/index.html`}},
  {className: 'wow', link: {text: 'Profile', ariaLabel:'Profile', href: `${__DOMAIN__}/profile/index.html`}},
];

export const Home = () => {
  return html`
    <div class="grid grid-row-1 md:grid-rows-2 grid-cols-4 gap-4 h-screen">  
      <img class="grid row-start-1 col-start-1 pt-16 pl-16 box-border" src="./static/good_morning_harwood_logo.svg" alt=""Good Morning Harwood Logo />
      <div class="grid row-end-3 col-start-1 pb-16 pl-16 items-end box-border">
          <${AH.RunningHeader} />
      </div>
      <div class="grid row-start-1 row-end-2 md:row-start-2 md:row-end-3 col-start-2 col-end-5 lg:col-start-4 items-end pb-16 pr-16 box-border">
        <${Navigation}>
          ${navigationLinks.map((nl, index)=> html`<${AH.NavigationItem} className="${nl.className}" link="${nl.link}" index="${index}"/>`)}
        <//>
      </div>
    </div>
  `;
};
