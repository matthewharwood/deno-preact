import htm from 'htm'
import { h } from "preact";
const html = htm.bind(h);
import { useState, useEffect } from "preact/hooks";


export const Counter = ({ initialValue }) => {
  const [likes, setLikes] = useState(initialValue || 0);
  const handleClick = e => {
    e.preventDefault();
    setLikes(likes + 1);
  };

  useEffect(() => {
    console.log("Counter mounted");
    return () => console.log("Counter unmounted");
  }, []);

  return html`
    <div>HOW MANY LIKES ${likes}</div>
    <button onClick=${handleClick}>Increment</button>
  `;
};
