import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_DATA } from '../data/company.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-3 w-72 bg-neutral-900 border border-neutral-800 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-2 fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-bold text-white">Atendimento Tapzoom</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-neutral-400 hover:text-white rounded"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-neutral-300 my-2.5 leading-snug">
            Fale diretamente com nossos consultores comerciais via WhatsApp:
          </p>

          <div className="space-y-2">
            <a
              href={COMPANY_DATA.contacts.whatsapp1.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-purple-500 text-xs text-neutral-200 transition-colors group"
            >
              <div>
                <span className="font-semibold text-white block">WhatsApp Comercial 1</span>
                <span className="text-[11px] font-mono text-neutral-400">
                  {COMPANY_DATA.contacts.whatsapp1.display}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={COMPANY_DATA.contacts.whatsapp2.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-purple-500 text-xs text-neutral-200 transition-colors group"
            >
              <div>
                <span className="font-semibold text-white block">WhatsApp Comercial 2</span>
                <span className="text-[11px] font-mono text-neutral-400">
                  {COMPANY_DATA.contacts.whatsapp2.display}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full shadow-lg shadow-emerald-950/60 transition-all duration-200 cursor-pointer font-medium text-xs sm:text-sm"
        aria-label="Atendimento WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="hidden sm:inline font-semibold">Atendimento WhatsApp</span>
      </button>
    </div>
  );
};
