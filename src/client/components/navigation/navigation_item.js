import {html} from '../preact.js';
import {useRef, useEffect} from 'preact/hooks';
import {DOMAIN} from '../../../utils/env.js';


export const NavigationItem = ({link, className, index}) => {
  const anime = useRef(null);
  const turboRef = useRef(null);

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
    let doc;
    const mouseEnterId = turboRef.current.addEventListener("mouseenter", () => {
      if(!doc) {
        fetch(link.href).then(r => r.text()).then(t => {
          doc = new DOMParser().parseFromString(t, 'text/html');
        }).catch(console.error);
      }
    });

    const clickId = turboRef.current.addEventListener('click', (e) => {
      e.preventDefault();
      if(link.href.split('/index.html')[0] === location.href) return;
      const [entry, outlet] = ['main', 'main'];
      const outletEl = document.querySelector(outlet);

      if(link && link.href && link.href.includes(DOMAIN)){
        const path = link.href.split(DOMAIN)[1].split('/index.html')[0];
        outletEl.innerHTML = doc.querySelector(entry).innerHTML;
        history.pushState(null, null , path)
      } else {
        outletEl.innerHTML = "";
        history.pushState(null, null , DOMAIN);
      }
    });

    return () => {
      removeEventListener("click", clickId);
      removeEventListener("mouseenter", mouseEnterId);
    }
  });


  return html`
    <a 
      ref="${turboRef}"
      className="hover:text-red-500 font-serif hover:border-red-500"
      aria-label="${link.ariaLabel}"
      href="${link.href}">
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
