import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Check, Info, Star, Zap, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

declare function gcOpenModal(id: string): void;

/* ─── per-card colour tokens — нежная пастель ────────────────────────────── */
const schemes = {
  /* сиреневый / лаванда */
  blue: {
    cardBg:      'bg-gradient-to-b from-violet-50 to-white',
    headerBg:    'bg-gradient-to-br from-violet-300 to-indigo-300',
    badgeBg:     'bg-violet-100 text-violet-600',
    priceTxt:    'text-violet-600',
    checkActive: 'text-violet-400',
    sectionLbl:  'text-violet-300',
    starColor:   'text-violet-300',
    borderRing:  'ring-1 ring-violet-200',
    btnClass:    'bg-gradient-to-r from-violet-400 to-indigo-400 shadow-lg shadow-violet-200/60 hover:shadow-violet-300/60',
    popularBar:  '',
  },
  /* мятный / нефритовый */
  teal: {
    cardBg:      'bg-gradient-to-b from-emerald-50 to-white',
    headerBg:    'bg-gradient-to-br from-teal-300 to-emerald-300',
    badgeBg:     'bg-emerald-100 text-emerald-700',
    priceTxt:    'text-emerald-600',
    checkActive: 'text-emerald-400',
    sectionLbl:  'text-emerald-300',
    starColor:   'text-emerald-300',
    borderRing:  'ring-1 ring-emerald-200',
    btnClass:    'bg-gradient-to-r from-teal-400 to-emerald-400 shadow-lg shadow-emerald-200/60 hover:shadow-emerald-300/60',
    popularBar:  '',
  },
  /* персиковый / абрикосовый */
  orange: {
    cardBg:      'bg-gradient-to-b from-rose-50 to-white',
    headerBg:    'bg-gradient-to-br from-rose-300 to-orange-200',
    badgeBg:     'bg-rose-100 text-rose-600',
    priceTxt:    'text-rose-500',
    checkActive: 'text-rose-400',
    sectionLbl:  'text-rose-300',
    starColor:   'text-rose-300',
    borderRing:  'ring-1 ring-rose-200',
    btnClass:    'bg-gradient-to-r from-rose-400 to-orange-300 shadow-lg shadow-rose-200/60 hover:shadow-rose-300/60',
    popularBar:  'bg-gradient-to-r from-rose-400 to-orange-300',
  },
} as const;

type Scheme = keyof typeof schemes;

const tariffs = [
  {
    level: 'Уровень 1',
    name: 'Фундамент',
    description: 'Финучёт на таблицах',
    price: '70 000',
    popular: false,
    scheme: 'blue' as Scheme,
    icon: <Star className="text-white/90" size={22} />,
    modules: [
      { text: 'Модуль 1. Зачем нужен финдир и услуги финучёта', faded: false },
      { text: 'Модуль 2. ДДС', faded: false },
      { text: 'Модуль 3. Отчёт о прибылях и убытках', faded: false },
      { text: 'Модуль 4. Управленческий баланс', faded: false },
      { text: 'Модуль 5. Финансовый анализ и презентация отчётности', faded: false },
      { text: 'Модуль 6. Как из навыков сделать услуги и продать их клиенту', faded: false },
    ],
    bonuses: ['Курс по Google-таблицам', 'Курс по нейросетям', 'Урок по Unit-экономике', 'Учебник (при оплате до 1 мая)'],
    access: ['Общий чат с учениками', 'Проверка ДЗ экспертом', '6 созвонов с экспертом', 'Доступ к курсу 1 год', 'Сертификат'],
    widgetId: '1590613',
    scriptId: 'e15b4f1aaaabd44641abb60da25eb7c129a90425',
  },
  {
    level: 'Уровень 2',
    name: 'Базовый PRO',
    description: 'Финучёт на сервисах Финтабло и ПланФакт',
    price: '80 000',
    popular: false,
    scheme: 'teal' as Scheme,
    icon: <Zap className="text-white/90" size={22} />,
    modules: [
      { text: 'Модуль 1. Зачем нужен финдир и услуги финучёта', faded: false },
      { text: 'Модуль 2. Отчёт ДДС', faded: false },
      { text: 'Модуль 3. Управление денежными потоками и платёжный календарь', faded: false },
      { text: 'Модуль 4. ОПиУ: выручка, расходы, зарплата, обязательства, налоги', faded: false },
      { text: 'Модуль 5. Баланс', faded: false },
      { text: 'Модуль 6. Финансовый анализ и презентация отчётности', faded: false },
      { text: 'Модуль 7. Финансовое планирование (Бюджетирование)', faded: true },
      { text: 'Модуль 8. Как из навыков сделать услуги и продать их клиенту', faded: true },
    ],
    bonuses: ['Курс по Google-таблицам', 'Курс по нейросетям', 'Урок по Unit-экономике', 'Учебник (при оплате до 1 мая)'],
    access: ['Общий чат с учениками', 'Проверка ДЗ куратором', '6 созвонов с экспертами', 'Доступ к курсу 1 год', 'Сертификат'],
    widgetId: '1590614',
    scriptId: '298380bb3e0a84be6ed550763ad89aea7f88185f',
  },
  {
    level: 'Уровень 2',
    name: 'Бизнес PRO',
    description: 'Максимальный результат',
    price: '90 000',
    popular: true,
    scheme: 'orange' as Scheme,
    icon: <Rocket className="text-white/90" size={22} />,
    modules: [
      { text: 'Модуль 1. Зачем нужен финдир и услуги финучёта', faded: false },
      { text: 'Модуль 2. Отчёт ДДС', faded: false },
      { text: 'Модуль 3. Управление денежными потоками и платёжный календарь', faded: false },
      { text: 'Модуль 4. ОПиУ: выручка, расходы, зарплата, обязательства, налоги', faded: false },
      { text: 'Модуль 5. Баланс', faded: false },
      { text: 'Модуль 6. Финансовый анализ и презентация отчётности', faded: false },
      { text: 'Модуль 7. Финансовое планирование (Бюджетирование)', faded: false },
      { text: 'Модуль 8. Как из навыков сделать услуги и продать их клиенту', faded: false },
    ],
    bonuses: ['Курс по Google-таблицам', 'Курс по нейросетям', 'Урок по Unit-экономике', 'Учебник (при оплате до 1 мая)'],
    access: ['Общий чат с учениками', 'Проверка ДЗ куратором', '8 созвонов с экспертом', 'Доступ к курсу 1,5 года', 'Сертификат'],
    widgetId: '1590615',
    scriptId: 'fbe7a5c2c9da2b051496fc15622c2e1c533ddc18',
  },
];

