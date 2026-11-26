// Scroll-in effects and self-drawing project diagrams.
// Nothing is hidden unless this runs and the visitor allows motion.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // [selector, entry style, delay between neighbours in ms]
  const groups = [
    ['.title:not(.research .title), .group > h3, .contact h3, .research h2', 'up', 0],
    ['.about img', 'left', 0],
    ['.about > div > *', 'right', 110],
    ['.kit > div, .paper, .figs figure', 'up', 90],
    ['.tiles li', 'pop', 70],
    ['.contact dt, .contact dd', 'up', 60],
    ['.controls', 'up', 0],
  ];

  const seen = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      seen.unobserve(e.target);
      // drop the helper classes afterwards so hover effects behave normally
      setTimeout(() => e.target.classList.remove('reveal', 'up', 'left', 'right', 'pop', 'in'), 1600);
    });
  }, { rootMargin: '0px 0px -6% 0px' });

  groups.forEach(([selector, style, gap]) => {
    document.querySelectorAll(selector).forEach((el) => {
      const order = [...el.parentElement.children].indexOf(el);
      el.style.setProperty('--delay', `${Math.min(order * gap, 600)}ms`);
      el.classList.add('reveal', style);
      seen.observe(el);
    });
  });

  // redraw a diagram each time its slide comes into view
  const draw = new IntersectionObserver((entries) => {
    entries.forEach((e) => e.target.classList.toggle('draw', e.intersectionRatio > 0.35));
  }, { threshold: [0, 0.35, 0.6] });

  document.querySelectorAll('.slide').forEach((slide) => {
    slide.querySelectorAll('.drawing > svg path, .drawing > svg circle').forEach((line) => {
      if (line.closest('marker') || line.matches('.limit, .est, .axis')) return;
      line.setAttribute('pathLength', '1');
      line.classList.add('trace');
    });
    slide.classList.add('animated');
    draw.observe(slide);
  });
}
