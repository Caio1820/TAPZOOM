import React from 'react';
import { MessageCircle, Instagram, ArrowUpRight, Heart } from 'lucide-react';
import { COMPANY_DATA } from '../data/company.ts';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-3">
            <a
              href="#"
              className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
              <span>Tapzoom</span>
            </a>
            <p className="text-neutral-300 max-w-sm text-xs leading-relaxed">
              "{COMPANY_DATA.slogan}"
            </p>
            <p className="text-neutral-400 text-xs max-w-sm leading-relaxed">
              {COMPANY_DATA.mission}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_DATA.contacts.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_DATA.contacts.whatsapp1.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
                aria-label="WhatsApp Comercial 1"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Soluções */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Soluções</h4>
            <ul className="space-y-2">
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  Vitrines Digitais & BioSites
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  Pré-Agendamento Clínico
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  Tecnologia NFC & QR Code
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  Landing Pages Comerciais
                </a>
              </li>
            </ul>
          </div>

          {/* Demos & Diagnóstico */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">Interativo</h4>
            <ul className="space-y-2">
              <li>
                <a href="#demos" className="hover:text-white transition-colors">
                  Simulador de Cardápio WhatsApp
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-white transition-colors">
                  Triagem para Recepção
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-white transition-colors">
                  Simulador de Toque NFC
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-white transition-colors">
                  Auditoria de Ponto Cego
                </a>
              </li>
            </ul>
          </div>

          {/* Canais Oficiais */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
              Canais Oficiais
            </h4>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <a
                  href={COMPANY_DATA.contacts.whatsapp1.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp 1: {COMPANY_DATA.contacts.whatsapp1.display}</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_DATA.contacts.whatsapp2.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp 2: {COMPANY_DATA.contacts.whatsapp2.display}</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_DATA.contacts.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram: {COMPANY_DATA.handle}</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </li>
              <li className="text-neutral-400 pt-1">
                {COMPANY_DATA.contacts.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Tapzoom. Todos os direitos reservados. Conecte, facilite e cresça.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Pedir Demonstração Gratuita
            </button>
            <span aria-hidden="true">·</span>
            <a
              href={COMPANY_DATA.contacts.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram @tapzoomm
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
