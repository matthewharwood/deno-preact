import { useEffect, useRef } from "preact/hooks";
import { DOMAIN } from "../../../utils/env.js";
const flyIn = (intoEl) => {
  if (typeof document === "undefined") return;
  const keyframe = [
    { transform: `translate3D(100%, 0, 0)` },
    { transform: "translate3D(0, 0, 0)" },
  ];

  intoEl.animate(
    keyframe,
    {
      easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      duration: 350,
      fill: "forwards",
    },
  );
};

const useTurbo = (link) => {
  if (typeof document === "undefined") return;
  const turboRef = useRef(null);
  const intoEl = document.querySelector('#' + link.text.toLowerCase());

  let doc;
  useEffect(() => {
    const path = link.href.split(DOMAIN)[1].split("/index.html")[0];
    const hasLink = link && link.href && link.href.includes(DOMAIN);
    const mouseEnterId = turboRef.current.addEventListener("mouseenter", () => {
      if(doc) {
        fetch(link.href).then((r) => r.text()).then((t) => {

          return new DOMParser().parseFromString(t, "text/html");
        }).then((d) => {
          if (link.href.split("/index.html")[0] === location.href) return;
          if (hasLink) {
            const start = d.querySelector("main");
            intoEl.innerHTML = start.innerHTML;
          } else {
            intoEl.innerHTML = "";
          }
        }).catch(console.error);
      }
    });

    const clickId = turboRef.current.addEventListener("click", (e) => {
      e.preventDefault();
      const t = '#' + e.target.textContent.toLowerCase();
      const intoEl = document.querySelector(t);
      if (hasLink) {
        flyIn(intoEl);
        history.pushState(null, null, path);
      } else {
        history.pushState(null, null, DOMAIN);
      }
    });

    return () => {
      removeEventListener("click", clickId);
      removeEventListener("mouseenter", mouseEnterId);
    };
  }, [link]);
  return turboRef;
};
export {
  useTurbo
};

/*
# https://observablehq.com/@observablehq/introduction-to-asynchronous-iteration
{
  const w = Math.min(640, width);
  const h = 320;
  const r = 20;
  const t = 1500;
  const svg = d3.select(DOM.svg(w, h));
  const circle = svg.append("circle").attr("r", r).attr("cx", w / 4).attr("cy", h / 4);
  while (true) {
    yield svg.node();
    await circle.transition().duration(t).attr("cy", h * 3 / 4).end();
    await circle.transition().duration(t).attr("cx", w * 3 / 4).end();
    await circle.transition().duration(t).attr("cy", h * 1 / 4).end();
    await circle.transition().duration(t).attr("cx", w * 1 / 4).end();
  }
}
*/
