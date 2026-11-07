// Genera el PDF vertical (formato celular 430x932) desde index.html.
// Uso: node tools/build-pdf.js   (desde propuestas/eventos-antioquia)
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 430, height: 932 } });
  await page.goto('file://' + path.join(root, 'index.html'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ media: 'print' });
  const over = await page.$$eval('.slide', els => els.map(e => {
    const inner = e.querySelector('.inner') || e;
    let max = 0; const top = e.getBoundingClientRect().top;
    inner.querySelectorAll('*').forEach(c => { const r = c.getBoundingClientRect(); if (r.height) max = Math.max(max, r.bottom - top); });
    return { id: e.id, content: Math.round(max + 24), h: Math.round(e.getBoundingClientRect().height) };
  }));
  over.forEach(o => console.log((o.content > o.h ? 'OVERFLOW ' : 'ok       ') + o.id.padEnd(18) + o.content + '/' + o.h));
  await page.pdf({ path: path.join(root, 'Propuesta Eventos Antioquia Agencia Vectorial.pdf'), width: '430px', height: '932px', printBackground: true, preferCSSPageSize: true });
  await browser.close();
})();
