import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cpu, TrendingUp } from 'lucide-react';

const floatingIcons = [
  {
    label: 'Google Таблицы',
    img: null,
    emoji: '📊',
    color: 'bg-green-50 border-green-100',
    animate: { y: [0, -18, 0] },
    duration: 4,
    delay: 0,
    position: 'top-[8%] left-[4%]',
  },
  {
    label: 'Финтабло',
    img: '/images/fintablo.webp',
    color: 'bg-white border-slate-100',
    animate: { y: [0, 16, 0] },
    duration: 5,
    delay: 0.7,
    position: 'top-[20%] right-[-2%]',
  },
  {
    label: 'ПланФакт',
    img: '/images/planfact.jpg',
    color: 'bg-white border-slate-100',
    animate: { x: [0, -12, 0] },
    duration: 6,
    delay: 1.2,
    position: 'bottom-[18%] left-[2%]',
  },
  {
    label: 'Фин. анализ',
    icon: <TrendingUp className="text-white" size={22} />,
    color: 'bg-primary border-primary/30',
    animate: { scale: [1, 1.08, 1] },
    duration: 3.5,
    delay: 0.3,
    position: 'bottom-[30%] right-[-3%]',
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      {/* Subtle blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm font-semibold">
                Старт — 11 мая
              </Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm font-semibold">
                2 месяца обучения
              </Badge>
              <Badge className="bg-orange-50 text-orange-600 border-orange-200 px-3 py-1 text-sm font-semibold">
                2-уровневая программа · эксклюзив
              </Badge>
            </div>

            <div className="space-y-3">
              <h2 className="text-base md:text-lg font-bold text-primary uppercase tracking-[0.2em]">
                Практический курс
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Эксперт по оцифровке бизнеса{' '}
                <span className="text-primary">PRO</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed">
              Бизнесу не нужны сложные таблицы и расчёты. Предприниматель покупает{' '}
              <span className="text-slate-800 font-semibold">систему управления финансами</span>,
              правильные решения, защиту от кассовых разрывов и рисков.
            </p>

            <p className="text-lg font-semibold text-slate-800 leading-relaxed">
              Станьте специалистом, который создаёт компании финансовую стабильность и рост прибыли,
              а себе — достойный заработок на услугах управленческого учёта.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-xl font-bold bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-200 border-none"
                render={<a href="#pricing" />}
              >
                Выбрать тариф
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg rounded-xl font-semibold border-primary/30 text-primary hover:bg-primary/5 bg-white"
                render={<a href="#program" />}
              >
                Смотреть программу
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Для кого:</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-slate-700 font-semibold text-sm">
                {['Финансистам', 'Финдирам', 'Бухгалтерам', 'Главбухам', 'Финменеджерам'].map(t => (
                  <span key={t} className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2 text-primary font-semibold text-sm">
                <Cpu size={16} />
                <span>На базе таблиц и автоматизированных сервисов · Усилен ИИ-инструментами</span>
              </div>
            </div>
          </div>

          {/* Right: Photo + floating icons */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              {/* Main photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-primary/10">
                <img
                  src="/images/hero.png"
                  alt="Екатерина Яхонтова — эксперт по оцифровке бизнеса"
                  className="w-full h-auto object-cover"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/30 to-transparent" />
              </div>

              {/* Floating badges */}
              {floatingIcons.map((item, i) => (
                <motion.div
                  key={i}
                  animate={item.animate as any}
                  transition={{ duration: item.duration, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
                  className={`absolute ${item.position} p-3 rounded-2xl shadow-xl border ${item.color} flex items-center gap-2.5 backdrop-blur-sm z-10`}
                >
                  {item.img ? (
                    <img src={item.img} alt={item.label} className="w-8 h-8 rounded-lg object-cover" />
                  ) : item.icon ? (
                    <span className="w-8 h-8 flex items-center justify-center">{item.icon}</span>
                  ) : (
                    <span className="text-2xl">{item.emoji}</span>
                  )}
                  <span className={`font-bold text-sm whitespace-nowrap ${item.color.includes('bg-primary') ? 'text-white' : 'text-slate-800'}`}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
