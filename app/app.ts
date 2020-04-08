import { html } from "htm/preact";
import { useState } from "preact/hooks";
import { withHydration } from "./with-hydration.ts";

export const BaseApp = (props: string) => {
  const [likes, setLikes] = useState(0);
  const handleClick = (e: any) => {
    e.preventDefault();
    setLikes(likes + 1);
  };

  return html `
    <div>HOW MANY LIKES ${likes}</div>
    <button onClick=${handleClick}>Increment</button>
  `;
};

export const App = withHydration(BaseApp);
