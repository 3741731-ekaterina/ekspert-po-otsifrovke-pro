import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, PlayCircle, BookOpen, Target } from 'lucide-react';

const level1 = [
  {
    title: 'Модуль 1. Зачем нужен финдир и услуги финучета',
    lessons: [
      'Роль финансового директора на аутсорсе',
      'Организация работы на удаленке',
      'Диагностика клиента как первый этап продажи',
      'О чём договориться с клиентом до начала работы',
      'Как продать услугу управленческого учета через боли и потребности клиента'
    ],
    result: 'Знаете, зачем клиенту услуги финучета, как эти услуги продать и как выстроить работу на этапе оказания услуг. Готовы получать твердую базу, чтобы потом ее применить на реальных проектах.'
  },
  {
    title: 'Модуль 2. ДДС',
    lessons: [
      'Составление справочника для ДДС (теория)',
      'Подробные шаги внедрения отчета клиенту',
      'Платежный календарь: внедрение и назначение',
      'Настройка взаимосвязи Платежного календаря с ДДС'
    ],
    result: 'Получите навык ведения ДДС и организации его сбора. Навык формирования платежного календаря и понимание, какие боли можно закрыть платежным календарем.'
  },
  {
    title: 'Модуль 3. Отчет о прибылях и убытках',
    lessons: [
      'Отчет ОПИУ (PnL) и его назначение',
      'Зарплатная ведомость и учет основных средств',
      'Учет кредитов и налогов',
      'Учёт сделок. ДДС как источник информации',
      'Окончательная сборка ОПИУ'
    ],
    result: 'Получите навык составления Отчета о Прибылях и Убытках. Поймете какие цели и задачи решает отчет о прибылях и убытках.'
  },
  {
    title: 'Модуль 4. Управленческий баланс',
    lessons: [
      'Зачем управленческий баланс бизнесу и его источники информации',
      'Сбор первого управленческого Баланса',
      'Как добиться сходимости баланса',
      'Оборотный капитал, что это и как им управлять'
    ],
    result: 'Получите навык составления Управленческого Баланса.'
  },
  {
    title: 'Модуль 5. Финансовый Анализ ИИ-технологии',
    isSpecial: true,
    lessons: [
      'Виды финансового анализа: вертикальный и горизонтальный',
      'Факторный и план-фактный анализ. Практика выполнения',
      'Показатели ликвидности и финансовой устойчивости',
      'Презентация итогов финансового анализа клиенту',
      'Структура промпта для финансового анализа',
      'Практикум: анализ отчёта',
      'Гамма краткий обзор инструмента',
      'Практикум: собираем презентацию под клиента'
    ],
    result: 'Навык проведения финансового анализа всех отчетов по всех вариантах. Навык проводить финанализ при помощи ИИ.'
  },
  {
    title: 'Модуль 6. Как из навыков сделать услуги и продать их клиенту',
    lessons: [
      'Упаковка услуг',
      'Ценообразование',
      'Формирование кейсов без опыта работы финдиром',
      'Как предлагать услуги финучета без кейсов',
      'Как пройти собеседование на вакансию финдира'
    ],
    result: 'Превратили навыки в понятные услуги, знаете, как продать ваши услуги кому угодно, даже без опыта на живых проектах.'
  }
];

