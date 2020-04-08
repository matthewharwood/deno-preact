import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { withHydration } from "./with-hydration.js";

export const BaseApp = () => {
  const [likes, setLikes] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setLikes(likes + 1);
  };

  return html `
    <div>HOW MANY LIKES ${likes}</div>
    <button onClick=${handleClick}>Increment</button>
  `;
};

export const App = withHydration(BaseApp);
