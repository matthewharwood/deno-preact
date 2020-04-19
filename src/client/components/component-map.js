import {html} from './preact.js';
import {NavigationItem} from './navigation/mod.js';
import {RunningHeader} from './running_header/running_header.js';
import {Boner} from './boner/boner.js';
import {isClient} from '../../utils/which_env.js';

function autoHydrate(Component, name) {
  if (isClient) {
    return Component;
  }

  return props => html`
    <component-root name=${name} />
    <${Component} ...${props} />
    <script
      type="text/hydration"
      dangerouslySetInnerHTML=${{
    __html: JSON.stringify({ props })
  }}
    />
  `;
}

const COMPONENT_MAP = {
  NavigationItem,
  RunningHeader,
  Boner,
}

const AH = {};
for (let i in COMPONENT_MAP) {
  AH[i] = autoHydrate(COMPONENT_MAP[i], i);
}
export {AH};
