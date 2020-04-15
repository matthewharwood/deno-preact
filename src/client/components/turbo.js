export const turbo = (link, templateEntrySelector, outletSelector) => (e) => {
  // if(e.origin === location.origin) return;
  e.preventDefault();

  const outlet = document.querySelector(outletSelector);


  fetch(link.href).then(r => r.text()).then(t => {
    const doc = new DOMParser().parseFromString(t, 'text/html');
    const statePath = link.href.split('http://localhost:8000/')[1].split('index.html')[0];
    outlet.innerHTML = doc.querySelector(templateEntrySelector).innerHTML;
    history.pushState(null, null , statePath);
  }).catch(console.error);


  addEventListener('popstate', () => {
    outlet.innerHTML = '';
  });
}
