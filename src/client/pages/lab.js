import {html} from '../components/preact.js';
import {PageNavigation} from '../components/page_navigation/page_navigation.js';
import {useStatic} from '../components/hooks/use_cloudinary.js';

export const Lab = () => {
  const src = useStatic('sample.jpg', 'w_200');
  return html`
    <div>
        <img src="${src}" alt="">
    </div>
  `;
};
