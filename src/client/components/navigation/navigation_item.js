import {html} from '../preact.js';
import {useTurbo} from '../hooks/use_turbo.js';
import {useFlyIn} from '../hooks/use_fly_in.js';


export const NavigationItem = ({link, className, index}) => {
  const animeRef = useFlyIn(index);
  const turboRef = useTurbo(link, 'main', '#next');

  return html`
    <a 
      ref="${turboRef}"
      className="text-accent-hover"
      aria-label="${link.ariaLabel}"
      href="${link.href}">
      <div className="relative text-right py-4 md:py-8 overflow-hidden">
        <div>
          <span ref="${animeRef}" className="block text-3xl md:text-6xl text-right font-sans font-bold leading-none mr-8 md:mr-16 sans">${link.text}</span>
          <span className="text-xs absolute bottom-0 right-0 text-right leading-none font-mono transform -translate-y-6 md:-translate-x-8  md:-translate-y-12 rotate-90">0${index}</span>
        </div>
      </div>
    </a>
  `
}




/**
 @TODO
 - Let's add some sound effects to hover.
 - lets add some animations on hover.
*/
