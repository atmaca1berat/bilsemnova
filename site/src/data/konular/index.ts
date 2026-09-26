import type { Konu } from '../konu-tipleri';
import kagitKatlama from './kagit-katlama';

// Yayındaki konu anlatımları. Yeni konu: dosyasını ekle, buraya yaz, kategoriler.ts'te hazir: true yap.
export const KONULAR: Konu[] = [kagitKatlama];

export const konuBul = (slug: string) => KONULAR.find((k) => k.slug === slug);
