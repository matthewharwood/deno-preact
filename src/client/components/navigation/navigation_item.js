import {html} from '../preact.js';
import {useRef, useEffect} from 'preact/hooks';
import {useTurbo} from '../turbo.js';


export const NavigationItem = ({link, className, index}) => {
  const anime = useRef(null);
  const turboRef = useTurbo(link);

  useEffect(() => {
    if(typeof document === 'undefined') return;
    const keyframe = [
      { transform: 'translate3D(0, 175%, 0)', opacity: 0},
      { transform: 'translate3D(0, 0, 0)', opacity: 1}
    ];

    anime.current.animate(
      keyframe,
      {
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        duration: 250,
        delay: (index * (250/4))
      }
    );
  });


  return html`
    <a 
      ref="${turboRef}"
      className="hover:text-indigo-600  hover:border-indigo-600"
      aria-label="${link.ariaLabel}"
      href="${link.href}">
      <div className="relative text-right py-8 overflow-hidden">
        <div>
          <span ref="${anime}" className="block text-3xl md:text-6xl text-right font-sans font-bold leading-none md:mr-16">${link.text}</span>
          <span className="text-xs absolute bottom-0 right-0 text-right leading-none font-mono transform -translate-x-8 -translate-y-12 rotate-90">0${index}</span>
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
