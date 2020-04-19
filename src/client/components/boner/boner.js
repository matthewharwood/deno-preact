import {html} from '../preact.js';
import {useRef, useEffect} from 'preact/hooks';

const Boner = () => {
  const parentRef = useRef();
  const childRef = useRef();

  useEffect(() => {
    if(typeof document === 'undefined') return;
    console.log(childRef.current)
    parentRef.current.style.transform = 'translate3d(50vw, 50vh, 0)';
    const keyframe = [
      { transform: `translate3D(0, 0, 0)`, 'translate-origin': 'center center'},
      { transform: `translate3D(-${50}%, 0, 0) rotate(45deg)`, 'translate-origin': 'center left'}
    ];

    childRef.current.animate(
      keyframe,
      {
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        duration: 750,
        delay: (3* 250)
      }
    );
  })



  return html`
    <div ref="${parentRef}"><div ref="${childRef}" className="bg-gray-900 shadow w-20 h-20">a</div></div>
  `
}
export {
  Boner,
}
