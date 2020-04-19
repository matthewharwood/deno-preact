import {html, h} from '../components/preact.js';
import {AH} from '../components/component-map.js';
import {Navigation} from '../components/navigation/mod.js';
import {navigationLinks} from '../../_data/navigation.js';
export const Home = () => {
  return html`
    <div class="md:grid md:grid-rows-2 md:grid-cols-4 md:gap-4 h-screen bg-gray-200">
      <img class="md:grid col-span-4 pt-8 pl-8 pr-32 md:pt-16 md:pl-16 md:pr-0 box-border" src="./static/good_morning_harwood_logo.svg" alt="Good Morning Harwood Logo" />
      <div class=" md:grid md:row-end-3 md:col-span-2 pt-4 pl-8 md:pb-16 md:pl-16 items-end box-border">
          <${AH.RunningHeader} />
      </div>
      <div>
      <div class="fixed inset-0">
       <${AH.Marquee} />
       <${AH.Boner} />
      </div>
      </div>
      <nav class="fixed bottom-0 right-0 items-end md:grid md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-5 lg:col-start-4 items-end pr-4 pb-2 md:pb-16 md:pr-16  box-border">
        ${navigationLinks.map((nl, index)=> html`<${AH.NavigationItem} link="${nl.link}" index="${index}"/>`)}
      </nav>
    </div>
  `;
};
