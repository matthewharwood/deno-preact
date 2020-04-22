import {html} from '../components/preact.js';
import {AH} from '../components/component-map.js';

const NavigationLayout = ({children}) => {
  return html`
    <div data-outlet="nav" class="text-black z-10 bg-gray-400 w-full transform sticky top-0">
        <${AH.PageNavigation} />
    </div>
    ${children}
  `;
};


export {
  NavigationLayout
};
