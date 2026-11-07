import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import OriginalBird from './OriginalBird';
import type { Language } from '../../config/locale';

export default function WabiyBird({ lang }: { lang: Language }) {
  const en = lang === 'en';
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const label = en ? 'Interact with Wabiy the bird' : 'Mit Wabiy dem Vogel interagieren';

  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  return (
    <div className="wabiy-mascot">
      <div className="wabiy-mascot-stage" onClickCapture={() => setGreeted(true)}>
        {paused || reducedMotion ? (
          <button type="button" className="wabiy-bird-art wabiy-bird-still" aria-label={label}>
            <img src="/wabiy-bird.svg" width="200" height="200" alt=""/>
            {greeted && <span className="wabiy-still-heart" aria-hidden="true">♥</span>}
          </button>
        ) : (
          <MotionConfig reducedMotion="user">
            <OriginalBird label={label}/>
          </MotionConfig>
        )}
      </div>
      <p className="wabiy-instruction">{en ? 'Click or tap to say hello.' : 'Klick oder tippe, um Hallo zu sagen.'}</p>
      {!reducedMotion && <label className="wabiy-pause">
        <input type="checkbox" checked={paused} onChange={event => setPaused(event.target.checked)}/>
        {en ? 'Pause animation' : 'Animation pausieren'}
      </label>}
      <span className="sr-only" role="status">{greeted ? (en ? 'Wabiy says hello!' : 'Wabiy sagt Hallo!') : ''}</span>
    </div>
  );
}
