import React, { useEffect } from 'react';
import { Header } from './components/landing/Header';
import { Hero } from './components/landing/Hero';
import { Comparison } from './components/landing/Comparison';
import { ForWhom } from './components/landing/ForWhom';
import { Program } from './components/landing/Program';
import { Bonuses } from './components/landing/Bonuses';
import { Format } from './components/landing/Format';
import { Reviews } from './components/landing/Reviews';
import { Author } from './components/landing/Author';
import { Pricing } from './components/landing/Pricing';
import { FAQ } from './components/landing/FAQ';
import { ContactCTA } from './components/landing/ContactCTA';
import { Button } from '@/components/ui/button';

/* Official Telegram SVG */
const TgIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#229ED9"/>
    <path d="M17.64 7.11L15.3 17.25c-.17.76-.63.95-1.27.59l-3.5-2.58-1.69 1.63c-.19.19-.34.34-.69.34l.25-3.56 6.4-5.78c.28-.25-.06-.38-.43-.14L6.3 12.57 2.83 11.5c-.75-.23-.76-.75.16-1.12l13.74-5.3c.62-.23 1.17.15.91 1.03z" fill="white"/>
  </svg>
);

/* MAX icon */
const MaxIcon = ({ size = 20 }: { size?: number }) => (
  <img
    src={`${import.meta.env.BASE_URL}images/max-logo.png`}
    alt="MAX"
    width={size}
    height={size}
    style={{ borderRadius: 6, display: 'inline-block' }}
  />
);

export default function App() {
  useEffect(() => {
    // ── 1. Scroll reveal for sections ──────────────────────────
    const sections = document.querySelectorAll('main > section, main > div > section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -60px 0px' }
    );
    sections.forEach((section, idx) => {
      if (idx === 0) {
        // Hero always visible immediately
        section.classList.add('visible');
      } else {
        section.classList.add('reveal-section');
        observer.observe(section);
      }
    });

    // ── 2. Card hover lift ──────────────────────────────────────
    // Target white cards with borders/shadows
    const cardSelectors = [
      '.rounded-3xl.bg-white',
      '.rounded-3xl.bg-white\\/50',
      '.rounded-2xl.bg-white',
      'article',
    ];
    cardSelectors.forEach((sel) => {
      try {
        document.querySelectorAll(sel).forEach((el) => {
          const hasInteractive = el.closest('a') || el.tagName === 'A';
          if (!hasInteractive) el.classList.add('card-lift');
        });
      } catch (_) {}
    });

    // ── 3. Parallax on hero background blobs ───────────────────
    const blobs = document.querySelectorAll<HTMLElement>('.parallax-blob');
    const onScroll = () => {
      const sy = window.scrollY;
      blobs.forEach((blob, i) => {
        const speed = i % 2 === 0 ? 0.18 : -0.12;
        blob.style.transform = `translateY(${sy * speed}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Header />

      <main className="flex-1">
        <Hero />
        <Comparison />
        <ForWhom />
        <Program />
        <Bonuses />
        <Format />
        <Pricing />
        <Reviews />
        <Author />
        <FAQ />
        <ContactCTA />
      </main>

      <footer className="bg-blue-950 text-white py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src={`${import.meta.env.BASE_URL}images/school-logo.png`}
                  alt="Школа финансового аутсорсинга Екатерины Яхонтовой"
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-white/10"
                />
                <div className="leading-tight">
                  <p className="text-[10px] text-blue-300/70 uppercase tracking-widest font-semibold leading-none mb-0.5">Школа</p>
                  <p className="text-sm font-extrabold leading-snug">Финансового<br/>аутсорсинга</p>
                  <p className="text-xs text-blue-200/70 font-medium">Екатерины Яхонтовой</p>
                </div>
              </div>
              <p className="text-blue-200/60 text-sm leading-relaxed">
                Практический курс по управленческому учёту и оцифровке бизнеса от эксперта с 18-летним опытом.
              </p>
            </div>

            {/* Nav */}
            <div className="space-y-5">
              <h4 className="font-bold text-base">Навигация</h4>
              <ul className="space-y-2.5 text-blue-200/60 text-sm">
                <li><a href="#for-whom" className="hover:text-primary transition-colors">Для кого</a></li>
                <li><a href="#program" className="hover:text-primary transition-colors">Программа</a></li>
                <li><a href="#bonuses" className="hover:text-primary transition-colors">Бонусы</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Contacts */}
            <div className="space-y-5">
              <h4 className="font-bold text-base">Контакты</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://t.me/yakhontova_finance"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-blue-200/60 hover:text-white transition-colors text-sm"
                >
                  <TgIcon size={18} />
                  <span>Личные сообщения</span>
                </a>
                <a
                  href="https://t.me/yahontova_profinance"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-blue-200/60 hover:text-white transition-colors text-sm"
                >
                  <TgIcon size={18} />
                  <span>Канал (5 000+)</span>
                </a>
                <a
                  href="https://max.ru/u/f9LHodD0cOK4FCCehXDnZVD9DPEf3Pur_Rgmnral_wmHP9O1MFHvQz7C16o"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-blue-200/60 hover:text-white transition-colors text-sm"
                >
                  <MaxIcon size={18} />
                  <span>MAX</span>
                </a>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-5">
              <h4 className="font-bold text-base">Поддержка</h4>
              <p className="text-blue-200/60 text-sm">
                Есть вопросы? Напишите нам — поможем выбрать подходящий тариф.
              </p>
              <Button
                className="w-full rounded-xl bg-[#f97316] hover:bg-[#ea580c] border-none text-white font-bold"
                render={<a href="https://t.me/yakhontova_finance" target="_blank" rel="noreferrer" />}
              >
                Задать вопрос
              </Button>
            </div>
          </div>

          {/* Legal links */}
          <div className="pt-8 border-t border-white/10 space-y-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="https://disk.yandex.ru/i/cmz36rgtz848UA"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300/40 hover:text-white text-xs transition-colors"
              >
                Политика обработки персональных данных
              </a>
              <a
                href="https://disk.yandex.ru/i/hG8EL0jriKnSLA"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300/40 hover:text-white text-xs transition-colors"
              >
                Согласие на обработку данных
              </a>
              <a
                href="https://disk.yandex.ru/i/2Yby1XfgYDg7fw"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300/40 hover:text-white text-xs transition-colors"
              >
                Согласие на рассылку
              </a>
              <a
                href="https://docs.google.com/document/d/1x5CCeTvVgj4q9vZdSjTiVvQYEHEpnsO7MssPaU3Ouvo/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300/40 hover:text-white text-xs transition-colors"
              >
                Оферта
              </a>
            </div>
            <p className="text-blue-300/40 text-xs">
              © {new Date().getFullYear()} Эксперт по оцифровке бизнеса PRO. Все права защищены.
            </p>
            <p className="text-blue-300/30 text-xs">
              ИП Яхонтова Екатерина Владимировна · ОГРНИП 319028000105642 · ИНН 025803729988
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
