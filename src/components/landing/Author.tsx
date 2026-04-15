import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Send } from 'lucide-react';

export function Author() {
  return (
    <section id="author" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Photo — compact */}
            <div className="relative shrink-0">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-xl ring-2 ring-primary/10">
                <img
                  src="/images/author.jpg"
                  alt="Екатерина Яхонтова"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#f97316] text-white px-5 py-3 rounded-2xl shadow-lg shadow-orange-200 text-center">
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

              <a
                href="https://t.me/yahontova_profinance"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 bg-white border border-slate-200 px-5 py-2.5 rounded-xl hover:border-primary hover:text-primary transition-all shadow-sm text-sm font-bold"
              >
                {/* Telegram official icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#229ED9"/>
                  <path d="M17.64 7.11L15.3 17.25c-.17.76-.63.95-1.27.59l-3.5-2.58-1.69 1.63c-.19.19-.34.34-.69.34l.25-3.56 6.4-5.78c.28-.25-.06-.38-.43-.14L6.3 12.57 2.83 11.5c-.75-.23-.76-.75.16-1.12l13.74-5.3c.62-.23 1.17.15.91 1.03z" fill="white"/>
                </svg>
                <span>Канал в Telegram (5 000+)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
