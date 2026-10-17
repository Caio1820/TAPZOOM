import React, { useState } from 'react';
import { X, MessageCircle, Instagram, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_DATA, Solution } from '../data/company.ts';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSolution?: Solution | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedSolution,
}) => {
  const [businessName, setBusinessName] = useState('');
  const [niche, setNiche] = useState('Gastronomia e Delivery');
  const [chosenWhatsApp, setChosenWhatsApp] = useState<'wa1' | 'wa2'>('wa1');
  const [customInterest, setCustomInterest] = useState(
    selectedSolution ? selectedSolution.title : 'Demonstração em Vídeo (2 min)'
  );

  if (!isOpen) return null;

  const getWhatsAppTarget = () => {
    return chosenWhatsApp === 'wa1'
      ? COMPANY_DATA.contacts.whatsapp1
      : COMPANY_DATA.contacts.whatsapp2;
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const target = getWhatsAppTarget();
    let text = `Olá, Tapzoom! Vim através do site oficial.\n`;
    if (businessName.trim()) {
      text += `🏢 *Meu Negócio:* ${businessName.trim()}\n`;
    }
    text += `🎯 *Segmento:* ${niche}\n`;
    text += `💡 *Interesse:* ${customInterest}\n`;
    text += `Gostaria de agendar uma demonstração rápida para entender como aplicar no meu dia a dia.`;

    const url = `https://wa.me/${target.raw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-neutral-400 hover:text-white rounded-lg focus:outline-none"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>Atendimento Comercial Tapzoom</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Fale Direto com um Especialista
          </h3>
          <p className="text-xs text-neutral-300">
            Escolha o canal de sua preferência para receber seu diagnóstico ou demonstração personalizada.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSendToWhatsApp} className="space-y-4">
          {/* Choose WhatsApp Line */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5">
              Selecione o Canal de Atendimento
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setChosenWhatsApp('wa1')}
                className={`p-3 rounded-xl border text-left font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                  chosenWhatsApp === 'wa1'
                    ? 'border-purple-500 bg-purple-950/40 text-purple-300 font-semibold'
                    : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                }`}
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-white">Comercial 1</span>
                  <span className="text-[11px] font-mono text-neutral-400">(96) 98125-6893</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setChosenWhatsApp('wa2')}
                className={`p-3 rounded-xl border text-left font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                  chosenWhatsApp === 'wa2'
                    ? 'border-purple-500 bg-purple-950/40 text-purple-300 font-semibold'
                    : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                }`}
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-white">Comercial 2</span>
                  <span className="text-[11px] font-mono text-neutral-400">(96) 99171-3410</span>
                </div>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1">
              Nome da Sua Empresa / Marca (Opcional)
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Ex: Burger Prime Macapá, Clínica Sorrir..."
              className="w-full px-3.5 py-2.5 text-xs text-white bg-neutral-950 border border-neutral-800 rounded-xl focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">Seu Segmento</label>
              <select
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs text-white bg-neutral-950 border border-neutral-800 rounded-xl focus:outline-none focus:border-purple-500"
              >
                <option value="Gastronomia e Delivery">Gastronomia & Delivery</option>
                <option value="Clínica, Saúde & Estética">Clínica, Saúde & Estética</option>
                <option value="Varejo, Moda & Lojas">Varejo, Moda & Lojas</option>
                <option value="Arquitetura, Serviços & B2B">Arquitetura, Serviços & B2B</option>
                <option value="Outro Segmento">Outro Segmento</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Solução Desejada
              </label>
              <select
                value={customInterest}
                onChange={(e) => setCustomInterest(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs text-white bg-neutral-950 border border-neutral-800 rounded-xl focus:outline-none focus:border-purple-500"
              >
                <option value="Demonstração em Vídeo (2 min)">Vídeo de Demonstração (2 min)</option>
                <option value="Vitrines Digitais & BioSites">Vitrines Digitais & Cardápios</option>
                <option value="Sistemas de Pré-Agendamento">Pré-Agendamento Clínico</option>
                <option value="Tecnologia NFC + QR Code">Displays e Cartões NFC</option>
                <option value="Landing Pages B2B">Landing Pages Comerciais</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-xl transition-colors cursor-pointer shadow-md shadow-purple-950/50"
          >
            <Send className="w-4 h-4" />
            <span>Abrir Conversa Formatada no WhatsApp</span>
          </button>
        </form>

        {/* Alternative Instagram Link */}
        <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
          <span>Prefere o Instagram?</span>
          <a
            href={COMPANY_DATA.contacts.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-medium"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Direct {COMPANY_DATA.handle}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
