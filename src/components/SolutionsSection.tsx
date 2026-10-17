import React from 'react';
import { Check, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';
import { COMPANY_DATA, Solution } from '../data/company.ts';

interface SolutionsSectionProps {
  onSelectSolution: (solution: Solution) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-3 tracking-wide uppercase">
            <span>Portfólio de Soluções</span>
            <span aria-hidden="true">·</span>
            <span>O Que a Tapzoom Entrega</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Tecnologia pensada para transformar curiosos do Instagram em vendas fechadas.
          </h2>
          <p className="mt-3 text-base text-neutral-300 leading-relaxed">
            Desenvolvemos ecossistemas digitais leves, rápidos e 100% integrados à ferramenta que todo
            brasileiro usa o dia todo: o WhatsApp.
          </p>
        </div>

        {/* Asymmetric Bento-Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {COMPANY_DATA.solutions.map((item, idx) => {
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
                key={item.id}
                className={`lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-neutral-700 transition-colors animate-fade-in-up ${delayClass}`}
              >
              <div>
                {/* Media Header */}
                <div className="relative h-60 overflow-hidden bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent pointer-events-none" />

                  {/* Clean unboxed tag in photo overlay */}
                  <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 px-3 py-1 rounded-lg text-xs font-semibold text-purple-400">
                    {item.badgeText}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-purple-400">
                      Solução {item.number}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                    <p className="text-xs text-purple-300 font-medium">{item.tagline}</p>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed">{item.description}</p>

                  {/* Before vs After comparison */}
                  <div className="pt-2 space-y-2 text-xs">
                    <div className="flex items-start gap-2 p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-neutral-300 block">Ponto de Dor:</span>
                        <span className="text-neutral-400">{item.painPoint}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 rounded-xl bg-purple-950/20 border border-purple-900/30">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-purple-300 block">Resultado com a Tapzoom:</span>
                        <span className="text-neutral-300">{item.solutionOutcome}</span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Checkmarks */}
                  <div className="pt-2 border-t border-neutral-800/80 space-y-2">
                    <span className="text-xs font-semibold text-neutral-400 block uppercase tracking-wider">
                      Recursos Inclusos:
                    </span>
                    <ul className="space-y-1.5">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="p-6 pt-0 sm:p-8 sm:pt-0">
                <button
                  onClick={() => onSelectSolution(item)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-neutral-800 hover:bg-purple-600 rounded-xl transition-colors cursor-pointer group/btn"
                >
                  <span>Solicitar Solução {item.number} para meu negócio</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};
