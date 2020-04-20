import {useEffect, useRef} from 'preact/hooks';
import {DOMAIN} from '../utils/env';

const KEYS = {
  FADE_OUT: 'FADE_OUT',
  SLIDE_IN_LEFT: 'SLIDE_IN_LEFT',
  SLIDE_IN_TOP: 'SLIDE_IN_TOP',
}
const KEYFRAMES = {
  [KEYS.FADE_OUT]: [{ opacity: 0 }, { opacity: 1 }],
  [KEYS.SLIDE_IN_LEFT]: [{transform: 'translate3d(-100%, 0, 0)'},{transform: 'translate3d(0, 0, 0)'} ],
  [KEYS.SLIDE_IN_TOP]: [{transform: 'translate3d(0, -100%, 0)'},{transform: 'translate3d(0, 0, 0)'} ]
}

export const ROUTE = {
  MAIN: {PATH: '/', SELECTOR: '[data-outlet=main]'},
  LAB: {PATH: '/lab', SELECTOR: '[data-outlet=lab]'},
  WORK: {PATH: '/work', SELECTOR: '[data-outlet=work]'},
  PROFILE: {PATH: '/profile', SELECTOR: '[data-outlet=profile]'},
}

// const labRef  = useTurbo(ROUTE.LAB);
// <a href="https://localhost:3000/labs" ref="${labRef}">Lab</a>

const RouteConfig = new Map()
  .set(
    ROUTE.MAIN,
      {
      onLeave: new Map()
        .set(
          ROUTE.MAIN.LAB,
          [{selector: ROUTE.MAIN.SELECTOR, keyframes: KEYFRAMES.FADE_OUT}, {selector: ROUTE.LAB.SELECTOR, keyframes: KEYFRAMES.SLIDE_IN_LEFT}]
        )
     }
   )
function beforeRouteChangeFetch({PATH, SELECTOR}) {
  if (typeof document === "undefined") return;
  const linkRef = useRef(null);

  useEffect(() => {
    const {current} = linkRef;
    const hasLink = current.href && current.href.includes(DOMAIN);
    const isCurrentPage = current.href.split("/index.html")[0] === location.href;
    const path = current.href.split(DOMAIN)[1].split("/index.html")[0];


    const mouseEnterId = current.addEventListener("mouseenter", async () => {
        if(isCurrentPage) return;
        const f = await fetch(current.href);
        const text = await f.text();
        const doc = await new DOMParser().parseFromString(text, "text/html");

        if(hasLink) {
          intoEl.innerHTML =  d.querySelector("main").innerHTML;
        }
        fetch(current.href).then((r) => r.text()).then((t) => {
          const d = new DOMParser().parseFromString(t, "text/html");
          return d.querySelector("main");
        }).then((fromSelector) => {
          if (current.href.split("/index.html")[0] === location.href) return;
          if (hasLink) {

            SELECTOR.innerHTML = fromSelector.innerHTML;
          } else {
            SELECTOR.innerHTML = "";
          }
        }).catch(console.error);
    });

    const clickId = linkRef.current.addEventListener("click", (e) => {
      e.preventDefault();
      const t = '#' + e.target.textContent.toLowerCase();
      const intoEl = document.querySelector(t);
      if (hasLink) {
        flyIn(intoEl);
        history.pushState(null, null, PATH);
      } else {
        history.pushState(null, null, DOMAIN);
      }
    });

    return () => {
      removeEventListener("click", clickId);
      removeEventListener("mouseenter", mouseEnterId);
    };
  }, [link]);
  return linkRef;
}

// CLICK EVENT
function beforeRouteChangeAnimation(from, to) {
  RouteConfig.get(from).onLeave.get(to).map(({selector, keyframes}) => {
    if (typeof document === "undefined") return;

    document.querySelector(selector).animate(
      keyframes,
      {
        easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        duration: 350,
        fill: "forwards",
      },
    );
  })
}

const mainPage = (to) => beforeRouteChangeAnimation(ROUTE.MAIN, to);

