import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { SolutionsSection } from './components/SolutionsSection.tsx';
import { LiveInteractiveShowcase } from './components/LiveInteractiveShowcase.tsx';
import { BlindSpotDiagnostic } from './components/BlindSpotDiagnostic.tsx';
import { MethodologySection } from './components/MethodologySection.tsx';
import { CaseStudiesSection } from './components/CaseStudiesSection.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { Footer } from './components/Footer.tsx';
import { BioSiteView } from './components/BioSiteView.tsx';
import { COMPANY_DATA, Solution } from './data/company.ts';
import { MessageCircle, ArrowRight, Sparkles, CheckCircle2, Smartphone, ExternalLink } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'site' | 'bio'>('site');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  useEffect(() => {
    // Check initial hash or search params
    const checkHash = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(window.location.search);
      if (hash === '#bio' || params.get('view') === 'bio') {
        setCurrentView('bio');
      } else {
        setCurrentView('site');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleOpenContact = () => {
    setSelectedSolution(null);
    setIsContactModalOpen(true);
  };

  const handleSelectSolution = (sol: Solution) => {
    setSelectedSolution(sol);
    setIsContactModalOpen(true);
  };

  const scrollToDemos = () => {
    const el = document.getElementById('demos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDiagnostico = () => {
    const el = document.getElementById('diagnostico');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSolutions = () => {
    const el = document.getElementById('solucoes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // If currently in BioSite view (@tapzoomm Link na Bio)
  if (currentView === 'bio') {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-between">
        <BioSiteView
          onGoToFullSite={() => {
            window.location.hash = '';
            setCurrentView('site');
          }}
          onGoToSolutions={() => {
            window.location.hash = '';
            setCurrentView('site');
            setTimeout(scrollToSolutions, 150);
          }}
        />
        {/* Floating WhatsApp trigger is also accessible */}
        <FloatingWhatsApp />
      </div>
    );
  }

  // Full Corporate & Interactive Platform View
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      {/* Top Bar Navigation */}
      <Header
        onOpenContact={handleOpenContact}
        onOpenBioSite={() => {
          window.location.hash = '#bio';
          setCurrentView('bio');
        }}
        currentView={currentView}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Entrance Animations */}
        <div className="animate-fade-in-up">
          <Hero
            onOpenContact={handleOpenContact}
            onExploreDemos={scrollToDemos}
            onDiagnostico={scrollToDiagnostico}
          />
        </div>

        {/* Live Interactive Showroom */}
        <div className="animate-fade-in-up animate-delay-100">
          <LiveInteractiveShowcase />
        </div>

        {/* 4 Core Solutions Bento Grid */}
        <div className="animate-fade-in-up animate-delay-200">
          <SolutionsSection onSelectSolution={handleSelectSolution} />
        </div>

        {/* BioSite Preview Banner */}
        <section className="py-12 bg-neutral-900/80 border-b border-neutral-900 animate-fade-in-up animate-delay-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-950/40 via-neutral-900 to-purple-950/30 border border-purple-800/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500 bg-white p-0.5 shrink-0 shadow-md">
                  <img
                    src={COMPANY_DATA.logoUrl}
                    alt="Logo Tapzoom"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== '/images/tapzoom_logo.jpg') {
                        target.src = '/images/tapzoom_logo.jpg';
                      } else if (target.src !== COMPANY_DATA.fallbackLogoUrl) {
                        target.src = COMPANY_DATA.fallbackLogoUrl;
                      }
                    }}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                      Link da Bio Oficial
                    </span>
                    <span className="text-xs text-neutral-400">·</span>
                    <span className="text-xs text-neutral-300 font-mono">@tapzoomm</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    Conheça o BioSite oficial da Tapzoom
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1">
                    Interface leve e otimizada para Instagram com os canais comerciais e soluções em um só lugar.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  window.location.hash = '#bio';
                  setCurrentView('bio');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-xl transition-colors cursor-pointer shrink-0 shadow-md shadow-purple-950/40"
              >
                <Smartphone className="w-4 h-4" />
                <span>Abrir BioSite Oficial</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>
        </section>

        {/* Ponto Cego Diagnostic & Friction Calculator */}
        <div className="animate-fade-in-up animate-delay-200">
          <BlindSpotDiagnostic />
        </div>

        {/* Methodology: Consultative, Humanized & 2-Min Video Proof */}
        <div className="animate-fade-in-up animate-delay-300">
          <MethodologySection onOpenContact={handleOpenContact} />
        </div>

        {/* Case Studies & Social Proof */}
        <div className="animate-fade-in-up animate-delay-300">
          <CaseStudiesSection />
        </div>

        {/* Pre-Footer Final Conversion Strip */}
        <section className="py-20 bg-gradient-to-b from-neutral-950 via-purple-950/20 to-neutral-950 border-b border-neutral-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Pronto para Conectar, Facilitar e Crescer?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Elimine o atrito no WhatsApp da sua empresa ainda esta semana.
            </h2>

            <p className="text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Solicite uma análise consultiva gratuita do seu perfil e receba uma demonstração em vídeo de 2 minutos
              com os produtos ou serviços reais do seu negócio.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-xl transition-colors cursor-pointer shadow-xl shadow-purple-950/60"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp Comercial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_DATA.contacts.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-xl transition-colors"
              >
                <span>Conhecer o Instagram {COMPANY_DATA.handle}</span>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                Sem mensalidades abusivas de aplicativo
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                Atendimento humanizado em Macapá e no Brasil
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                Demonstração em vídeo sem compromisso
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Lead Capture & WhatsApp Consultation Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        selectedSolution={selectedSolution}
      />

      {/* Floating Fast WhatsApp Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