const level2 = [
  {
    title: 'Модуль 1. Зачем нужен финдир и услуги финучета',
    lessons: [
      'Роль финансового директора на аутсорсе',
      'Зачем бизнесу сервисы, если у клиента уже есть 1С',
      'Диагностика клиента как первый этап продажи',
      'О чём договориться с клиентом до начала работы',
      'Как обосновать стоимость сервиса и услуги внедрения',
      'Партнёрские программы Финтабло и План-факта'
    ],
    result: 'Знаете, зачем клиенту услуги финучета, как эти услуги продать и как выстроить работу на этапе оказания услуг. Умеете донести ценности ведения проектов на базе сервисов.'
  },
  {
    title: 'Модуль 2. Отчет ДДС в Финтабло и ПланФакте',
    lessons: [
      'Что такое ДДС и его источники информации',
      'Настойка программы и логика работы сервиса Финтабло',
      'ДДС в Финтабло: порядок построения',
      'Автоматическая сверка оборотов, реализация ДДС в ПланФакт',
      'Настойка программы и логика работы сервиса ПланФакт',
      'ДДС в ПланФакт: порядок построения'
    ],
    result: 'Навык сборки отчета ДДС на базе сервисов Финтабло и ПланФакт.'
  },
  {
    title: 'Модуль 3. Управление денежными потоками и платежный календарь в Финтабло и ПланФакте',
    lessons: [
      'Что такое платежный календарь и его назначение',
      'Как проанализировать денежные потоки при помощи ИИ',
      'Как на основании факта спланировать данные и собрать инфу от клиента',
      'Практика внедрения ПК в Финтабло',
      'Практика внедрения ПК ПланФакте'
    ],
    result: 'Умеете не просто учитывать факт, а помогать клиенту управлять деньгами на опережение.'
  },
  {
    title: 'Модуль 4. ОПиУ в Финтабло и ПланФакте: выручка, расходы, обязательства, налоги',
    lessons: [
      'Источники и логика признания. Кассовый и начисленный метод',
      'Расходы и зарплата. Отражение расходов, учёт зарплаты, налогов',
      'Основные средства и НДС. Амортизация, начисление налогов',
      'Практика построения ОПиУ в Финтабло',
      'Практика построения ОПиУ в ПланФакт'
    ],
    result: 'Навык формирования ОПиУ в сервисах Финтабло и ПланФакт.'
  },
  {
    title: 'Модуль 5. Отчет Баланс на базе сервисов Финтабло и ПланФакт',
    lessons: [
      'Зачем бизнесу управленческий баланс',
      'Как Баланс связан с ДДС и ОПиУ',
      'Логика отражения активов и обязательств',
      'Настройка Баланса в Финтабло и в ПланФакте',
      'Типовые ошибки и проверка корректности'
    ],
    result: 'Навык построения и работы с отчетом Баланс в сервисах.'
  },
  {
    title: 'Модуль 6. Финансовый Анализ ИИ-технологии',
    isSpecial: true,
    lessons: [
      'Виды финансового анализа: вертикальный и горизонтальный',
      'Факторный и план-фактный анализ',
      'Показатели ликвидности и финансовой устойчивости',
      'Презентация итогов финансового анализа клиенту',
      'Структура промпта для финансового анализа',
      'Практикум: анализ отчёта',
      'Гамма краткий обзор инструмента',
      'Практикум: собираем презентацию под клиента'
    ],
    result: 'Навык проведения финансового анализа всех отчетов при помощи ИИ.'
  },
  {
    title: 'Модуль 7. Финансовое планирование',
    lessons: [
      'Что такое БДДС и БДР',
      'БДДС в Финтабло и ПланФакт',
      'БДР в Финтабло и ПланФакт',
      'Заявки на оплату'
    ],
    result: 'Навык составления БДДС и БДС. Умеете планировать финансы компании в соответствии с целями бизнеса.'
  },
  {
    title: 'Модуль 8. Как из навыков сделать услуги и продать их клиенту',
    lessons: [
      'Упаковка услуг',
      'Ценообразование',
      'Формирование кейсов без опыта работы финдиром',
      'Как предлагать услуги финучета без кейсов',
      'Как пройти собеседование на вакансию финдира'
    ],
    result: 'Превратили навыки в понятные услуги, знаете, как продать ваши услуги кому угодно.'
  }
];

