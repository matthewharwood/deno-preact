import {html} from '../preact.js';

import {useFlyIn} from '../hooks/use_fly_in.js';

const preFetch = async (e, link) => {
  if(e.target.href.split("/index.html")[0] === location.href) return;

  const f = await fetch(e.target.href);
  const text = await f.text();
  const doc = await new DOMParser().parseFromString(text, "text/html");
  const template = document.querySelector(link.fetch.SELECTOR);
  template.innerHTML = doc.querySelector('main').innerHTML;
};

function beforeRouteChangeAnimation(e, link) {
  e.preventDefault();

  link.onLeave.map(({selector, keyframes}) => {
    if (typeof document === "undefined") return;

    document.querySelector(selector).animate(
      keyframes,
      {
        easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        duration: 350,
        fill: "forwards",
      },
    );
  });
  history.pushState(null, null, link.href);
}


export const NavigationItem = ({link, index}) => {
  const animeRef = useFlyIn(index);

  return html`
    <a 
      onMouseenter="${(e) => preFetch(e, link)}"
      
      className="text-accent-hover"
      aria-label="${link.ariaLabel}"
      onClick="${(e) => beforeRouteChangeAnimation(e, link)}"
      href="${link.href}">
      <div className="relative text-right py-2 overflow-hidden">
        <div>
          <span ref="${animeRef}" className="navigation-start block text-3xl md:text-6xl text-right font-sans font-bold leading-none mr-8 md:mr-16 sans">${link.text}</span>
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
