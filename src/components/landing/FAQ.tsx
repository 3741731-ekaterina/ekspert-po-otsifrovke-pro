import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ChevronUp, BookOpen } from 'lucide-react';

const faqs = [
  {
    q: 'Я бухгалтер. Мне подойдёт курс?',
    a: 'Да. Курс подходит для тех, кто ещё не работает финансовым директором, но хочет им стать. Для вас подойдёт первый уровень, где вы освоите финансовый учёт на базе таблиц.'
  },
  {
    q: 'Я уже работаю финансовым директором. Надо ли мне на курс?',
    a: 'Вам надо на курс, если вы только начинаете работу финдира и у вас нет твёрдой базы, либо если вы опытный финдир, но до сих пор работаете без автоматизации. Для финдиректора с небольшим опытом — первый уровень. Для опытного, который хочет внедрять автоматизацию, — второй уровень.'
  },
  {
    q: 'Как понять, какой уровень мне нужен?',
    a: 'Уровень 1 — финансовый учёт на базе таблиц. Подходит для бухгалтеров, финансовых менеджеров и начинающих финансистов. Уровень 2 — финансовый учёт на базе сервиса. Подходит для тех, кто уже оказывает услуги финучёта на таблицах и хочет освоить автоматизированные сервисы.'
  },
  {
    q: 'Я не умею работать с Google-таблицами. Как я буду проходить курс?',
    a: 'Эксклюзивно в этом потоке при покупке любого тарифа вы получаете в подарок базовый курс по Google-таблицам. Внутри 5 модулей и 20 уроков, где вы получаете твёрдую базу работы с таблицами.'
  },
  {
    q: 'Боюсь, что я не успею пройти курс, у меня высокая нагрузка на работе.',
    a: 'Оптимальное время на курс — 6 часов в неделю. Кроме того, при покупке любого модуля вы получаете в подарок экспресс-курс по нейросетям, за счёт которого вы делегируете часть текущих задач и ускорите процесс обучения.'
  },
  {
    q: 'Если я не успею пройти курс в отведённое время, что мне делать?',
    a: 'Только на этом потоке после завершения обучения по графику у вас есть ещё 2 месяца, чтобы сдать домашние задания. Кроме того, доступ к курсу открыт 1 год.'
  },
  {
    q: 'Банк не одобрил мне рассрочку. Что делать?',
    a: 'У нас есть доверительная рассрочка на 2 платежа. Вы просто разбиваете платёж на два месяца.'
  },
  {
    q: 'Я уже проходила курс управленческого учёта, результат не получился.',
    a: 'Данный курс — это 100% практика. Вы выполняете задания на примере сквозного кейса. На выходе у вас есть готовый пример внедрения управленческого учёта на таблицах или сервисах на примере реального бизнеса.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary">Ответы на вопросы</h2>
            <p className="text-lg text-slate-600">
              Если у вас остались вопросы, мы собрали самые популярные ответы здесь.
            </p>
          </div>

          <Accordion className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-2xl px-6 bg-slate-50/50 overflow-hidden">
                <AccordionTrigger className="hover:no-underline py-6 text-left font-bold text-slate-900 text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-8 text-slate-600 leading-relaxed text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
            <Button
              size="lg"
              className="h-13 px-8 font-bold bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl shadow-lg shadow-orange-100 border-none"
              render={<a href="#pricing" />}
            >
              <ChevronUp size={18} className="mr-2" />
              Вернуться к выбору тарифов
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-13 px-8 font-bold border-primary/30 text-primary hover:bg-primary/5 rounded-xl"
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
