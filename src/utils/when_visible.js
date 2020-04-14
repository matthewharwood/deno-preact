export function whenVisible($element, callback, options) {
  if (typeof IntersectionObserver === `undefined`) {
    callback();
    return;
  }
  const observer = new IntersectionObserver(obsCb, options);
  observer.observe($element);

  function obsCb(entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve($element);
      callback();
    });
  }
}
