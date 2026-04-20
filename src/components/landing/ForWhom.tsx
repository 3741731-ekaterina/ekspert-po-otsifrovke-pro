import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCircle2, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const targetAudience = [
  {
    title: 'Бухгалтер, главбух',
    emoji: '🧮',
    avatarBg: 'bg-blue-50',
    icon: <UserCircle2 className="text-primary" size={32} />,
    problem: [
      'Выгорели от бухгалтерского учёта',
      'Работаете за небольшие чеки',
      'Достигли потолка в развитии',
      'Хотите переквалифицироваться в финдира'
    ],
    benefit: [
      'Твёрдую методологию оказания услуг управленческого учёта',
      'Уверенность в себе как в специалисте',
      'Возможность решать любые запросы бизнеса по управлению финансами',
      'Глубину в решении бизнес-задач',
      'Рост дохода'
    ]
  },
  {
    title: 'Финменеджер, начинающий финансист',
    emoji: '📈',
    avatarBg: 'bg-orange-50',
    icon: <Briefcase className="text-primary" size={32} />,
    problem: [
      'Знание таблиц есть, а комплексного подхода нет',
      'Мыслите процессами, а не результатами',
      'Чувствуете себя слабее коллег',
      'Хотите стать востребованным специалистом'
    ],
    benefit: [
      'Рост до полноценного финансового директора',
      'Сильные комплексные услуги управленческого учёта',
      'Навык глубинно анализировать бизнес',
      'Умение давать точные управленческие решения',
      'Высокие чеки за проекты',
      'Возможность стать независимым специалистом'
    ]
  },
  {
    title: 'Финдиректор с опытом',
    emoji: '🏆',
    avatarBg: 'bg-purple-50',
    icon: <GraduationCap className="text-primary" size={32} />,
    problem: [
      'Внедряете финучёт на таблицах',
      'Чувствуете, что переросли этот уровень',
      'Отстаёте от коллег, которые ведут процессы автоматизировано',
      'Хотите делегировать операционку',
      'Хотите внедрять финучёт на технологичном уровне'
    ],
    benefit: [
      'Умение внедрять финучёт на базе автоматизации',
      'Освобождение от 50%+ операционных задач',
      'Внедрение финучёта за 1 месяц вместо 3–5',
      'Возможность брать больше клиентов и больше зарабатывать',
      'Клиенты не привязаны к вам'
    ]
  }
];

export function ForWhom() {
  return (
    <section id="for-whom" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary">Для кого этот курс?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Мы разработали программу, которая учитывает ваш текущий опыт и цели в карьере.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {targetAudience.map((item, idx) => (
            <Card key={idx} className="border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white overflow-hidden flex flex-col">
              <CardHeader className="border-b border-slate-100 p-7 pb-5">
                {/* Avatar with emoji */}
                <div className={`w-16 h-16 rounded-2xl ${item.avatarBg} flex items-center justify-center mb-4 shadow-sm`}>
                  <span className="text-3xl">{item.emoji}</span>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 leading-snug">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 flex-1 flex flex-col gap-8">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Что происходит?</p>
                  <ul className="space-y-3">
                    {item.problem.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mt-auto">
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">Что даст курс?</p>
                  <ul className="space-y-3">
                    {item.benefit.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-900 font-medium text-sm md:text-base">
                        <ArrowRight className="text-primary shrink-0 mt-1" size={16} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
