import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cpu } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

const floatingIcons = [
  {
    label: 'Google Таблицы',
    img: null,
    emoji: '📊',
    color: 'bg-white border-slate-100',
    animate: { y: [0, -14, 0] },
    duration: 4,
    delay: 0,
    position: 'top-[12%] left-[2%]',
  },
  {
    label: 'Финтабло',
    img: `${BASE}images/fintablo.webp`,
    color: 'bg-white border-slate-100',
    animate: { y: [0, 14, 0] },
    duration: 5,
    delay: 0.7,
    position: 'top-[6%] right-[4%]',
  },
  {
    label: 'ПланФакт',
    img: `${BASE}images/planfact.jpg`,
    color: 'bg-white border-slate-100',
    animate: { x: [0, -10, 0] },
    duration: 6,
    delay: 1.2,
    position: 'bottom-[22%] left-[0%]',
  },
  {
    label: 'Фин. анализ',
    img: `${BASE}images/fa.png`,
    color: 'bg-white border-slate-100',
    animate: { scale: [1, 1.07, 1] },
    duration: 3.5,
    delay: 0.3,
    position: 'bottom-[38%] right-[2%]',
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* ── BACKGROUND LAYER ─────────────────────────────── */}

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white to-orange-50/20 pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(37,99,235,0.07) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Orb 1 — blue, top-right, slow pulse */}
      <motion.div
        className="parallax-blob absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 40% 40%, rgba(37,99,235,0.12) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.18, 1], rotate: [0, 25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Orb 2 — orange, bottom-left */}
      <motion.div
        className="parallax-blob absolute -bottom-40 -left-20 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 60% 60%, rgba(249,115,22,0.09) 0%, transparent 65%)' }}
        animate={{ scale: [1, 1.22, 1], rotate: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* 3D ring 1 — large, blue, tilted */}
      <motion.div
        className="absolute top-[15%] right-[28%] w-72 h-72 rounded-full border border-primary/10 pointer-events-none"
        style={{ transform: 'rotateX(65deg) rotateZ(10deg)', transformStyle: 'preserve-3d' }}
        animate={{ rotateZ: [10, 30, 10] } as any}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 3D ring 2 — small, orange, fast */}
      <motion.div
        className="absolute bottom-[25%] left-[22%] w-40 h-40 rounded-full border border-orange-300/20 pointer-events-none"
        style={{ transform: 'rotateX(55deg) rotateZ(-15deg)', transformStyle: 'preserve-3d' }}
        animate={{ rotateZ: [-15, 5, -15] } as any}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Floating sparkle dots */}
      {[
        { top: '20%', left: '30%', delay: 0 },
        { top: '60%', left: '12%', delay: 1.5 },
        { top: '35%', right: '18%', delay: 0.8 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/30 pointer-events-none"
          style={pos as any}
          animate={{ scale: [0.5, 1.4, 0.5], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: pos.delay }}
        />
      ))}

      {/* ── CONTENT ──────────────────────────────────────── */}
      <div className="container mx-auto px-4 relative z-10 py-8 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] gap-4 lg:gap-8 items-center min-h-[calc(100vh-4rem)] lg:min-h-0">

          {/* LEFT — Text */}
          <div className="space-y-6 lg:pr-8 py-8 lg:py-16 order-1 lg:order-1">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                Старт — 11 мая
              </Badge>
              <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                2 месяца обучения
              </Badge>
              <Badge className="bg-orange-50 text-orange-600 border-orange-200 px-3 py-1 text-xs font-bold">
                Эксклюзив · 2 уровня
              </Badge>
            </div>

            <div className="space-y-2">
              <p className="text-sm md:text-base font-bold text-primary/70 uppercase tracking-[0.25em]">
                Практический курс
              </p>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.06]">
                Эксперт по<br />
                оцифровке<br />
                бизнеса{' '}
                <span className="text-gradient-anim">PRO</span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-slate-500 max-w-lg leading-relaxed">
              Финансист не тот, кто «просто строит таблицы», а тот, кто{' '}
              <span className="text-slate-800 font-semibold">создаёт систему управления финансами бизнеса</span>.
              Станьте специалистом, который обеспечивает финансовую безопасность и напрямую влияет на прибыль компании.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Button
                size="lg"
                className="btn-shine h-13 px-8 text-base rounded-2xl font-bold bg-[#f97316] hover:bg-[#ea580c] text-white shadow-xl shadow-orange-200/60 border-none"
                render={<a href="#pricing" />}
              >
                Выбрать тариф
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-13 px-8 text-base rounded-2xl font-semibold border-slate-200 text-slate-700 hover:border-primary hover:text-primary hover:bg-primary/5 bg-white/80"
                render={<a href="#program" />}
              >
                Смотреть программу
              </Button>
            </div>

            <div className="pt-5 border-t border-slate-100 space-y-2">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Для кого:</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-slate-700 font-semibold text-sm">
                {['Финансистам', 'Финдирам', 'Бухгалтерам', 'Главбухам', 'Финменеджерам'].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <div className="flex items-start gap-2 text-primary/80 font-medium text-xs">
                  <span className="text-base">📊</span>
                  <span><strong>Программа 1</strong> — с полного нуля на базе таблиц</span>
                </div>
                <div className="flex items-start gap-2 text-primary/80 font-medium text-xs">
                  <span className="text-base">⚙️</span>
                  <span><strong>Программа 2</strong> — для опытных на базе автоматизированных сервисов</span>
                </div>
                <div className="flex items-center gap-2 text-orange-500 font-bold text-xs">
                  <Cpu size={13} />
                  <span>Усилен ИИ-инструментами</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Photo (no background, full height) */}
          <div className="relative order-2 lg:order-2 flex justify-center lg:justify-end items-end">

            {/* Glow under photo */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)', filter: 'blur(24px)' }}
            />

            {/* Photo */}
            <motion.img
              src={`${BASE}images/hero-nobg.png`}
              alt="Екатерина Яхонтова — эксперт по оцифровке бизнеса"
              className="relative w-full max-w-[340px] md:max-w-[400px] lg:max-w-[420px] xl:max-w-[460px] h-auto"
              style={{ filter: 'drop-shadow(0 32px 64px rgba(37,99,235,0.18)) drop-shadow(0 8px 20px rgba(0,0,0,0.1))' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Floating service badges */}
            {floatingIcons.map((item, i) => (
              <motion.div
                key={i}
                animate={item.animate as any}
                transition={{ duration: item.duration, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
                className={`absolute ${item.position} px-3 py-2 rounded-2xl shadow-xl border ${item.color} flex items-center gap-2 backdrop-blur-sm z-10`}
              >
                {item.img ? (
                  <img src={item.img} alt={item.label} className="w-7 h-7 rounded-lg object-cover" />
                ) : (
                  <span className="text-xl">{item.emoji}</span>
                )}
                <span className="font-bold text-xs text-slate-800 whitespace-nowrap">{item.label}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