type Tariff = (typeof tariffs)[number];

function TariffCard({ tariff }: { tariff: Tariff }) {
  const s = schemes[tariff.scheme];
  return (
    <Card
      className={cn(
        'flex flex-col relative overflow-hidden border-none shadow-xl transition-transform duration-300',
        s.cardBg,
        tariff.popular
          ? cn(s.borderRing, 'scale-[1.03] z-10 shadow-2xl hover:scale-[1.06]')
          : cn(s.borderRing, 'hover:scale-[1.02]')
      )}
    >
      {/* Popular banner */}
      {tariff.popular && (
        <div className={cn('absolute top-0 left-0 right-0 text-white text-center py-2.5 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5', s.popularBar)}>
          <span>🔥</span> Самый популярный <span>🔥</span>
        </div>
      )}

      {/* Coloured header block */}
      <div className={cn('px-7 pt-7 pb-6 rounded-t-2xl', s.headerBg, tariff.popular && 'pt-11')}>
        <div className="flex items-center gap-2 mb-3">
          <span className={cn('text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full', s.badgeBg)}>
            {tariff.level}
          </span>
        </div>
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xl font-bold text-white">{tariff.name}</h3>
          {tariff.icon}
        </div>
        <p className="text-white/70 text-xs mb-4">{tariff.description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-white">{tariff.price}</span>
          <span className="text-white/70 font-medium">₽</span>
        </div>
      </div>

      <CardContent className="p-7 pt-5 flex-1 space-y-5">
        <div className="space-y-2">
          <p className={cn('text-[10px] font-bold uppercase tracking-widest', s.sectionLbl)}>Доступные модули:</p>
          <ul className="space-y-1.5">
            {tariff.modules.map((m, i) => (
              <li key={i} className={cn('flex items-start gap-2 text-xs', m.faded ? 'text-slate-300 line-through' : 'text-slate-600')}>
                <Check className={cn('shrink-0 mt-0.5', m.faded ? 'text-slate-200' : s.checkActive)} size={13} />
                <span>{m.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <p className={cn('text-[10px] font-bold uppercase tracking-widest', s.sectionLbl)}>Бонусы:</p>
          <ul className="space-y-1.5">
            {tariff.bonuses.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-800">
                <Star className={cn('shrink-0 mt-0.5', s.starColor)} size={13} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Доступы и связь:</p>
          <ul className="space-y-1.5">
            {tariff.access.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                <Check className="text-slate-300 shrink-0 mt-0.5" size={13} />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="p-7 pt-0 flex-col items-stretch">
        <button
          type="button"
          onClick={() => gcOpenModal(tariff.widgetId)}
          className={cn(
            'w-full py-4 px-8 rounded-xl font-bold text-base text-white border-none cursor-pointer',
            'flex items-center justify-center gap-2',
            'transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]',
            s.btnClass
          )}
        >
          <span>👆</span>
          <span>КУПИТЬ</span>
        </button>
      </CardFooter>
    </Card>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary">Цены и тарифы</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Выберите подходящий уровень обучения и начните путь к востребованной профессии.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {tariffs.map((tariff, idx) => (
            <TariffCard key={idx} tariff={tariff} />
          ))}
        </div>

        {/* Special offers */}
        <div className="mt-16 max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-5 flex items-center gap-3 text-primary">
              <Info className="text-primary" size={20} />
              Спецпредложение и скидки
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="font-bold text-slate-900 text-sm">Для выпускников курса:</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ранее учились на курсе и идёте на 2 уровень —{' '}
                  <span className="text-primary font-bold">скидка 30%</span> на любой тариф.
                </p>
                <p className="text-xs text-slate-400">Кодовое слово <span className="font-bold text-slate-600">СКИДКА</span> — напишите в ТГ или МАХ.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-slate-900 text-sm">Для тех, кто идёт на оба уровня:</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Хотите учиться 4 месяца (2+2) —{' '}
                  <span className="text-primary font-bold">скидка 40%</span> на уровень 2.
                </p>
                <p className="text-xs text-slate-400">Кодовое слово <span className="font-bold text-slate-600">УРОВЕНЬ</span> — напишите в ТГ или МАХ.</p>
              </div>
            </div>
          </div>

          {/* Installments — compact */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left: blue header with big % */}
              <div className="bg-primary px-8 py-10 flex flex-col justify-center relative overflow-hidden">
                {/* Giant % watermark */}
                <span className="absolute right-0 bottom-0 text-[160px] font-black text-white/10 leading-none select-none translate-x-4 translate-y-4">%</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase leading-tight relative z-10">
                  Беспроцентная<br />рассрочка<br />до 12 месяцев
                </h3>
                {/* Official bank logos row */}
                <div className="flex flex-wrap gap-3 mt-6 relative z-10">
                  <div className="h-10 px-2 rounded-xl bg-white flex items-center justify-center shadow-md" title="Сбербанк">
                    <img src={`${import.meta.env.BASE_URL}images/sber.jpg`} alt="Сбербанк" className="h-7 w-auto object-contain" />
                  </div>
                  <div className="h-10 px-2 rounded-xl bg-white flex items-center justify-center shadow-md" title="Т-Банк">
                    <img src={`${import.meta.env.BASE_URL}images/tbank.svg`} alt="Т-Банк" className="h-7 w-auto object-contain" />
                  </div>
                  <div className="h-10 px-2 rounded-xl bg-white flex items-center justify-center shadow-md" title="ОТП Банк">
                    <img src={`${import.meta.env.BASE_URL}images/otp-bank.png`} alt="ОТП Банк" className="h-7 w-auto object-contain" />
                  </div>
                  <div className="h-10 px-2 rounded-xl bg-white flex items-center justify-center shadow-md" title="МТС Банк">
                    <img src={`${import.meta.env.BASE_URL}images/mts-bank.png`} alt="МТС Банк" className="h-7 w-auto object-contain" />
                  </div>
                </div>
              </div>

              {/* Right: details */}
              <div className="px-8 py-8 space-y-4">
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    Без процентов и переплат — расходы беру на себя
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-1.5 shrink-0" />
                    <span>Доверительная рассрочка на <strong>2 месяца</strong> лично от меня</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    Все бонусы при рассрочке сохраняются
                  </li>
                </ul>

                <div className="bg-slate-50 rounded-xl px-4 py-3 text-xs text-slate-500 border border-slate-100">
                  <span className="font-bold text-slate-700 block mb-1">Важно:</span>
                  Только для граждан России (18+). С СНГ и Крымом банки не работают.
                </div>

                <div className="flex flex-col gap-2.5 pt-1">
                  <a
                    href="https://t.me/yakhontova_finance"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors shadow-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.3"/>
                      <path d="M17.64 7.11L15.3 17.25c-.17.76-.63.95-1.27.59l-3.5-2.58-1.69 1.63c-.19.19-.34.34-.69.34l.25-3.56 6.4-5.78c.28-.25-.06-.38-.43-.14L6.3 12.57 2.83 11.5c-.75-.23-.76-.75.16-1.12l13.74-5.3c.62-.23 1.17.15.91 1.03z" fill="white"/>
                    </svg>
                    Написать в Telegram
                  </a>
                  <a
                    href="https://max.ru/u/f9LHodD0cOK4FCCehXDnZVD9DPEf3Pur_Rgmnral_wmHP9O1MFHvQz7C16o"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-white font-bold text-sm px-5 py-3 rounded-xl transition-opacity hover:opacity-90 shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #5B4FE8 0%, #8B5CF6 40%, #3B82F6 100%)' }}
                  >
                    <img src={`${import.meta.env.BASE_URL}images/max-logo.png`} alt="MAX" className="w-4 h-4 rounded object-cover" />
                    Написать в МАХ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
