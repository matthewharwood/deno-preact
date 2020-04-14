import {html} from '../preact.js';


export const Navigation = ({children}) => {
  return html`
    <nav>
      ${children}
    </nav>
  `
}
