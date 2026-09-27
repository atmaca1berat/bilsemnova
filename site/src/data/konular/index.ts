import type { Konu } from '../konu-tipleri';
import { TUM_KATEGORILER } from '../kategoriler';

// Yayındaki konu anlatımları: bu klasördeki her <slug>.ts dosyası otomatik eklenir (kategori sırasıyla).
const moduller = import.meta.glob(['./*.ts', '!./index.ts'], { eager: true, import: 'default' }) as Record<string, Konu>;
const sira = (slug: string) => TUM_KATEGORILER.findIndex((k) => k.slug === slug);

export const KONULAR: Konu[] = Object.values(moduller).sort((a, b) => sira(a.slug) - sira(b.slug));

export const konuBul = (slug: string) => KONULAR.find((k) => k.slug === slug);
