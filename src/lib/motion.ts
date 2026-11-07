const preference = matchMedia('(prefers-reduced-motion: reduce)');

if (!preference.matches) {
  const effects = new Set<Animation>();
  function play(element: HTMLElement, frames: Keyframe[], options: KeyframeAnimationOptions) {
    const effect = element.animate(frames, options);
    effects.add(effect);
    effect.finished.then(() => effects.delete(effect), () => effects.delete(effect));
  }

  document.querySelectorAll<HTMLElement>('.appetite-copy h1 span').forEach((element, index) =>
    play(element, [{ transform: 'translateY(30%)' }, { transform: 'none' }],
      { duration: 550, delay: 70 * index, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' }));
  const hero = document.querySelector<HTMLElement>('.appetite-image');
  if (hero) play(hero, [{ clipPath: 'inset(0 0 8% 0)' }, { clipPath: 'inset(0)' }], { duration: 620, easing: 'ease-out' });

  const observer = new IntersectionObserver(entries => {
    for (const { isIntersecting, target } of entries) {
      if (!isIntersecting || !(target instanceof HTMLElement)) continue;
      play(target, [{ clipPath: 'inset(0 6%)' }, { clipPath: 'inset(0)' }], { duration: 560, easing: 'ease-out' });
      observer.unobserve(target);
    }
  }, { threshold: .1 });
  for (const element of document.querySelectorAll('[data-reveal]')) observer.observe(element);

  preference.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    for (const effect of effects) effect.cancel();
  });
}
