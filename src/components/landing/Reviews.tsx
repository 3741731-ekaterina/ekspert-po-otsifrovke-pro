import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const cases = [
  {
    name: 'Елена Демина',
    photo: '/images/review2.jpg',
    quote: 'Стали обращаться люди, которые раньше были знакомы. Спрашивают: как я им могу помочь?',
    before: ['Финансовый директор оффлайн. Доход 150 000 ₽/мес.', 'Полное выгорание и нежелание ходить на работу', 'Плохое самочувствие и «точка смертная»'],
    after: ['Ушла из найма. 2 постоянных клиента в работе', 'Ежемесячный доход 200 000 ₽', 'Появилась энергия, стала более уверенной', 'Онлайн-встречи теперь провожу с удовольствием'],
  },
  {
    name: 'Светлана Лахтикова',
    photo: '/images/review4.jpg',
    quote: '',
    before: ['Финансист. Есть навыки — нет уверенности', 'Уехала за границу без знания языка', 'Доход 0 ₽'],
    after: ['Прошла курс «Финансовый директор»', 'Изучила методологию оцифровки бизнеса', 'Упаковала навыки в услуги', 'Закрыла клиента на сопровождение за 80 000 ₽'],
  },
  {
    name: 'Ольга Попова',
    photo: '/images/review3.jpg',
    quote: 'Проект завершён. Готовлюсь взять новый — внедрение учёта компании, торгующей на МП.',
    before: ['Долгое время работа в банке', 'Прошла курс «Финансовый менеджер» Skillbox', 'Клиентов нет. Доход 0 ₽'],
    after: ['Упаковалась, описала 1 кейс', 'На 6-й неделе курса заработала 60 000 ₽'],
  },
  {
    name: 'Алтана Сарангова',
    photo: '/images/review1.jpg',
    quote: '',
    before: ['Технолог в пищевом производстве', 'Финансист-самоучка, обучалась на разных курсах', 'Есть 1 клиент, на новых нет времени'],
    after: ['Рутинные задачи передала помощнице', 'Взяла в работу ещё проекты', '3 клиента на сопровождении с чеком от 70 000 ₽'],
  },
];

const reviews = [
  { name: 'Алтана Сарангова', photo: '/images/review1.jpg', role: 'Финансовый менеджер', text: 'Курс полностью изменил мой подход к работе. Теперь уверенно предлагаю услуги финучёта клиентам. Доход вырос в 2 раза за первые 3 месяца после обучения.' },
  { name: 'Елена Демина', photo: '/images/review2.jpg', role: 'Главный бухгалтер → Финдир', text: 'Работала главбухом 8 лет, хотела переквалифицироваться. После курса уже веду 4 проекта финучёта параллельно. Екатерина передаёт технологию, которую сразу можно применить.' },
  { name: 'Ольга Попова', photo: '/images/review3.jpg', role: 'Финансовый директор на аутсорсе', text: 'Перешла на автоматизацию финучёта — теперь трачу на каждый проект на 60% меньше времени. Клиенты видят данные в реальном времени. Это другой уровень услуг.' },
  { name: 'Светлана Лахтикова', photo: '/images/review4.jpg', role: 'Финансист-фрилансер', text: 'Боялась совмещать с работой. Но 6 часов в неделю — это реально. За 2 месяца собрала полный финансовый учёт и сразу предложила его первому клиенту. Он купил.' },
];

export function Reviews() {
  const [active, setActive] = useState(0);
  const prev = () => setActive(i => (i - 1 + reviews.length) % reviews.length);
  const next = () => setActive(i => (i + 1) % reviews.length);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1 text-sm font-semibold">
            Отзывы учеников
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary">Результаты наших выпускников</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Реальные истории специалистов, которые изменили карьеру и доход после курса
          </p>
        </div>

        {/* Cases grid (replaces кейсы.png) */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              {/* Case header */}
              <div className="flex items-center gap-4 px-6 py-4 bg-slate-50 border-b border-slate-100">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                  <img src={c.photo} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{c.name}</p>
                  {c.quote && (
                    <p className="text-xs text-slate-500 italic leading-snug mt-0.5 max-w-xs">«{c.quote}»</p>
                  )}
                </div>
              </div>

              <div className="p-0">
                {/* ТОЧКА А */}
                <div>
                  <div className="bg-primary/10 px-5 py-2.5">
                    <span className="text-xs font-extrabold text-primary uppercase tracking-widest">Точка А — До курса</span>
                  </div>
                  <ul className="px-5 py-3 space-y-1.5">
                    {c.before.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ТОЧКА Б */}
                <div>
                  <div className="bg-[#f97316]/10 px-5 py-2.5">
                    <span className="text-xs font-extrabold text-[#f97316] uppercase tracking-widest">Точка Б — После курса</span>
                  </div>
                  <ul className="px-5 py-3 space-y-1.5">
                    {c.after.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-1.5 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
            <Quote className="text-primary/20 absolute top-8 left-8" size={64} />
            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
              <div className="shrink-0 text-center">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-4 border-primary/10 shadow-lg mx-auto">
                  <img src={reviews[active].photo} alt={reviews[active].name} className="w-full h-full object-cover" />
                </div>
                <p className="font-bold text-slate-900 text-sm mt-3">{reviews[active].name}</p>
                <p className="text-xs text-primary font-semibold mt-0.5">{reviews[active].role}</p>
              </div>
              <div className="flex-1">
                <p className="text-slate-700 text-lg leading-relaxed italic">"{reviews[active].text}"</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'}`} />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6">
            {reviews.map((r, i) => (
              <button key={i} onClick={() => setActive(i)} className={`rounded-2xl overflow-hidden border-2 transition-all ${i === active ? 'border-primary shadow-lg scale-105' : 'border-transparent opacity-60 hover:opacity-90'}`}>
                <img src={r.photo} alt={r.name} className="w-full h-24 object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
