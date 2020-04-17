import {useEffect, useRef} from 'preact/hooks';
import {DOMAIN} from '../../utils/env.js';


 const useTurbo = (link) => {
  const turboRef = useRef(null);

  useEffect(() => {
    if(typeof document === 'undefined') return;

    let doc;
    const mouseEnterId = turboRef.current.addEventListener("mouseenter", () => {
      if(!doc) {
        fetch(link.href, {cache: "force-cache"}).then(r => r.text()).then(t => {
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
  }, [link]);
  return turboRef;
}
export {
   useTurbo
}