export function Program() {
  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary">Программа обучения</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            2 программы — 2 разных уровня обучения. Выбирайте то, что соответствует вашим целям.
          </p>
        </div>

        <p className="text-center text-lg font-semibold text-slate-600 mb-6 flex items-center justify-center gap-2">
          <span>👇</span>
          Жмите на кнопку «Уровень 1» или «Уровень 2», чтобы посмотреть программу соответствующего уровня
        </p>

        <Tabs defaultValue="level1" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 h-auto p-1.5 bg-slate-100 rounded-2xl mb-12 gap-1.5">
            <TabsTrigger
              value="level1"
              className="rounded-xl py-5 text-sm md:text-base font-bold transition-all duration-200
                data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-400/40
                data-[state=inactive]:text-slate-500 data-[state=inactive]:hover:text-blue-700 data-[state=inactive]:hover:bg-blue-50"
            >
              <span className="flex flex-col items-center gap-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-widest opacity-70">Уровень 1</span>
                <span>Финучёт на Таблицах</span>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="level2"
              className="rounded-xl py-5 text-sm md:text-base font-bold transition-all duration-200
                data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-orange-400/40
                data-[state=inactive]:text-slate-500 data-[state=inactive]:hover:text-orange-600 data-[state=inactive]:hover:bg-orange-50"
            >
              <span className="flex flex-col items-center gap-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-widest opacity-70">Уровень 2</span>
                <span>Финучёт на Автоматизированных сервисах</span>
              </span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="level1" className="space-y-8">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mb-8">
              <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                <Target size={24} />
                Результат от уровня 1:
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  'Владеете технологией ДДС, ОПиУ, Баланс на Google таблицах',
                  'Навыки фин. анализа и планирования с ИИ',
                  'Сильные, востребованные услуги финдира',
                  'Выход на доход от 250 000 рублей'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-medium">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Accordion className="space-y-4">
              {level1.map((module, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-2xl px-6 bg-slate-50/50 overflow-hidden">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center shrink-0 font-bold text-primary">
                        {idx + 1}
                      </div>
                      <span className="text-lg font-bold text-slate-900">
                        {module.title}
                        {module.isSpecial && <Badge className="ml-2 bg-orange-500 hover:bg-orange-600">ИИ-технологии</Badge>}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pt-2">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                          <PlayCircle size={14} />
                          Уроки модуля:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                          {module.lessons.map((lesson, i) => (
                            <li key={i} className="text-slate-600 flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 bg-white rounded-xl border border-slate-100">
                        <p className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2 mb-2">
                          <BookOpen size={14} />
                          Результат:
                        </p>
                        <p className="text-slate-700 font-medium">{module.result}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="level2" className="space-y-8">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mb-8">
              <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                <Target size={24} />
                Результат от уровня 2:
              </h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  'Внедряете финучёт на Финтабло и ПланФакт',
                  'Выход из операционки: 50%+ задач автоматизированы',
                  'Экономия 3–4 часов времени в день',
                  'Ведение 3–5 проектов одновременно'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm font-medium">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Accordion className="space-y-4">
              {level2.map((module, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-2xl px-6 bg-slate-50/50 overflow-hidden">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center shrink-0 font-bold text-primary">
                        {idx + 1}
                      </div>
                      <span className="text-lg font-bold text-slate-900">
                        {module.title}
                        {module.isSpecial && <Badge className="ml-2 bg-orange-500 hover:bg-orange-600">ИИ-технологии</Badge>}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pt-2">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                          <PlayCircle size={14} />
                          Уроки модуля:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                          {module.lessons.map((lesson, i) => (
                            <li key={i} className="text-slate-600 flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 bg-white rounded-xl border border-slate-100">
                        <p className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2 mb-2">
                          <BookOpen size={14} />
                          Результат:
                        </p>
                        <p className="text-slate-700 font-medium">{module.result}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <Button size="lg" className="h-14 px-12 text-lg rounded-xl shadow-xl shadow-primary/20" render={<a href="#pricing" />}>
            Выбрать тариф и начать обучение
          </Button>
        </div>
      </div>
    </section>
  );
}
