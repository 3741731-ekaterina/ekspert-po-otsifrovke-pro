import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Info, Star, Zap, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

/* GetCourse widget loader */
function GetCourseWidget({ widgetId, scriptId }: { widgetId: string; scriptId: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = '';
    const s = document.createElement('script');
    s.id = scriptId;
    s.src = `https://yahontovaschool.getcourse.ru/pl/lite/widget/script?id=${widgetId}`;
    ref.current.appendChild(s);
  }, [widgetId, scriptId]);
  return <div ref={ref} className="mt-3 [&_a]:!w-full [&_a]:!block" />;
}

const tariffs = [
  {
    level: 'Уровень 1',
    name: 'Фундамент',
    description: 'Финучёт на таблицах',
    price: '70 000',
    popular: false,
    icon: <Star className="text-primary" size={22} />,
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
    icon: <Zap className="text-primary" size={22} />,
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
    access: ['Общий чат с учениками', 'Проверка ДЗ куратором', '5 созвонов с экспертами', 'Доступ к курсу 1 год', 'Сертификат'],
    widgetId: '1590614',
    scriptId: '298380bb3e0a84be6ed550763ad89aea7f88185f',
  },
  {
    level: 'Уровень 2',
    name: 'Бизнес PRO',
    description: 'Максимальный результат',
    price: '90 000',
    popular: true,
    icon: <Rocket className="text-primary" size={22} />,
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
            <Card
              key={idx}
              className={cn(
                'flex flex-col relative overflow-hidden border-none shadow-xl',
                tariff.popular
                  ? 'ring-2 ring-[#f97316] scale-[1.02] z-10 shadow-2xl shadow-orange-100'
                  : 'bg-white'
              )}
            >
              {tariff.popular && (
                <div className="absolute top-0 left-0 right-0 bg-[#f97316] text-white text-center py-2 text-xs font-bold uppercase tracking-widest">
                  Самый популярный
                </div>
              )}
              <CardHeader className={cn('p-7 pb-4', tariff.popular && 'pt-10')}>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-none text-xs">{tariff.level}</Badge>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <CardTitle className="text-xl font-bold">{tariff.name}</CardTitle>
                  {tariff.icon}
                </div>
                <p className="text-slate-500 text-xs mb-4">{tariff.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">{tariff.price}</span>
                  <span className="text-slate-500 font-medium">₽</span>
                </div>
              </CardHeader>

              <CardContent className="p-7 pt-3 flex-1 space-y-6">
                {/* Modules */}
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Доступные модули:</p>
                  <ul className="space-y-1.5">
                    {tariff.modules.map((m, i) => (
                      <li
                        key={i}
                        className={cn(
                          'flex items-start gap-2 text-xs',
                          m.faded ? 'text-slate-300 line-through' : 'text-slate-600'
                        )}
                      >
                        <Check
                          className={cn('shrink-0 mt-0.5', m.faded ? 'text-slate-200' : 'text-primary')}
                          size={13}
                        />
                        <span>{m.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bonuses */}
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-[#f97316] uppercase tracking-widest">Бонусы:</p>
                  <ul className="space-y-1.5">
                    {tariff.bonuses.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-800">
                        <Star className="text-[#f97316] shrink-0 mt-0.5" size={13} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Access */}
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

              <CardFooter className="p-7 pt-0 flex-col items-stretch gap-0">
                <Button
                  className={cn(
                    'w-full h-13 text-base font-bold rounded-xl border-none',
                    tariff.popular
                      ? 'bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-100'
                      : 'bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-orange-100'
                  )}
                  size="lg"
                  onClick={() => {
                    // Scroll to widget rendered below
                    document
                      .getElementById(`widget-${tariff.widgetId}`)
                      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  КУПИТЬ
                </Button>
                <div id={`widget-${tariff.widgetId}`}>
                  <GetCourseWidget widgetId={tariff.widgetId} scriptId={tariff.scriptId} />
                </div>
              </CardFooter>
            </Card>
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
                  <span className="text-primary font-bold">скидка 30%</span> на оба уровня.
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
                {/* Official bank icons row */}
                <div className="flex flex-wrap gap-3 mt-6 relative z-10">
                  {/* Sberbank */}
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md" title="Сбербанк">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#21A038"/>
                      <path d="M12 4.5C9.8 4.5 7.9 5.4 6.5 6.8L8.2 8.5C9.2 7.6 10.5 7 12 7C15.3 7 18 9.7 18 13H20C20 8.6 16.4 5 12 5V4.5Z" fill="white" opacity="0.9"/>
                      <path d="M12 19C8.7 19 6 16.3 6 13H4C4 17.4 7.6 21 12 21V19Z" fill="white" opacity="0.9"/>
                      <circle cx="12" cy="13" r="3.5" fill="white"/>
                    </svg>
                  </div>
                  {/* Tinkoff */}
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md" title="Т-Банк (Тинькофф)">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#FFDD2D"/>
                      <text x="12" y="17" textAnchor="middle" fill="#333" fontSize="13" fontWeight="900" fontFamily="Arial, sans-serif">Т</text>
                    </svg>
                  </div>
                  {/* OTP */}
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md" title="ОТП банк">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#EF3124"/>
                      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="900" fontFamily="Arial, sans-serif">OTP</text>
                    </svg>
                  </div>
                  {/* MTS */}
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md" title="МТС банк">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#E30611"/>
                      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="900" fontFamily="Arial, sans-serif">МТС</text>
                    </svg>
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
                    className="inline-flex items-center justify-center gap-2 border border-primary/30 text-primary hover:bg-primary/5 font-bold text-sm px-5 py-3 rounded-xl transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#0077FF"/>
                      <text x="12" y="17" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial">M</text>
                    </svg>
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
