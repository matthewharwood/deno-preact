import {html} from '../components/preact.js';
import {PageNavigation} from '../components/page_navigation/page_navigation.js';
import {useStatic} from '../components/hooks/use_cloudinary.js';

export const Lab = () => {
  const src = useStatic('sample.jpg');
  console.log(src);
  return html`
  <div>
    <nav>
        <div>Morning Harwood</div>
    </nav>  
    <img src="${src}" alt="" />
  </div>
  `;
};
