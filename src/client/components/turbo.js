export const go = (doc, link, templateEntrySelector, outletEl) => {
    const ROOT = 'http://localhost:8000/';
    if(link && link.href && link.href.includes(ROOT)){

      const [, loc] = link.href.split('http://localhost:8000/');
      const [path,] = loc.split('/index.html');
      outletEl.innerHTML = doc.querySelector(templateEntrySelector).innerHTML;
      history.pushState(null, null , path)
    } else {
      outletEl.innerHTML = "";
      history.pushState(null, null , ROOT);
    }



}

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
