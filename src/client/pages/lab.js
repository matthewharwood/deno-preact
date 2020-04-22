import {html} from '../components/preact.js';
import {LabCard} from '../components/card/lab_card.js';

export const Lab = () => {
  return html`
    <div class="flex flex-wrap m-auto p-2 bg-gray-200 min-h-screen relative pt-20">
      <a class=" w-full">
        <h1 class="text-6xl">Lab</h1>
      </a>
      <a class="px-3 w-1/3" href="${'http://localhost:8000/lab/rorschach'}">
        <${LabCard} />
      </a>

      <a class="px-3 w-1/3">
        <${LabCard} />
      </a>
      <a class="px-3 w-1/3">
        <${LabCard} />
      </a>
      <a class=" w-full">
        <h1 class="text-6xl">Lab</h1>
      </a>
      <a class="px-3 w-1/3" href="${'http://localhost:8000/lab/rorschach'}">
        <${LabCard} />
      </a>

      <a class="px-3 w-1/3">
        <${LabCard} />
      </a>
      <a class="px-3 w-1/3">
        <${LabCard} />
      </a> 
    </div>
  `;
};
