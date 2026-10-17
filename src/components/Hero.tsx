import React from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { COMPANY_DATA } from '../data/company.ts';

interface HeroProps {
  onOpenContact: () => void;
  onExploreDemos: () => void;
  onDiagnostico: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreDemos, onDiagnostico }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-neutral-900">
      {/* Subtle radial ambient glow behind hero */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subtitle / Brand Trust Line */}
        <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-4 tracking-wide uppercase animate-fade-in-down">
          <span>Soluções Digitais & Automação de Atendimento</span>
          <span aria-hidden="true">·</span>
          <span>Macapá & Brasil</span>
        </div>

        {/* 2-Column Split: Headline & Narrative alongside High-Impact Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] [text-wrap:balance] animate-fade-in-up">
              Conecte, facilite e cresça: transforme tráfego social em vendas diretas no WhatsApp.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl animate-fade-in-up animate-delay-100">
              Elimine o congestionamento de mensagens, os PDFs pesados de 20MB e os links crus. Criamos{' '}
              <strong className="text-white font-medium">vitrines visuais interativas</strong>,{' '}
              <strong className="text-white font-medium">pré-agendamento clínico</strong> e{' '}
              <strong className="text-white font-medium">tecnologia NFC por aproximação</strong> que
              economizam horas diárias da sua equipe.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 animate-fade-in-up animate-delay-200">
              <button
                onClick={onExploreDemos}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-lg transition-colors whitespace-nowrap shadow-md shadow-purple-950/50 cursor-pointer"
              >
                <span>Testar Demonstrações ao Vivo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onDiagnostico}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Identificar Ponto Cego</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 animate-fade-in-up animate-delay-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Sem aplicativos para baixar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Zero comissões por pedido</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Setup rápido em poucos dias</span>
              </div>
            </div>
          </div>

          {/* High-Impact Visual Focal Carrier */}
          <div className="lg:col-span-5 animate-fade-in-scale animate-delay-200">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <img
                src="/src/assets/images/hero_tapzoom_tech_1792197322398.jpg"
                alt="Central de Soluções Digitais e Fluxo de Atendimento WhatsApp da Tapzoom"
                className="w-full h-80 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent pointer-events-none" />

              {/* In-Frame Context Box */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-800">
                <div className="flex items-center justify-between text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-white">Fluxo Automatizado Ativo</span>
                  </div>
                  <span className="text-purple-400 font-mono">Tapzoom Core</span>
                </div>
                <p className="mt-1 text-xs text-neutral-300 leading-snug">
                  Pedidos gastronômicos e triagens médicas entregues mastigados no WhatsApp em menos de 10 segundos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Adjacent Quantitative Proof Strip */}
        <div className="mt-16 pt-10 border-t border-neutral-900 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COMPANY_DATA.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono tabular-nums">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
