import React, { useState } from 'react';
import {
  AlertTriangle,
  Clock,
  TrendingDown,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { COMPANY_DATA } from '../data/company.ts';

export const BlindSpotDiagnostic: React.FC = () => {
  const [segment, setSegment] = useState<'gastronomia' | 'saude' | 'varejo' | 'b2b'>('gastronomia');
  const [currentMethod, setCurrentMethod] = useState<'pdf' | 'feed' | 'manual' | 'linktree'>('pdf');
  const [dailyMessages, setDailyMessages] = useState<'baixo' | 'medio' | 'alto'>('medio');

  // Compute calculated metrics
  const getCalculation = () => {
    let lostHoursPerMonth = 45;
    let dropRate = '40%';
    let blindSpotTitle = 'Fricção de Download de PDF & Chat Congestionado';
    let blindSpotDetail =
      'Mais de 4 em cada 10 clientes desistem de abrir o PDF quando estão usando dados móveis 4G. Os que abrem ainda precisam digitar manualmente o pedido, sobrecarregando o atendente com perguntas de "tem troco?", "qual o valor da entrega?" e "tem molho extra?".';
    let recommendedSolution = 'Vitrine Digital com Carrinho & Pedido Estruturado direto no WhatsApp';

    if (segment === 'saude') {
      blindSpotTitle = 'Gargalo de Triagem Repetitiva na Recepção';
      blindSpotDetail =
        'A recepcionista gasta em média 12 minutos por paciente apenas perguntando convênio, sintomas, turno vago e confirmando dados cadastrais. Enquanto isso, o telefone toca ocupado e novos pacientes procuram outro consultório.';
      recommendedSolution = 'Motor de Pré-Agendamento e Triagem Clínica Integrado';
      lostHoursPerMonth = dailyMessages === 'baixo' ? 35 : dailyMessages === 'medio' ? 65 : 110;
      dropRate = '35%';
    } else if (segment === 'varejo') {
      blindSpotTitle = 'Abandono por Falta de Informação Imediata';
      blindSpotDetail =
        'Enviar o cliente para o feed do Instagram sem preços claros ou estoque atualizado faz com que ele desista antes de mandar a primeira mensagem. E no balcão físico, o cliente vai embora sem avaliar sua loja no Google.';
      recommendedSolution = 'Catálogo Visual com Carrinho + Display NFC no Balcão';
      lostHoursPerMonth = dailyMessages === 'baixo' ? 25 : dailyMessages === 'medio' ? 50 : 90;
      dropRate = '48%';
    } else if (segment === 'b2b') {
      blindSpotTitle = 'Falta de Autoridade & Leads Desqualificados';
      blindSpotDetail =
        'Sem uma landing page que explique o processo e filtre o orçamento, você gasta horas atendendo curiosos que não têm verba para o seu ticket, perdendo tempo que deveria ser focado em propostas comerciais de alto valor.';
      recommendedSolution = 'Landing Page Comercial de Alta Conversão com Qualificador';
      lostHoursPerMonth = dailyMessages === 'baixo' ? 20 : dailyMessages === 'medio' ? 40 : 75;
      dropRate = '55%';
    } else {
      // Gastronomia
      lostHoursPerMonth = dailyMessages === 'baixo' ? 40 : dailyMessages === 'medio' ? 75 : 130;
      dropRate = '45%';
    }

    return {
      lostHoursPerMonth,
      dropRate,
      blindSpotTitle,
      blindSpotDetail,
      recommendedSolution,
    };
  };

  const calc = getCalculation();

  const generateDiagnosticWhatsAppUrl = () => {
    const text = `Olá, Tapzoom! Fiz o Diagnóstico de Ponto Cego no site.
Segmento: ${segment.toUpperCase()}
Gargalo identificado: ${calc.blindSpotTitle}
Horas perdidas estimadas: ${calc.lostHoursPerMonth}h/mês
Gostaria de receber a demonstração em vídeo de 2 minutos para o meu negócio!`;
    return `https://wa.me/${COMPANY_DATA.contacts.whatsapp1.raw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="diagnostico" className="py-20 lg:py-28 bg-neutral-900/50 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-3 tracking-wide uppercase">
            <span>Metodologia Consultiva</span>
            <span aria-hidden="true">·</span>
            <span>Auditoria de Ponto Cego</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Onde seu negócio perde vendas ou tempo sem perceber?
          </h2>
          <p className="mt-3 text-base text-neutral-300 leading-relaxed">
            A maioria das empresas locais acredita que o problema é "falta de clientes", quando na verdade
            o cliente já está no Instagram ou no WhatsApp, mas desiste por causa do atrito no atendimento.
          </p>
        </div>

        {/* Interactive Diagnostic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Question Flow Inputs */}
          <div className="lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Simule o Cenário do Seu Negócio</span>
            </h3>

            {/* Question 1: Segment */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-2">
                1. Qual é o segmento principal do seu negócio?
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'gastronomia', label: 'Gastronomia & Delivery' },
                  { id: 'saude', label: 'Clínica, Saúde & Estética' },
                  { id: 'varejo', label: 'Varejo, Moda & Lojas' },
                  { id: 'b2b', label: 'Serviços, Arquitetura & B2B' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSegment(item.id as any)}
                    className={`p-3 rounded-xl border text-left font-medium transition-colors cursor-pointer ${
                      segment === item.id
                        ? 'border-purple-500 bg-purple-950/40 text-purple-300 font-semibold'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Current presentation method */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-2">
                2. Como seu cliente visualiza produtos/serviços hoje?
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'pdf', label: 'Arquivo PDF enviado no chat' },
                  { id: 'feed', label: 'Fotos avulsas no feed do Instagram' },
                  { id: 'manual', label: 'Mensagens de texto digitadas' },
                  { id: 'linktree', label: 'Link genérico (Linktree/WhatsApp cru)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentMethod(item.id as any)}
                    className={`p-3 rounded-xl border text-left font-medium transition-colors cursor-pointer ${
                      currentMethod === item.id
                        ? 'border-purple-500 bg-purple-950/40 text-purple-300 font-semibold'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Volume of messages */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-2">
                3. Volume médio de contatos / pedidos por dia:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'baixo', label: 'Até 25 contatos/dia' },
                  { id: 'medio', label: '25 a 70 contatos/dia' },
                  { id: 'alto', label: 'Mais de 70 contatos/dia' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDailyMessages(item.id as any)}
                    className={`p-2.5 rounded-xl border text-center font-medium transition-colors cursor-pointer ${
                      dailyMessages === item.id
                        ? 'border-purple-500 bg-purple-950/40 text-purple-300 font-semibold'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Diagnosis Result Card */}
          <div className="lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Relatório Diagnóstico Personalizado
                </h3>
              </div>
              <span className="text-xs text-neutral-400 font-mono">Tapzoom Audit Engine</span>
            </div>

            {/* Calculated Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>Tempo perdido por mês</span>
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                  ~{calc.lostHoursPerMonth} horas
                </div>
                <p className="text-[11px] text-neutral-400">
                  Gasto com digitação repetitiva de atendentes
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-1">
                <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                  <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
                  <span>Desistência estimada</span>
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-rose-400 font-mono tabular-nums">
                  {calc.dropRate}
                </div>
                <p className="text-[11px] text-neutral-400">
                  Abandonam antes da conclusão do atendimento
                </p>
              </div>
            </div>

            {/* Identified Blind Spot Explanation */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Ponto Cego Identificado:</span>
                <span className="text-purple-400">{calc.blindSpotTitle}</span>
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed bg-neutral-950/60 p-4 rounded-xl border border-neutral-800">
                {calc.blindSpotDetail}
              </p>
            </div>

            {/* Recommended Tapzoom Engine */}
            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-300">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Solução Tapzoom Sob Medida Recomendada:</span>
              </div>
              <p className="text-xs text-neutral-200 font-medium">
                {calc.recommendedSolution}
              </p>
            </div>

            {/* Direct CTA with Pre-Filled Message */}
            <div className="pt-2">
              <a
                href={generateDiagnosticWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-xl transition-colors shadow-lg shadow-purple-950/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar Demonstração em Vídeo de 2 Minutos</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <p className="text-center text-[11px] text-neutral-400 mt-2">
                Sem compromisso. Gravamos a demonstração aplicada com seus próprios produtos/serviços.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
