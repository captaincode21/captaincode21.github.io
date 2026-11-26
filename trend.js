// Live trend behind the opening screen: a PI controller chasing a stepping setpoint.
(() => {
  const canvas = document.getElementById('trend');
  const ctx = canvas && canvas.getContext('2d');
  if (!ctx) return;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const levels = [0.65, 0.3, 0.8, 0.45];
  const N = 360;
  const history = [];
  let x1 = 0.45, x2 = 0.45, integral = 0.45, t = 0, visible = true;

  const step = () => {
    const sp = levels[Math.floor(t++ / 110) % levels.length];
    const error = sp - x2;
    integral += error * 0.0125;
    const u = 0.9 * error + integral;
    x1 += (u - x1) * 0.09; // two lags in series
    x2 += (x1 - x2) * 0.09;
    history.push([sp, x2]);
    if (history.length > N) history.shift();
  };

  const draw = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight, dpr = devicePixelRatio || 1;
    if (canvas.width !== Math.round(w * dpr)) { canvas.width = w * dpr; canvas.height = h * dpr; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const css = getComputedStyle(canvas);
    const line = (k, colour, width, dash) => {
      ctx.beginPath();
      history.forEach((p, i) => {
        const x = (i / (N - 1)) * w, y = h - p[k] * h;
        if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
      });
      ctx.strokeStyle = css.getPropertyValue(colour);
      ctx.lineWidth = width;
      ctx.setLineDash(dash);
      ctx.stroke();
    };
    line(0, '--amber', 1.5, [7, 6]);
    line(1, '--teal', 2.5, []);
  };

  for (let i = 0; i < N; i++) step();
  draw();
  addEventListener('resize', draw);
  addEventListener('themechange', draw);
  if (still) return;
  new IntersectionObserver((e) => { visible = e[0].isIntersecting; }).observe(canvas);
  setInterval(() => { if (visible && !document.hidden) { step(); draw(); } }, 45);
})();
