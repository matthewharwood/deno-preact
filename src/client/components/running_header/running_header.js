import {html} from '../preact.js';
import {useState, useMemo} from 'preact/hooks';
import {useInterval} from '../hooks/use_interval.js';
import {interests} from '../../../_data/interests.js';
import {shuffle} from '../../../utils/shuffle.js';

const RunningHeader = () => {
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(true);
  const _interests = useMemo(() => shuffle(interests), [interests]);
  const _interestsMaxIndex = _interests.length - 1;
  useInterval(() => {
    if (play) {
      const next = count + 1;
      setCount(next % _interestsMaxIndex)
    }
  }, 1000);

  return html`
    <p className="font-medium text-xs flex justify-start items-center" onMouseEnter="${() => setPlay(false)}" onMouseLeave="${() => setPlay(true)}">
      <span className="text-xs pr-2">
        Contact me about
      </span>
      <button className="text-xs bg-black text-white py-2 px-2 rounded-full capitalize">${_interests[count].name}</button>
    </p>
  `
}
export {
  RunningHeader,
}
/**
 <StyledLink
 style={{ textDecoration: 'none' }}
 href={\`mailto:matthhar12@gmail.com?subject=${interests[count].name}\`}
 target={'_blank'}
 color={'inherit'}
 >
 <span className={s}>Let&apos;s talk about </span>
 <span className={s}>
 ✉ <i>{renderTrans(interests[count].name)}</i>
 </span>
 </StyledLink>
 */
