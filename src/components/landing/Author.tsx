import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Send } from 'lucide-react';

export function Author() {
  return (
    <section id="author" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Photo — no background, Apple-style drop-shadow */}
            <div className="relative shrink-0 flex items-end justify-center">
              {/* Glow behind */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-32 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.13) 0%, transparent 70%)', filter: 'blur(20px)' }} />
              <img
                src={`${import.meta.env.BASE_URL}images/author-real.jpg`}
                alt="Екатерина Яхонтова"
                className="relative w-56 md:w-72 h-auto rounded-3xl object-cover shadow-2xl"
                style={{ boxShadow: '0 24px 64px rgba(37,99,235,0.18), 0 6px 20px rgba(0,0,0,0.12)' }}
              />
              <div className="absolute -bottom-2 -right-2 bg-[#f97316] text-white px-4 py-2.5 rounded-2xl shadow-lg shadow-orange-200 text-center z-10">
                <p className="text-2xl font-bold leading-none">18+</p>
                <p className="text-[10px] font-semibold opacity-90 uppercase tracking-wide mt-0.5">лет опыта</p>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-5 flex-1">
              <div className="space-y-1">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-0.5 text-xs font-semibold">Кто ведёт курс?</Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Яхонтова Екатерина</h2>
                <p className="text-base text-slate-500 font-medium">Автор курса · эксперт по автоматизации финучёта</p>
              </div>

              <ul className="space-y-2.5">
                {[
                  'Финансовый директор с опытом 18+ лет',
                  'Внедрила финучёт в 150+ компаний',
                  'Построила 105+ финансовых моделей',
                  'Спикер Всемирного форума предпринимателей, Альфа-банка, Skillbox',
                  'Основатель школы финансового аутсорсинга',
                  'Автор канала «Яхонтова про финансы и удалёнку» (более 5 000 человек)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-slate-700 text-sm md:text-base leading-snug">{item}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {/* Telegram channel */}
                <a
                  href="https://t.me/yahontova_profinance"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 bg-white border border-slate-200 px-5 py-2.5 rounded-xl hover:border-[#229ED9] hover:text-[#229ED9] transition-all shadow-sm text-sm font-bold text-slate-700"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#229ED9"/>
                    <path d="M17.64 7.11L15.3 17.25c-.17.76-.63.95-1.27.59l-3.5-2.58-1.69 1.63c-.19.19-.34.34-.69.34l.25-3.56 6.4-5.78c.28-.25-.06-.38-.43-.14L6.3 12.57 2.83 11.5c-.75-.23-.76-.75.16-1.12l13.74-5.3c.62-.23 1.17.15.91 1.03z" fill="white"/>
                  </svg>
                  <span>Канал в Telegram (5 000+)</span>
                </a>

                {/* MAX channel */}
                <a
                  href="https://web.max.ru/-70658391630014"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-white px-5 py-2.5 rounded-xl transition-opacity hover:opacity-90 shadow-md text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #5B4FE8 0%, #8B5CF6 40%, #3B82F6 100%)' }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/max-logo.png`}
                    alt="MAX"
                    className="w-5 h-5 rounded object-cover"
                  />
                  <span>Канал в МАХ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
