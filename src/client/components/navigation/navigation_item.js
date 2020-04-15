import {html} from '../preact.js';
import {useRef, useEffect} from 'preact/hooks';
import {turbo} from '../turbo.js';

export const NavigationItem = ({link, className, index}) => {
  const anime = useRef(null);


  useEffect(() => {
    if(typeof document !== 'undefined') {
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
    }
  });


  return html`
    <a 
      className="hover:text-red-500 font-serif hover:border-red-500"
      aria-label="${link.ariaLabel}"
      href="${link.href}"
      onClick="${turbo(link, 'main', '#primary')}">
      <div className="relative text-right border-0 border-black hover:border-red-500 border-b py-8 overflow-hidden">
        <div>
          <span ref="${anime}" className="block text-5xl text-right leading-none mr-16">${link.text}</span>
          <span className="text-xs absolute bottom-0 right-0 text-right leading-none font-sans">0${index}</span>
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
