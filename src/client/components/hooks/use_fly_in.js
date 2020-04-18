import {useEffect, useRef} from 'preact/hooks';

const useFlyIn = (delay, startPos=[0, '175%', 0]) => {
  const ref = useRef(null);
  useEffect(() => {
    if(typeof document === 'undefined') return;
    const keyframe = [
      { transform: `translate3D(${startPos.join(',')})`, opacity: 0},
      { transform: 'translate3D(0, 0, 0)', opacity: 1}
    ];

    ref.current.animate(
      keyframe,
      {
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        duration: 250,
        delay: (delay * (250/4))
      }
    );
  }, []);
  return ref;
}

export {
  useFlyIn
}
