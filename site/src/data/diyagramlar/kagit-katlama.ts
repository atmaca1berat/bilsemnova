// Kâğıt katlama konu anlatımının öğretici çizimleri (satır içi SVG; yazılar sayfa fontunu kullanır).
// Koordinatlar: y aşağı doğru artar. Kâğıt çizimleri bankadaki soru üslubuna yakın tutuldu.

const R = {
  kagit: '#FFF3D1',
  kagitKoyu: '#FBE3A1',
  cizgi: '#37474F',
  katlama: '#E53935',
  delik: '#FFFFFF',
  kesik: '#FF6BB0',
  ok: '#1B1846',
  yazi: '#4A4670',
  vurgu: '#6B5BFF',
};

const kagit = (x: number, y: number, w: number, h: number, dolgu = R.kagit) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${dolgu}" stroke="${R.cizgi}" stroke-width="2.5"/>`;
const katCizgi = (x1: number, y1: number, x2: number, y2: number) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${R.katlama}" stroke-width="3" stroke-dasharray="9 7" stroke-linecap="round"/>`;
const delik = (cx: number, cy: number, r = 11) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${R.delik}" stroke="${R.cizgi}" stroke-width="2.5"/>`;
const yazi = (x: number, y: number, metin: string, o: { boyut?: number; renk?: string; kalin?: number; yon?: 'start' | 'middle' | 'end' } = {}) =>
  `<text x="${x}" y="${y}" font-family="Nunito, sans-serif" font-size="${o.boyut ?? 17}" font-weight="${o.kalin ?? 800}" fill="${o.renk ?? R.yazi}" text-anchor="${o.yon ?? 'middle'}">${metin}</text>`;
const ok = (x1: number, y1: number, x2: number, y2: number, renk = R.ok) => {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const u = 14;
  const p1 = `${x2 - u * Math.cos(a - 0.45)},${y2 - u * Math.sin(a - 0.45)}`;
  const p2 = `${x2 - u * Math.cos(a + 0.45)},${y2 - u * Math.sin(a + 0.45)}`;
  return `<line x1="${x1}" y1="${y1}" x2="${x2 - 8 * Math.cos(a)}" y2="${y2 - 8 * Math.sin(a)}" stroke="${renk}" stroke-width="3.5" stroke-linecap="round"/>` +
    `<polygon points="${x2},${y2} ${p1} ${p2}" fill="${renk}"/>`;
};
// İki uçlu ölçü oku (mesafe göstermek için)
const olcu = (x1: number, x2: number, y: number, etiket: string) =>
  `<line x1="${x1 + 3}" y1="${y}" x2="${x2 - 3}" y2="${y}" stroke="${R.vurgu}" stroke-width="2.5"/>` +
  `<polyline points="${x1 + 10},${y - 6} ${x1 + 3},${y} ${x1 + 10},${y + 6}" fill="none" stroke="${R.vurgu}" stroke-width="2.5" stroke-linejoin="round"/>` +
  `<polyline points="${x2 - 10},${y - 6} ${x2 - 3},${y} ${x2 - 10},${y + 6}" fill="none" stroke="${R.vurgu}" stroke-width="2.5" stroke-linejoin="round"/>` +
  yazi((x1 + x2) / 2, y - 10, etiket, { renk: R.vurgu, boyut: 18, kalin: 900 });

const svg = (w: number, h: number, etiket: string, icerik: string) =>
  `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${etiket}" xmlns="http://www.w3.org/2000/svg">${icerik}</svg>`;

// Kural 1: Katlama çizgisi bir aynadır — katlı hâlde tek delik, açınca aynı uzaklıkta ikizi.
const ayna = svg(640, 260, 'Katlı kâğıttaki delik, açınca katlama çizgisinin öbür yanında aynı uzaklıkta ikinci bir delik oluşturur.',
  kagit(40, 40, 110, 170) + katCizgi(150, 40, 150, 210) + delik(95, 100) +
  yazi(95, 238, 'katlı hâl', { boyut: 16 }) +
  ok(200, 125, 290, 125) + yazi(245, 108, 'aç', { boyut: 16 }) +
  kagit(330, 40, 220, 170) + katCizgi(440, 40, 440, 210) + delik(385, 100) + delik(495, 100) +
  olcu(385, 440, 158, 'd') + olcu(440, 495, 158, 'd') +
  yazi(440, 238, 'açık hâl: iki delik, çizgiye eşit uzaklıkta', { boyut: 16 }));

// Kural 2: Her katlama kat sayısını ikiye katlar.
const katYigini = (x: number, y: number, adet: number) => {
  let s = '';
  for (let i = adet - 1; i >= 0; i--) s += kagit(x + i * 7, y - i * 7, 86, 86, i === 0 ? R.kagit : R.kagitKoyu);
  return s;
};
const katSayisi = svg(660, 260, 'Katlanmamış kâğıt 1 kat, bir kez katlanınca 2 kat, iki kez katlanınca 4 kat olur; tek delik açınca 1, 2 ve 4 delik olur.',
  katYigini(50, 70, 1) + delik(93, 113, 10) + yazi(93, 190, 'katlama yok', { boyut: 15 }) + yazi(93, 214, '1 kat → 1 delik', { renk: R.ok, boyut: 17 }) +
  ok(165, 113, 215, 113) +
  katYigini(250, 77, 2) + delik(293, 120, 10) + yazi(300, 190, '1 katlama', { boyut: 15 }) + yazi(300, 214, '2 kat → 2 delik', { renk: R.ok, boyut: 17 }) +
  ok(380, 113, 430, 113) +
  katYigini(465, 91, 4) + delik(508, 134, 10) + yazi(530, 190, '2 katlama', { boyut: 15 }) + yazi(530, 214, '4 kat → 4 delik', { renk: R.ok, boyut: 17 }));

