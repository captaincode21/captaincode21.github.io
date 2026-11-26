// Light and black theme switch. The first choice follows the device setting.
(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme');
  if (!button) return;
  const sync = () => button.setAttribute('aria-pressed', root.dataset.theme === 'dark');
  button.hidden = false;
  sync();
  button.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    sync();
    dispatchEvent(new Event('themechange'));
  });
})();
