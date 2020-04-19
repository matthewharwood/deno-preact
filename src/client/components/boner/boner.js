import {html} from '../preact.js';
import {useRef, useLayoutEffect} from 'preact/hooks';

const Boner = () => {
  const parentRef = useRef();
  const childRef = useRef();
  const dateRef = useRef();

  useLayoutEffect(() => {
    if(typeof document === 'undefined') return;
    
    const parentKeyframe = [
      {transform: `translate3D(0, 0, 0)`, 'translate-origin': 'left center'},
      {transform: `translate3D(-17vw, -5vh, 0)`, 'translate-origin': 'left center'},
    ];

    const keyframe = [
      { width: '5vw', height: '10vh', transform: `translate3D(0, 0, 0) rotate(0) scale(0, 1)`},
      { width: '5vw', height: '10vh', transform: `translate3D(10vw, 0, 0) rotate(0) scale(4,1)`},
      { width: '5vw', height: '10vh', transform: `translate3D(15vw, 0, 0) rotate(-35deg) scale(7, 1.4)`}
    ];
    parentRef.current.animate(parentKeyframe, {
      easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      duration: 1750,
      delay: 350,
      fill: 'forwards'
    })
    childRef.current.animate(
      keyframe,
      {
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        duration: 1750,
        delay: 350,
        fill: 'forwards'
      }
    );

  })



  return html`
  <div class="center">
    <div class="relative" ref="${parentRef}">
      <div ref="${childRef}" className="bg-gray-200 boner-shadow relative">
      </div>
    </div>
  </div>
  `
}
export {
  Boner,
}
