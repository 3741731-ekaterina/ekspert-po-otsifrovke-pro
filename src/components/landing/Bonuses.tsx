import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileSpreadsheet, Sparkles, RotateCcw } from 'lucide-react';

const googleTablesModules = [
  { title: 'Модуль 1. Введение в Google-таблицы', lessons: ['1-1. Приветствие от автора', '1-2. Интерфейс Google Таблиц'] },
  {
    title: 'Модуль 2. Основы работы с данными',
    lessons: [
      '2-1. Перенос данных из Excel в Google Таблицы и наоборот',
      '2-2. Как сделать копию файла на свой диск',
      '2-3. Создание нового листа, формат ячеек',
      '2-4. Как быстро удалить ненужные знаки, мешающие работе',
      '2-5. Перенос ячеек/столбцов и их группировка',
      '2-6. Выпадающие списки в таблице',
      '2-7. Ошибка в выпадающих списках',
      '2-8. Фильтрация данных',
      '2-9. Как использовать примечания, чем они отличаются от комментариев',
    ],
  },
  {
    title: 'Модуль 3. Формулы и функции',
    lessons: [
      '3-1. Функция ВПР и Индекс+ПОИСКПОЗ',
      '3-2. Условное форматирование',
      '3-3. Функции UNIQUE и FILTER',
      '3-4. Формула ЕСЛИ и МЕСЯЦ',
      '3-5. Функция СУММЕСЛИМН',
      '3-6. Функция ТРАНСП',
    ],
  },
  { title: 'Модуль 4. Анализ данных и визуализация', lessons: ['4-1. Сводные таблицы', '4-2. Графики и диаграммы'] },
  { title: 'Модуль 5. Автоматизация', lessons: ['5-1. Функция IMPORTRANGE'] },
];

const aiLessons = [
  'Урок №0. Где финансисту применять ИИ уже сегодня',
  'Урок №1. Как начать использовать нейросети',
  'Урок №2. Настройка VPN',
  'Урок №3. Обзор GPT чата',
  'Урок №4. Обзор МашаGPT',
  'Урок №5. Оплата зарубежных сервисов на примере GPT',
  'Урок №6. Безопасность, конфиденциальность, этика',
  'Урок №7. Что такое промт: анатомия запроса',
  'Урок №8. Диагностика: где у тебя рутинные задачи?',
  'Урок №9. Сверка ЕНС при помощи ИИ',
  'Урок №10. Обработка требований ИФНС через ИИ',
];

