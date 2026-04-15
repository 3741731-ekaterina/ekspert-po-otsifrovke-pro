import React from 'react';
import { Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const comparisonData = [
  { typical: 'Просто делает отчёты', course: 'Решает конкретные боли и проблемы' },
  { typical: 'Внедряет таблицы', course: 'Внедряет систему управления финансами' },
  { typical: 'Говорит сложным языком', course: 'Объясняет цифры на языке собственника' },
  { typical: 'Продаёт «учёт»', course: 'Продаёт рост прибыли и защиту от кассовых разрывов' },
  { typical: 'Финучет только в Excel', course: 'Финучет в Excel и на базе автоматизированного сервиса' },
  { typical: 'Таблицы знает, связать не может', course: 'Есть технология внедрения финучета' },
  { typical: 'Низкий доход', course: 'Доход от 250 тыс. рублей' },
  { typical: 'Клиенты смотрят и не покупают', course: 'Клиенты видят ценность услуг, готовы покупать' },
];

export function Comparison() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Это не «очередное обучение» управленческому учету</h2>
            <p className="text-lg text-slate-600">
              Курс создан для тех, кто хочет стать сильным финансистом, чьи услуги соответствуют высоким требованиям рынка и решают практически любые запросы предпринимателей.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Typical Column */}
            <Card className="border-slate-100 bg-slate-50/50">
              <CardHeader className="text-center border-b border-slate-100 pb-6">
                <CardTitle className="text-slate-500 font-semibold uppercase tracking-wider text-sm">Финансист после «типичного курса»</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {comparisonData.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-500">
                    <X className="text-red-400 shrink-0 mt-0.5" size={18} />
                    <span className="text-sm md:text-base">{item.typical}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Course Column */}
            <Card className="border-primary/20 bg-primary/5 shadow-xl shadow-primary/5 relative z-10">
              <CardHeader className="text-center border-b border-primary/10 pb-6 bg-primary/5">
                <CardTitle className="text-primary font-bold uppercase tracking-wider text-sm">Финансист после этого курса</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {comparisonData.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-900 font-medium">
                    <Check className="text-primary shrink-0 mt-0.5" size={18} />
                    <span className="text-sm md:text-base">{item.course}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl space-y-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">Уникальность курса — 2 разных уровня обучения</h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Для начинающих финансистов и бухгалтеров — финансовый учет на базе таблиц. Для опытных финансистов — финансовый учет на базе автоматизации.
            </p>
            <p className="text-slate-400">
              Выбирайте то, что подходит конкретно вам, без переплаты на информацию, которую вы либо уже знаете, либо не осилите из-за нехватки навыков.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
