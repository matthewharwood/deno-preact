import {html} from '../preact.js';
import {useStatic} from '../hooks/use_cloudinary.js';

const LabCard = ({link}) => {
  const src = useStatic('sample.jpg');
  return html`
  <div class="rounded overflow-hidden shadow-lg">
    <img class="w-full" src="${src}" alt="Sunset in the mountains" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div>
  </div>
  `
}
export {
  LabCard,
}
