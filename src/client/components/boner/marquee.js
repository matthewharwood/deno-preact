import {html} from '../preact.js';
import {useLayoutEffect, useRef} from 'preact/hooks';
import {useInterval} from '../hooks/use_interval.js';

const Marquee = () => {
    useLayoutEffect(() => {
        const keyframe = [
            {  transform: `translate3D(12px, 12px, 0) rotate(0)`},
            {  transform: `translate3D(${window.innerWidth - 12}px, 12px, 0) rotate(0)`},
            {  transform: `translate3D(${window.innerWidth - 12}px, 12px, 0) rotate(90deg)`},
            {  transform: `translate3D(${window.innerWidth - 12}px, ${window.innerHeight - 12}px, 0) rotate(90deg)`},
            {  transform: `translate3D(${window.innerWidth - 12}px, ${window.innerHeight - 12}px, 0) rotate(180deg)`},
            {  transform: `translate3D(12px, ${window.innerHeight - 12}px, 0) rotate(180deg)`},
            {  transform: `translate3D(12px, ${window.innerHeight - 12}px, 0) rotate(270deg)`},
            {  transform: `translate3D(12px, 12px, 0) rotate(270deg)`},
            {  transform: `translate3D(12px, 12px, 0) rotate(360deg)`},
          ];

          for (const [i, el] of Array.from(document.querySelectorAll('.letters').entries())) {
            var animation =  el.animate(keyframe, {
                duration: 5000,
                delay: i * 50,
                fill: 'forwards',
                iterations: Infinity,
            })
          }
          
    });
    
    const letters = ['m', 'o','r', 'n', 'i','n','g','h','a','r','w','o','o','d'].reverse(); 
    const lotsOfLetters = [].concat(letters)
    return html`
        ${lotsOfLetters.map(l => html`<span class="letters font-semibold text-lg fixed w-4 p-2 h-4 text">${l}</span>`)}
    `
}

export {
    Marquee,
}