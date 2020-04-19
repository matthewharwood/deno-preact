import {html} from '../components/preact.js';
import {LabCard} from '../components/card/lab_card.js';

export const Lab = () => {
  return html`
    <div class="flex flex-wrap m-auto p-2 bg-gray-200 h-screen">

      <div class=" px-3 w-1/3">
        <${LabCard} />
      </div>
           
      <div class="px-3 w-1/3">
        <${LabCard} />
      </div>
      
      <div class="px-3 w-1/3">
        <${LabCard} />
      </div> 

    </div>
  `;
};
