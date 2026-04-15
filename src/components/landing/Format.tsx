import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Users, CheckCircle2, Layout, Zap } from 'lucide-react';

const formats = [
  { icon: <Layout className="text-primary" />, title: 'Формат', desc: 'Удобная обучающая платформа, все уроки в записи' },
  { icon: <Calendar className="text-primary" />, title: 'График', desc: 'Каждую неделю открывается новый модуль' },
  { icon: <Clock className="text-primary" />, title: 'Нагрузка', desc: 'На обучение выделяете 6 часов в неделю' },
  { icon: <CheckCircle2 className="text-primary" />, title: 'Обратная связь', desc: 'Проверка ДЗ и обратная связь лично от эксперта' },
  { icon: <Users className="text-primary" />, title: 'Коммуникация', desc: 'Обучение в малой группе — не более 15 человек' },
  { icon: <Zap className="text-primary" />, title: 'Доступы', desc: 'Доступ к курсу 1 год, таблицы можно скачать' }
];

export function Format() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary">Как проходит обучение?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Мы создали максимально комфортную среду для вашего профессионального роста.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((item, idx) => (
              <Card key={idx} className="border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-primary p-8 md:p-12 rounded-3xl text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">В чем сила курса?</h3>
                <ul className="space-y-4">
                  {[
                    'Обучение на базе сквозного кейса реального бизнеса',
                    'Вместо одного курса получаете 3 курса',
                    'Эксклюзивное учебное пособие по управленческому учёту',
                    'Проверка ДЗ после основной программы — ещё 2 месяца'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-white shrink-0 mt-1" size={20} />
                      <span className="text-lg font-medium opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                  <p className="text-4xl font-bold mb-1">15</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-70">человек в группе</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                  <p className="text-4xl font-bold mb-1">2</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-70">месяца обучения</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                  <p className="text-4xl font-bold mb-1">1</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-70">год доступа</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
                  <p className="text-4xl font-bold mb-1">100%</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-70">практика</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
