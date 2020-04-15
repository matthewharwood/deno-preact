import {html} from '../preact.js';
import {useRef, useEffect} from 'preact/hooks';
import {go} from '../turbo.js';

export const NavigationItem = ({link, className, index}) => {
  const anime = useRef(null);
  const turboRef = useRef(null);
  // const [navigate, popstate] = turbo(link, 'main', '#primary');
  // const popStateId = popstate();

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
      let doc;
      console.log('wtf')
      const hoverLoadId = turboRef.current.addEventListener("mouseenter", () => {
        if(!doc) {
          fetch(link.href).then(r => r.text()).then(t => {
            doc = new DOMParser().parseFromString(t, 'text/html');
            console.log(doc);
          }).catch(console.error);
        }
      });

      const clickId = turboRef.current.addEventListener('click', (e) => {
        e.preventDefault();
        if(link.href.split('/index.html')[0] === location.href) return;
        const [entry, outlet] = ['main', '#primary'];
        const outletEl = document.querySelector(outlet);
        go(doc, link, entry, outletEl);
      });

      const popstateId = addEventListener('popstate', () => {
        const [entry, outlet] = ['main', '#primary'];
        console.log('popstate',  location.href, entry, outletEl)
        const outletEl = document.querySelector(outlet);
        go(doc, {link: location.href}, entry, outletEl);
      })
    }
    //
    // return () => {
    //
    //   removeEventListener(clickId);
    // }
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
