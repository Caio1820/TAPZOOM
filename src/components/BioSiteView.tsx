import React, { useState } from 'react';
import { MessageCircle, Instagram, Zap, ChevronRight, Globe, Share2, Check, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '../data/company.ts';

interface BioSiteViewProps {
  onGoToFullSite: () => void;
  onGoToSolutions: () => void;
}

export const BioSiteView: React.FC<BioSiteViewProps> = ({ onGoToFullSite, onGoToSolutions }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [logoSrc, setLogoSrc] = useState<string>(COMPANY_DATA.logoUrl);
  const [imgError, setImgError] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Tapzoom | Soluções Digitais',
          text: 'Conecte, facilite e cresça! Ajudando negócios a se conectarem com seus clientes.',
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900/40 backdrop-blur-md text-slate-800 flex flex-col items-center justify-center p-4 sm:p-6 py-10 relative overflow-hidden">
      {/* Background ambient light */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      {/* Top Bar Switcher: Easily return to the full site or share */}
      <div className="w-full max-w-[480px] flex items-center justify-between mb-4 px-1 animate-fade-in-down">
        <button
          onClick={onGoToFullSite}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-all cursor-pointer shadow-sm"
        >
          <Globe className="w-3.5 h-3.5 text-purple-400" />
          <span>Ver Site Completo & Demos</span>
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-all cursor-pointer shadow-sm"
          title="Compartilhar Link da Bio"
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copiado!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-neutral-400" />
              <span>Compartilhar</span>
            </>
          )}
        </button>
      </div>

      {/* Main Bio Card Container */}
      <div className="w-full max-w-[480px] bg-white text-slate-800 rounded-[24px] shadow-2xl p-7 sm:p-8 text-center border border-slate-200 animate-fade-in-scale relative z-10">
        {/* Official Logo Wrapper */}
        <div className="w-[110px] h-[110px] mx-auto mb-4 rounded-full overflow-hidden border-[3px] border-purple-800 shadow-md shadow-purple-900/15 bg-white flex items-center justify-center p-0.5 animate-fade-in-down">
          {!imgError ? (
            <img
              src={logoSrc}
              alt="Logo Oficial Tapzoom"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
              onError={() => {
                if (logoSrc !== '/images/tapzoom_logo.jpg') {
                  setLogoSrc('/images/tapzoom_logo.jpg');
                } else if (logoSrc !== COMPANY_DATA.fallbackLogoUrl) {
                  setLogoSrc(COMPANY_DATA.fallbackLogoUrl);
                } else {
                  setImgError(true);
                }
              }}
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-purple-800 to-purple-600 flex items-center justify-center text-white font-extrabold text-2xl tracking-tighter">
              TZ
            </div>
          )}
        </div>

        {/* Brand Name & Handle */}
        <h1 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight animate-fade-in-up animate-delay-100">
          Tapzoom
        </h1>

        <div className="text-sm text-purple-800 font-semibold mb-3 animate-fade-in-up animate-delay-200">
          {COMPANY_DATA.handle}
        </div>

        {/* Bio Copy */}
        <p className="text-sm text-slate-500 leading-relaxed mb-6 animate-fade-in-up animate-delay-300">
          Conecte, facilite e cresça! 🌟
          <br />
          Ajudando negócios a se conectarem com seus clientes através de Vitrines Digitais e Sistemas Integrados. 🚀
        </p>

        {/* Links List with Staggered Entrance Animations */}
        <div className="flex flex-col gap-3.5 mb-8 text-left">
          {/* Link 1: WhatsApp Comercial 1 */}
          <a
            href="https://wa.me/5596981256893?text=Ol%C3%A1%2C%20Tapzoom!%20Vim%20pelo%20Link%20da%20Bio%20e%20gostaria%20de%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white hover:bg-purple-50/70 text-slate-800 border-2 border-slate-200 hover:border-purple-700 p-4 rounded-[14px] font-semibold text-sm transition-all duration-200 shadow-xs hover:-translate-y-0.5 hover:shadow-md animate-fade-in-up animate-delay-300 group"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-100" />
              </span>
              <span>Falar no WhatsApp (Comercial 1)</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-700 group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* Link 2: WhatsApp Comercial 2 */}
          <a
            href="https://wa.me/5596991713410?text=Ol%C3%A1%2C%20Tapzoom!%20Vim%20pelo%20Link%20da%20Bio%20e%20gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20em%20v%C3%ADdeo."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white hover:bg-purple-50/70 text-slate-800 border-2 border-slate-200 hover:border-purple-700 p-4 rounded-[14px] font-semibold text-sm transition-all duration-200 shadow-xs hover:-translate-y-0.5 hover:shadow-md animate-fade-in-up animate-delay-400 group"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-100" />
              </span>
              <span>Falar no WhatsApp (Comercial 2)</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-700 group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* Link 3: Instagram */}
          <a
            href="https://www.instagram.com/tapzoomm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white hover:bg-purple-50/70 text-slate-800 border-2 border-slate-200 hover:border-purple-700 p-4 rounded-[14px] font-semibold text-sm transition-all duration-200 shadow-xs hover:-translate-y-0.5 hover:shadow-md animate-fade-in-up animate-delay-500 group"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Instagram className="w-4 h-4" />
              </span>
              <span>Siga no Instagram</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-purple-700 group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* Link 4: Nossas Soluções (Vitrines & Agendamentos) */}
          <button
            onClick={onGoToSolutions}
            className="w-full flex items-center justify-between bg-purple-50/50 hover:bg-purple-100/70 text-slate-900 border-2 border-purple-200 hover:border-purple-700 p-4 rounded-[14px] font-semibold text-sm transition-all duration-200 shadow-xs hover:-translate-y-0.5 hover:shadow-md cursor-pointer animate-fade-in-up animate-delay-600 group"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-800 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Zap className="w-4 h-4 fill-white text-purple-800" />
              </span>
              <span>Nossas Soluções (Vitrines & Agendamentos)</span>
            </div>
            <ChevronRight className="w-4 h-4 text-purple-800 group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>

        {/* Footer */}
        <div className="text-xs text-slate-400 border-t border-slate-200 pt-4 animate-fade-in-up animate-delay-600">
          Desenvolvido por <span className="text-purple-800 font-semibold">Tapzoom</span> © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};
