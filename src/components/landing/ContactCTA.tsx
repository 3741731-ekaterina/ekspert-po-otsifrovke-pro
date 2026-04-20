import React from 'react';

export function ContactCTA() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              {/* Left: image */}
              <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-primary/5 p-8 md:p-12 min-h-[280px]">
                <img
                  src={`${import.meta.env.BASE_URL}images/phone.png`}
                  alt="Написать Екатерине"
                  className="w-48 md:w-56 h-auto drop-shadow-2xl"
                />
              </div>

              {/* Right: text + buttons */}
              <div className="p-8 md:p-12 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">Остались вопросы?</p>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-primary leading-tight">
                    Напишите мне<br />в личные сообщения
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Я помогу разобраться, какой уровень вам подходит, отвечу на все вопросы и помогу с оформлением.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://t.me/yakhontova_finance"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#229ED9] hover:bg-[#1a8bbf] text-white font-bold px-6 py-4 rounded-2xl transition-colors shadow-md shadow-blue-100 text-sm"
                  >
                    {/* Official Telegram icon */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="white" fillOpacity="0.25"/>
                      <path d="M17.64 7.11L15.3 17.25c-.17.76-.63.95-1.27.59l-3.5-2.58-1.69 1.63c-.19.19-.34.34-.69.34l.25-3.56 6.4-5.78c.28-.25-.06-.38-.43-.14L6.3 12.57 2.83 11.5c-.75-.23-.76-.75.16-1.12l13.74-5.3c.62-.23 1.17.15.91 1.03z" fill="white"/>
                    </svg>
                    Написать в Telegram
                  </a>

                  <a
                    href="https://max.ru/u/f9LHodD0cOK4FCCehXDnZVD9DPEf3Pur_Rgmnral_wmHP9O1MFHvQz7C16o"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 text-white font-bold px-6 py-4 rounded-2xl transition-opacity hover:opacity-90 shadow-md text-sm"
                    style={{ background: 'linear-gradient(135deg, #5B4FE8 0%, #8B5CF6 40%, #3B82F6 100%)' }}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/max-logo.png`}
                      alt="MAX"
                      className="w-6 h-6 rounded-md object-cover"
                    />
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