function FlipCard({ flipped, onFlip, front, back }: {
  flipped: boolean;
  onFlip: () => void;
  front: React.ReactNode;
  back: React.ReactNode;
}) {
  return (
    <div className="relative" style={{ perspective: '1200px', minHeight: 320 }}>
      <div
        className="absolute inset-0 transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-3xl bg-white/5 border border-white/10 overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 rounded-3xl bg-white/5 border border-white/10 overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}

export function Bonuses() {
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);

  return (
    <section id="bonuses" className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary text-white hover:bg-primary/90 px-4 py-1 text-sm">Спецпредложение</Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary">Покупаете 1 курс — получаете 3 курса</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Только в этом потоке при покупке любого тарифа вы получаете дополнительные обучающие программы бесплатно.
          </p>
        </div>

        {/* Flip cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" style={{ minHeight: 340 }}>
          {/* Card 1 — Google Таблицы */}
          <FlipCard
            flipped={flipped1}
            onFlip={() => setFlipped1(v => !v)}
            front={
              <div className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-5">
                  <FileSpreadsheet className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold leading-tight mb-2">Базовый курс по Google-таблицам</h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-slate-500 line-through text-lg">10 000 ₽</span>
                  <span className="text-primary font-bold text-2xl">0 ₽</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Для тех, кто хочет уверенно работать в таблицах и не сидеть часами над формулами. Увеличьте вашу эффективность в 2 раза.
                </p>
                <div className="flex items-center gap-2 mb-6">
                  <Badge variant="outline" className="text-white border-white/20 text-xs">5 модулей</Badge>
                  <Badge variant="outline" className="text-white border-white/20 text-xs">20 уроков</Badge>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => setFlipped1(true)}
                    className="flex items-center gap-2 text-primary font-bold text-sm hover:text-primary/80 transition-colors border border-primary/30 rounded-xl px-4 py-2.5 hover:bg-primary/10"
                  >
                    <RotateCcw size={16} />
                    Подробнее о программе
                  </button>
                </div>
              </div>
            }
            back={
              <div className="p-6 flex flex-col h-full overflow-auto">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-base text-primary">Программа курса</h4>
                  <button
                    onClick={() => setFlipped1(false)}
                    className="text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                  >
                    <RotateCcw size={14} />
                    Назад
                  </button>
                </div>
                <div className="space-y-3 flex-1 overflow-auto">
                  {googleTablesModules.map((m, i) => (
                    <div key={i}>
                      <p className="text-xs font-bold text-primary/80 mb-1">{m.title}</p>
                      <ul className="space-y-0.5">
                        {m.lessons.map((l, j) => (
                          <li key={j} className="text-xs text-slate-400 flex items-start gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          {/* Card 2 — Нейросети */}
          <FlipCard
            flipped={flipped2}
            onFlip={() => setFlipped2(v => !v)}
            front={
              <div className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-5">
                  <Sparkles className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold leading-tight mb-2">Экспресс-курс «Нейросети в работе финдира и бухгалтера»</h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-slate-500 line-through text-lg">10 000 ₽</span>
                  <span className="text-primary font-bold text-2xl">0 ₽</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Для тех, кто устал от операционки, хочет сократить рабочую нагрузку и делегировать рутину нейросетям.
                </p>
                <div className="flex items-center gap-2 mb-6">
                  <Badge variant="outline" className="text-white border-white/20 text-xs">11 уроков</Badge>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => setFlipped2(true)}
                    className="flex items-center gap-2 text-primary font-bold text-sm hover:text-primary/80 transition-colors border border-primary/30 rounded-xl px-4 py-2.5 hover:bg-primary/10"
                  >
                    <RotateCcw size={16} />
                    Подробнее о программе
                  </button>
                </div>
              </div>
            }
            back={
              <div className="p-6 flex flex-col h-full overflow-auto">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-base text-primary">Программа курса</h4>
                  <button
                    onClick={() => setFlipped2(false)}
                    className="text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                  >
                    <RotateCcw size={14} />
                    Назад
                  </button>
                </div>
                <ul className="space-y-2 flex-1 overflow-auto">
                  {aiLessons.map((l, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-[10px] shrink-0 mt-0.5">
                        {i}
                      </span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        </div>

        {/* Textbook */}
        <div className="mt-16 max-w-5xl mx-auto bg-gradient-to-br from-primary/80 to-primary p-0.5 rounded-3xl">
          <div className="bg-slate-900 rounded-[calc(1.5rem-2px)] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 space-y-5">
              <Badge className="bg-[#f97316] text-white border-none">Эксклюзив</Badge>
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Учебник «Эксперт по оцифровке бизнеса»
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Твёрдая база построения управленческих отчётов и финансового анализа с QR-кодами на готовые шаблоны таблиц. Более 100 страниц практики.
              </p>
              <ul className="space-y-2">
                {['Доступ к курсу закончится — учебник будет с вами навсегда', 'Бесплатно при оплате до 1 мая'].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-5 pt-2">
                <div>
                  <span className="text-slate-500 line-through text-sm block">15 000 ₽</span>
                  <span className="text-white font-extrabold text-3xl">0 ₽</span>
                </div>
                <Button
                  size="lg"
                  className="bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl px-8 h-13 font-bold border-none shadow-lg shadow-orange-500/20"
                  render={<a href="#pricing" />}
                >
                  Забрать учебник
                </Button>
              </div>
            </div>
            <div className="lg:w-72 relative flex items-center justify-center">
              <img
                src="/images/book.png"
                alt="Учебник Эксперт по оцифровке бизнеса"
                className="w-full max-w-[260px] h-auto rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary rounded-full blur-[150px]" />
      </div>
    </section>
  );
}
