// Typed greeting, project slides and the back-to-top button.
const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

const typed = document.getElementById('typed');
if (!still) {
  const text = typed.textContent;
  let n = 0;
  typed.textContent = '';
  const step = () => {
    typed.textContent = text.slice(0, ++n);
    if (n < text.length) setTimeout(step, 80);
  };
  setTimeout(step, 400);
}

const track = document.getElementById('track');
const dots = document.getElementById('dots');
const art = (name) => document.getElementById('art-' + name).innerHTML;
const link = (url, text) => (url ? `<a class="more" href="${esc(url)}">${text}</a>` : '');

track.innerHTML = PROJECTS.map((p, i) => `
  <article class="slide" aria-label="${i + 1} of ${PROJECTS.length}">
    <div class="drawing">${art(p.art)}</div>
    <div>
      <p class="meta"><span class="status">${esc(p.status)}</span>${esc(p.category)}</p>
      <h3><span>Project ${i + 1}:</span> ${esc(p.title)}</h3>
      <p>${esc(p.summary)}</p>
      <ul class="tools" aria-label="Tools">${p.tools.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      ${link(p.details, 'Read the project')}${link(p.repo, 'View code')}
    </div>
  </article>`).join('');

const slides = [...track.children];
let index = 0;
const go = (i) => {
  index = (i + slides.length) % slides.length;
  track.scrollTo({ left: slides[index].offsetLeft - slides[0].offsetLeft, behavior: still ? 'auto' : 'smooth' });
};
dots.innerHTML = slides.map((_, i) => `<button type="button" aria-label="Show project ${i + 1}"></button>`).join('');
const mark = () => [...dots.children].forEach((d, i) => d.setAttribute('aria-current', i === index));
[...dots.children].forEach((d, i) => d.addEventListener('click', () => go(i)));
document.getElementById('prev').addEventListener('click', () => go(index - 1));
document.getElementById('next').addEventListener('click', () => go(index + 1));
track.addEventListener('scroll', () => {
  index = Math.round(track.scrollLeft / track.clientWidth);
  mark();
}, { passive: true });
track.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
  if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
});
mark();

const onScroll = () => document.body.classList.toggle('scrolled', scrollY > innerHeight * 0.5);
addEventListener('scroll', onScroll, { passive: true });
onScroll();
