import React from 'react';
import { Quote, ArrowUpRight, Star, Building2, MapPin } from 'lucide-react';
import { COMPANY_DATA } from '../data/company.ts';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="cases" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-3 tracking-wide uppercase">
            <span>Resultados Comprovados</span>
            <span aria-hidden="true">·</span>
            <span>Casos de Sucesso</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Empresas que eliminaram o atrito e destravaram vendas no WhatsApp.
          </h2>
          <p className="mt-3 text-base text-neutral-300 leading-relaxed">
            Veja como empresas reais em Macapá e região transformaram seus atendimentos diários com as
            soluções da Tapzoom.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPANY_DATA.caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-4">
                {/* Metric Hero */}
                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80">
                  <div className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono tabular-nums">
                    {study.metric}
                  </div>
                  <p className="text-xs text-neutral-300 mt-1 font-medium leading-snug">
                    {study.metricLabel}
                  </p>
                </div>

                {/* Business context */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>{study.niche}</span>
                    <span className="flex items-center gap-1 text-neutral-400">
                      <MapPin className="w-3 h-3 text-purple-400" />
                      {study.location}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">{study.businessName}</h3>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {study.summary}
                </p>

                {/* Quote */}
                <blockquote className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800/60 text-xs text-neutral-300 italic leading-relaxed">
                  "{study.quote}"
                </blockquote>
              </div>

              {/* Author attribution */}
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-white block">{study.author}</span>
                  <span className="text-neutral-400 text-[11px]">{study.role}</span>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
