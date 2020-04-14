import {html} from '../preact.js';


export const NavigationItem = ({link, className, index}) => {
  return html`
    <a 
      className="hover:text-red-500 font-serif hover:border-red-500 "
      aria-label="${link.ariaLabel}"
      href="${link.href}">
      <div className="relative text-right border-0 border-black hover:border-red-500 border-b py-8">
        <span className="text-5xl text-right leading-none mr-16">${link.text}</span>
        <span className="text-xs absolute bottom-0 right-0 text-right leading-none font-sans">0${index}</span>
      </div>
    </a>
    
  `
}




