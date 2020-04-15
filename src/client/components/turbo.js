// import { createPortal } from "preact/compat";
// import {useEffect} from 'preact/hooks';
import {html} from './preact.js';

export const Turbo = ({link, outlet = 'primary', children, ...props} ) => {
  const {text, href, ariaLabel} = link;
  const out = document.getElementById(outlet);

  // useEffect(() => {
  //
  // });
  const go = (e) => {
    // if(e.origin === location.origin) return;
    e.preventDefault();
    console.log('Yooo', link.url);
    fetch(link.url).then(r => r.text()).then(console.log).catch(console.error);
  }

  return html`
    <a ...${props}
        aria-label="${ariaLabel}"
        onClick="${go}"
        href="${href}">
        ${children}
    </a>
  `
}
// addEventListener('click', e => {
//   let a = e.target;
//   while (a.localName !== 'a' && (a = a.parentNode));
//   if (a && a.origin==location.origin && !a.target) {
//     e.preventDefault();
//     go(a.href);
//   }
// });
// let c = 0;
// function go(url) {
//   const id = ++c;
//   fetch(url).then(r=>r.text()).then(html => {
//     const doc = new DOMParser().parseFromString(html, 'text/html');
//     if (c!==id) return;
//     document.body.innerHTML = doc.body.innerHTML;
//   });
// }
// const ps = history.pushState;
// history.pushState = (a,b,url) => {
//   ps.call(history, a, b, url);
//   go(url);
// };
// addEventListener('popstate', () => {
//   go(location.href);
// });
