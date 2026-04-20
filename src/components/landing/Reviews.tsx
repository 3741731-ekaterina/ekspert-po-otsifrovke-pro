import React, { useState, useEffect, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

const screenshots = [
  { src: `${BASE}images/review-screenshot-1.webp`, alt: 'Отзыв ученицы 1' },
  { src: `${BASE}images/review-screenshot-2.webp`, alt: 'Отзыв ученицы 2' },
  { src: `${BASE}images/review-screenshot-3.webp`, alt: 'Отзыв ученицы 3' },
  { src: `${BASE}images/review-screenshot-4.png`, alt: 'Отзыв ученицы 4' },
  { src: `${BASE}images/review-screenshot-5.png`, alt: 'Отзыв Алик' },
];

export function Reviews() {
  const [active, setActive] = useState(0);
  const [animDir, setAnimDir] = useState<'left' | 'right' | null>(null);
  const [visible, setVisible] = useState(true);

  const go = useCallback((dir: 'prev' | 'next') => {
    setAnimDir(dir === 'next' ? 'left' : 'right');
    setVisible(false);
    setTimeout(() => {
      setActive(i =>
        dir === 'next'
          ? (i + 1) % screenshots.length
          : (i - 1 + screenshots.length) % screenshots.length
      );
      setVisible(true);
      setAnimDir(null);
    }, 280);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const t = setInterval(() => go('next'), 6000);
    return () => clearInterval(t);
  }, [go]);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-blue-50/40 to-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1 text-sm font-semibold">
            Отзывы учеников
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary">
            Что говорят выпускники
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Реальные истории специалистов, которые изменили карьеру и доход
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-2xl mx-auto">
          {/* Main slide */}
          <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">

            {/* Image area */}
            <div className="relative flex items-center justify-center min-h-[300px] bg-slate-50/60 px-4 py-6">
              <img
                key={active}
                src={screenshots[active].src}
                alt={screenshots[active].alt}
                className="max-w-full h-auto max-h-[520px] rounded-xl shadow-md object-contain transition-all"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? 'translateX(0) scale(1)'
                    : animDir === 'left'
                    ? 'translateX(-32px) scale(0.97)'
                    : 'translateX(32px) scale(0.97)',
                  transition: 'opacity 0.28s ease, transform 0.28s ease',
                }}
              />

              {/* Left arrow */}
              <button
                onClick={() => go('prev')}
                aria-label="Предыдущий отзыв"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-primary transition-all hover:scale-110 z-10"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Right arrow */}
              <button
                onClick={() => go('next')}
                aria-label="Следующий отзыв"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary hover:bg-primary/90 shadow-lg flex items-center justify-center text-white transition-all hover:scale-110 z-10"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Dots + counter */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
              <div className="flex gap-2">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setVisible(false); setTimeout(() => { setActive(i); setVisible(true); }, 280); }}
                    aria-label={`Отзыв ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === active ? 'w-7 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-slate-400 font-medium tabular-nums">
                {active + 1} / {screenshots.length}
              </span>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="grid grid-cols-4 gap-3 mt-4">
            {screenshots.map((s, i) => (
              <button
                key={i}
                onClick={() => { setVisible(false); setTimeout(() => { setActive(i); setVisible(true); }, 280); }}
                className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 bg-slate-50 ${
                  i === active
                    ? 'border-primary shadow-lg shadow-primary/20 scale-105'
                    : 'border-transparent opacity-55 hover:opacity-80 hover:border-slate-200'
                }`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full object-cover"
                  style={{ height: 72, objectPosition: 'top' }}
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
