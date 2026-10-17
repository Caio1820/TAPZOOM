import React from 'react';
import { Video, Search, Target, Zap, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { COMPANY_DATA } from '../data/company.ts';

interface MethodologySectionProps {
  onOpenContact: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenContact }) => {
  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-neutral-900/60 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-3 tracking-wide uppercase">
            <span>Metodologia Tapzoom</span>
            <span aria-hidden="true">·</span>
            <span>Como Trabalhamos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Consultiva, humanizada e focada em economizar horas reais do seu dia.
          </h2>
          <p className="mt-3 text-base text-neutral-300 leading-relaxed">
            Nada de propostas prontas ou abordagens invasivas. Estudamos o seu negócio antes de conversar,
            identificamos o gargalo exato e mostramos a solução pronta para você avaliar em 2 minutos.
          </p>
        </div>

        {/* 4-Step Editorial Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_DATA.methodology.map((step, idx) => {
            const delayClass =
              idx === 0
                ? 'animate-delay-100'
                : idx === 1
                ? 'animate-delay-200'
                : idx === 2
                ? 'animate-delay-300'
                : 'animate-delay-400';
            return (
              <div
                key={step.step}
                className={`bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-7 space-y-4 flex flex-col justify-between animate-fade-in-up ${delayClass}`}
              >
              <div className="space-y-3">
                <span className="text-2xl font-extrabold text-purple-400 font-mono">
                  {step.step}.
                </span>
                <h3 className="text-base font-bold text-white tracking-tight leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {step.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

        {/* Highlight Banner: Vídeo de Demonstração em 2 Minutos */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-purple-950/40 via-neutral-900 to-neutral-900 border border-purple-800/40 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-300 uppercase">
              <Video className="w-4 h-4 text-purple-400" />
              <span>O Compromisso Tapzoom</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Quer ver como ficaria a vitrine ou triagem do seu próprio negócio?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Sem reuniões intermináveis. Gravamos um vídeo personalizado de 2 minutos mostrando a experiência
              aplicada aos seus produtos ou à sua especialidade clínica.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-colors shrink-0 shadow-md shadow-purple-950/50 cursor-pointer"
          >
            <Video className="w-4 h-4" />
            <span>Pedir Demonstração em Vídeo (2 min)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