// Kural 3: Katlama çizgisinin üstündeki kesik yarım şekildir; açınca tamamlanır.
const yarimSekil = svg(660, 300, 'Katlama çizgisinde kesilen yarım daire açınca tam daire, üçgen ise baklava dilimi olur.',
  // Yarım daire → daire
  kagit(40, 30, 100, 110) + katCizgi(140, 30, 140, 140) +
  `<path d="M140 62 A 22 22 0 0 0 140 106 Z" fill="${R.kesik}" fill-opacity="0.55" stroke="${R.kesik}" stroke-width="2.5"/>` +
  ok(175, 85, 245, 85) +
  kagit(270, 30, 200, 110) + delik(370, 84, 22) + katCizgi(370, 30, 370, 140) +
  yazi(560, 80, 'yarım daire', { boyut: 16, yon: 'middle' }) + yazi(560, 102, '→ tam daire', { boyut: 16, renk: R.ok }) +
  // Üçgen → baklava
  kagit(40, 165, 100, 110) + katCizgi(140, 165, 140, 275) +
  `<polygon points="140,195 108,220 140,245" fill="${R.kesik}" fill-opacity="0.55" stroke="${R.kesik}" stroke-width="2.5" stroke-linejoin="round"/>` +
  ok(175, 220, 245, 220) +
  kagit(270, 165, 200, 110) +
  `<polygon points="370,195 338,220 370,245 402,220" fill="${R.delik}" stroke="${R.cizgi}" stroke-width="2.5" stroke-linejoin="round"/>` +
  katCizgi(370, 165, 370, 275) +
  yazi(560, 215, 'üçgen', { boyut: 16 }) + yazi(560, 237, '→ baklava dilimi', { boyut: 16, renk: R.ok }));

// Kural 4: En son yapılan katlama ilk açılır.
const tersSira = svg(700, 280, 'İki kez katlanmış kâğıt önce son katlamadan, sonra ilk katlamadan açılır; tek delik önce 2, sonra 4 delik olur.',
  kagit(30, 60, 90, 90) + katCizgi(120, 60, 120, 150) + katCizgi(30, 150, 120, 150) + delik(95, 125, 9) +
  yazi(75, 185, 'dörtte bir', { boyut: 15 }) + yazi(75, 207, '1 delik', { boyut: 16, renk: R.ok }) +
  ok(140, 105, 195, 105) + yazi(168, 88, '1', { boyut: 16, renk: R.vurgu, kalin: 900 }) +
  kagit(215, 60, 90, 180) + katCizgi(305, 60, 305, 240) + katCizgi(215, 150, 305, 150) + delik(280, 125, 9) + delik(280, 175, 9) +
  yazi(260, 262, 'alttan aç: 2 delik', { boyut: 15, renk: R.ok }) +
  ok(325, 150, 380, 150) + yazi(352, 133, '2', { boyut: 16, renk: R.vurgu, kalin: 900 }) +
  kagit(400, 60, 180, 180) + katCizgi(490, 60, 490, 240) + katCizgi(400, 150, 580, 150) +
  delik(465, 125, 9) + delik(465, 175, 9) + delik(515, 125, 9) + delik(515, 175, 9) +
  yazi(490, 262, 'yandan aç: 4 delik', { boyut: 15, renk: R.ok }) +
  yazi(640, 140, 'son', { boyut: 15 }) + yazi(640, 160, 'katlama', { boyut: 15 }) + yazi(640, 180, 'ilk açılır', { boyut: 15, renk: R.ok }));

// Kural 5: Köşegen de bir aynadır — köşe, karşı köşeye yansır.
const kosegen = svg(640, 270, 'Kâğıt köşegenden katlanıp dik köşesinden kesilince, açınca kesik hem o köşede hem de karşı köşede görünür.',
  `<polygon points="50,40 50,210 220,210" fill="${R.kagit}" stroke="${R.cizgi}" stroke-width="2.5" stroke-linejoin="round"/>` +
  katCizgi(50, 40, 220, 210) +
  `<polygon points="50,178 50,210 82,210" fill="${R.kesik}" fill-opacity="0.55" stroke="${R.kesik}" stroke-width="2.5" stroke-linejoin="round"/>` +
  yazi(135, 245, 'köşegenden katlı hâl', { boyut: 15 }) +
  ok(250, 125, 330, 125) + yazi(290, 108, 'aç', { boyut: 16 }) +
  kagit(360, 40, 170, 170) + katCizgi(360, 40, 530, 210) +
  `<polygon points="360,178 360,210 392,210" fill="${R.delik}" stroke="${R.cizgi}" stroke-width="2.5" stroke-linejoin="round"/>` +
  `<polygon points="498,40 530,40 530,72" fill="${R.delik}" stroke="${R.cizgi}" stroke-width="2.5" stroke-linejoin="round"/>` +
  yazi(445, 245, 'sol alt köşe → sağ üst köşe', { boyut: 15, renk: R.ok }));

export const DIYAGRAMLAR: Record<string, string> = { ayna, katSayisi, yarimSekil, tersSira, kosegen };
