import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ChevronUp, BookOpen } from 'lucide-react';

const groups = [
  {
    label: 'Для кого курс',
    color: 'bg-blue-100 text-blue-700',
    dot: 'bg-blue-500',
    faqs: [
      {
        num: 1,
        q: 'Я бухгалтер. Мне подойдёт курс?',
        a: 'Да. Курс подходит для тех, кто ещё не работает финансовым директором, но хочет им стать. Для вас — Уровень 1: финансовый учёт на базе таблиц.',
      },
      {
        num: 2,
        q: 'Я уже работаю финансовым директором. Надо ли мне?',
        a: 'Если вы только начинаете — Уровень 1. Если вы опытный финдир, но работаете без автоматизации — Уровень 2: освоите сервисы и избавитесь от операционки.',
      },
      {
        num: 3,
        q: 'Как понять, какой уровень мне нужен?',
        a: (
          <div className="space-y-1.5">
            <p><span className="font-bold text-primary">Уровень 1</span> — таблицы. Для бухгалтеров и начинающих финансистов.</p>
            <p><span className="font-bold text-primary">Уровень 2</span> — сервисы. Для тех, кто уже ведёт клиентов и хочет автоматизацию.</p>
          </div>
        ),
      },
    ],
  },
  {
    label: 'Оплата и рассрочка',
    color: 'bg-orange-100 text-orange-700',
    dot: 'bg-orange-500',
    faqs: [
      {
        num: 8,
        q: 'Банк не одобрил рассрочку. Что делать?',
        a: 'У нас есть доверительная рассрочка на 2 платежа — разбиваете сумму на два месяца без банков.',
      },
      {
        num: 9,
        q: 'Какие способы оплаты?',
        a: 'Картой любого банка (любые страны), по счёту, в рассрочку от банка-партнёра или доверительным платежом лично от меня.',
      },
    ],
  },
  {
    label: 'Условия и старт',
    color: 'bg-teal-100 text-teal-700',
    dot: 'bg-teal-500',
    faqs: [
      {
        num: 12,
        q: 'Когда старт обучения?',
        a: 'Официальный старт — 11 мая. Предобучение с 1 мая: знакомство с экспертом, курсы по нейросетям и Google-таблицам.',
      },
    ],
  },
];

const groupsRight = [
  {
    label: 'Процесс обучения',
    color: 'bg-green-100 text-green-700',
    dot: 'bg-green-500',
    faqs: [
      {
        num: 4,
        q: 'Не умею работать с Google-таблицами. Как проходить курс?',
        a: 'В этом потоке при покупке любого тарифа — базовый курс по Google-таблицам в подарок: 5 модулей и 20 уроков с нуля.',
      },
      {
        num: 5,
        q: 'Высокая нагрузка на работе. Не успею?',
        a: 'Всего 6 часов в неделю — по 3 часа в выходные. Плюс курс по нейросетям в подарок поможет делегировать рутину.',
      },
      {
        num: 6,
        q: 'Не успею пройти в срок — что делать?',
        a: 'После окончания потока ещё 2 месяца на сдачу домашних заданий. Плюс доступ к курсу открыт 1 год.',
      },
      {
        num: 7,
        q: 'Можно совмещать с работой или декретом?',
        a: 'Да, нагрузка адекватная. Первые результаты — уже в процессе обучения.',
      },
    ],
  },
  {
    label: 'Результат и практика',
    color: 'bg-purple-100 text-purple-700',
    dot: 'bg-purple-500',
    faqs: [
      {
        num: 10,
        q: 'Проходила курс по управленческому учёту — результата не было.',
        a: 'Этот курс — 100% практика на сквозном кейсе реального бизнеса. На выходе готовый пример внедрения, который сразу предлагаете клиенту.',
      },
      {
        num: 11,
        q: 'Боюсь, что не смогу применить знания на практике.',
        a: (
          <div className="space-y-1.5">
            <p><span className="font-bold">Модуль 1</span> — зачем клиенту управленческий учёт и в чём ваша работа.</p>
            <p><span className="font-bold">Модуль 8</span> — упаковка навыков в услуги, цены, как доносить ценность.</p>
            <p className="text-primary font-semibold text-xs">Обучиться и быть умным без денег — это не про вас.</p>
          </div>
        ),
      },
    ],
  },
];

function FaqColumn({ groups }: { groups: typeof groupsRight }) {
  return (
    <div className="space-y-5">
      {groups.map((group) => (
        <div key={group.label}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${group.color}`}>
              {group.label}
            </span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>
          <Accordion className="space-y-1.5">
            {group.faqs.map((faq) => (
              <AccordionItem
                key={faq.num}
                value={`faq-${faq.num}`}
                className="border border-slate-100 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline px-4 py-3 text-left">
                  <div className="flex items-start gap-2.5 w-full pr-2">
                    <span className={`shrink-0 w-5 h-5 rounded-full ${group.dot} text-white text-[10px] font-bold flex items-center justify-center mt-0.5`}>
                      {faq.num}
                    </span>
                    <span className="font-semibold text-slate-900 text-sm leading-snug">{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0 text-slate-600 text-xs leading-relaxed pl-12">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10 space-y-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
              Ответы на часто задаваемые вопросы
            </h2>
            <p className="text-slate-500 text-sm">12 вопросов, которые задают чаще всего — с честными ответами.</p>
          </div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <FaqColumn groups={groups} />
            <FaqColumn groups={groupsRight} />
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="h-12 px-8 font-bold bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl shadow-lg shadow-orange-100 border-none"
              render={<a href="#pricing" />}
            >
              <ChevronUp size={18} className="mr-2" />
              Вернуться к выбору тарифов
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 font-bold border-primary/30 text-primary hover:bg-primary/5 rounded-xl"
              render={<a href="#program" />}
            >
              <BookOpen size={18} className="mr-2" />
              Вернуться к программе
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
