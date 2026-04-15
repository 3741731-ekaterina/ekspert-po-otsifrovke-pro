import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { label: 'Для кого', href: '#for-whom' },
  { label: 'Программа', href: '#program' },
  { label: 'Бонусы', href: '#bonuses' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const TgIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#229ED9"/>
    <path d="M17.64 7.11L15.3 17.25c-.17.76-.63.95-1.27.59l-3.5-2.58-1.69 1.63c-.19.19-.34.34-.69.34l.25-3.56 6.4-5.78c.28-.25-.06-.38-.43-.14L6.3 12.57 2.83 11.5c-.75-.23-.76-.75.16-1.12l13.74-5.3c.62-.23 1.17.15.91 1.03z" fill="white"/>
  </svg>
);

const MaxIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#0077FF"/>
    <text x="12" y="17.5" textAnchor="middle" fill="white" fontSize="14" fontWeight="900" fontFamily="Arial, sans-serif">M</text>
  </svg>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="bg-primary text-white px-2 py-1 rounded text-xs font-bold">PRO</span>
          <span className="hidden sm:inline text-slate-800">Оцифровка Бизнеса</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-600">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {/* CTA button */}
          <a href="#pricing" className="hidden md:inline-flex">
            <Button size="sm" className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold rounded-lg px-4 border-none shadow-md shadow-orange-100 text-xs">
              Выбрать тариф
            </Button>
          </a>

          {/* Social icons */}
          <a href="https://t.me/yahontova_profinance" target="_blank" rel="noreferrer" title="Telegram-канал" className="opacity-90 hover:opacity-100 transition-opacity">
            <TgIcon size={22} />
          </a>
          <a href="https://max.ru/u/f9LHodD0cOK4FCCehXDnZVD9DPEf3Pur_Rgmnral_wmHP9O1MFHvQz7C16o" target="_blank" rel="noreferrer" title="MAX" className="opacity-90 hover:opacity-100 transition-opacity">
            <MaxIcon size={22} />
          </a>

          {/* Mobile burger */}
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map(item => (
                  <a key={item.href} href={item.href} className="text-lg font-medium hover:text-primary transition-colors">
                    {item.label}
                  </a>
                ))}
                <a href="#pricing" className="mt-2">
                  <Button className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold border-none rounded-xl">
                    Выбрать тариф
                  </Button>
                </a>
                <div className="flex gap-3 mt-2">
                  <a href="https://t.me/yahontova_profinance" target="_blank" rel="noreferrer">
                    <TgIcon size={28} />
                  </a>
                  <a href="https://max.ru/u/f9LHodD0cOK4FCCehXDnZVD9DPEf3Pur_Rgmnral_wmHP9O1MFHvQz7C16o" target="_blank" rel="noreferrer">
                    <MaxIcon size={28} />
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
