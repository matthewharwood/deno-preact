

// export const turbo = (link, templateEntrySelector, outletSelector) => {
//   const outletEl = document.querySelector(outletSelector);
//
//   return [
//     (e) => {
//       e.preventDefault();
//       if(link.href.split('/index.html')[0] === location.href) return;
//       go(link, templateEntrySelector, outletEl);
//     },
//     () => (addEventListener('popstate', () => {
//         go({link: location.href}, templateEntrySelector, outletEl);
//       })
//     )
//   ];
// }
