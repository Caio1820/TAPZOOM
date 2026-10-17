import React, { useState } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_DATA } from '../data/company.ts';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenBioSite: () => void;
  currentView: 'site' | 'bio';
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, onOpenBioSite, currentView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoErr, setLogoErr] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark with official logo */}
        <a
          href="#"
          className="text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-500 bg-white flex items-center justify-center p-0.5 shrink-0 transition-transform duration-200 group-hover:scale-110">
            {!logoErr ? (
              <img
                src={COMPANY_DATA.logoUrl}
                alt="Logo Tapzoom"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
                onError={() => setLogoErr(true)}
              />
            ) : (
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" />
            )}
          </div>
          <span>Tapzoom</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a
            href="#solucoes"
            className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0"
          >
            Soluções
          </a>
          <a
            href="#demos"
            className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0"
          >
            Demonstração ao Vivo
          </a>
          <a
            href="#diagnostico"
            className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0"
          >
            Diagnóstico de Ponto Cego
          </a>
          <a
            href="#metodologia"
            className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0"
          >
            Metodologia
          </a>
          <a
            href="#cases"
            className="hover:text-purple-400 transition-colors whitespace-nowrap shrink-0"
          >
            Cases Reais
          </a>
          <button
            onClick={onOpenBioSite}
            className="text-purple-400 hover:text-purple-300 font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>BioSite @tapzoomm</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-500 active:bg-purple-700 transition-colors whitespace-nowrap shrink-0 shadow-sm shadow-purple-950/40 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-neutral-800 bg-neutral-900/95 px-5 py-4 space-y-3">
          <a
            href="#solucoes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-purple-400 py-1"
          >
            Soluções
          </a>
          <a
            href="#demos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-purple-400 py-1"
          >
            Demonstração ao Vivo
          </a>
          <a
            href="#diagnostico"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-purple-400 py-1"
          >
            Diagnóstico de Ponto Cego
          </a>
          <a
            href="#metodologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-purple-400 py-1"
          >
            Metodologia
          </a>
          <a
            href="#cases"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-300 hover:text-purple-400 py-1"
          >
            Cases Reais
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBioSite();
            }}
            className="w-full text-left text-sm font-semibold text-purple-400 hover:text-purple-300 py-1 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>Ver BioSite Oficial (@tapzoomm)</span>
          </button>
          <div className="pt-2 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp (96) 98125-6893</span>
            </button>
            <a
              href={COMPANY_DATA.contacts.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-xs text-neutral-400 hover:text-white py-1"
            >
              <span>Siga no Instagram {COMPANY_DATA.handle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
