import React, { useState } from 'react';
import {
  Utensils,
  Stethoscope,
  Radio,
  Plus,
  Minus,
  Check,
  Copy,
  MessageCircle,
  ExternalLink,
  Sparkles,
  ShoppingBag,
  Clock,
  Calendar,
  User,
  MapPin,
  CreditCard,
  Smartphone,
  Star,
  RefreshCw,
} from 'lucide-react';
import { COMPANY_DATA } from '../data/company.ts';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'lanches' | 'acompanhamentos' | 'bebidas';
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'burger-prime',
    name: 'Smash Bacon Prime',
    description: 'Pão brioche, 2x smash 90g de carne nobre, cheddar inglês cremoso e fatias de bacon rústico.',
    price: 36.0,
    category: 'lanches',
  },
  {
    id: 'burger-truffle',
    name: 'Truffled Burger',
    description: 'Burger artesanal 160g, queijo gouda maçaricado, maionese trufada e cebola caramelizada.',
    price: 42.0,
    category: 'lanches',
  },
  {
    id: 'batata-rustica',
    name: 'Batata Rústica Alecrim',
    description: 'Batatas crocantes com sal marinho, alecrim fresco e dip de maionese da casa.',
    price: 22.0,
    category: 'acompanhamentos',
  },
  {
    id: 'suco-artesanal',
    name: 'Suco de Laranja 500ml',
    description: 'Suco integral 100% natural, sem adição de açúcares, gelado na hora.',
    price: 12.0,
    category: 'bebidas',
  },
];

export const LiveInteractiveShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gastronomia' | 'clinica' | 'nfc'>('gastronomia');

  // --- State for Gastronomia Showcase ---
  const [cart, setCart] = useState<{ [id: string]: number }>({ 'burger-prime': 1, 'batata-rustica': 1 });
  const [customerName, setCustomerName] = useState('João Pedro');
  const [customerAddress, setCustomerAddress] = useState('Rua São José, 1420 - Centro');
  const [deliveryType, setDeliveryType] = useState<'entrega' | 'retirada'>('entrega');
  const [paymentMethod, setPaymentMethod] = useState('Pix');
  const [copiedFoodMessage, setCopiedFoodMessage] = useState(false);

  // --- State for Clinic Showcase ---
  const [clinicSpecialty, setClinicSpecialty] = useState('Odontologia Geral & Implantes');
  const [clinicShift, setClinicShift] = useState<'Manhã (08h às 12h)' | 'Tarde (14h às 18h)'>('Tarde (14h às 18h)');
  const [clinicDay, setClinicDay] = useState('Quinta-feira');
  const [clinicComplaint, setClinicComplaint] = useState('Avaliação de lente de contato dental e limpeza profunda');
  const [patientName, setPatientName] = useState('Mariana Costa');
  const [patientPhone, setPatientPhone] = useState('(96) 99122-4455');
  const [copiedClinicMessage, setCopiedClinicMessage] = useState(false);

  // --- State for NFC Simulator ---
  const [nfcTapped, setNfcTapped] = useState(false);
  const [nfcDestination, setNfcDestination] = useState<'google' | 'cardapio' | 'instagram'>('google');
  const [isSimulatingTap, setIsSimulatingTap] = useState(false);

  // Handlers for cart
  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const deliveryFee = deliveryType === 'entrega' ? 8.0 : 0.0;
  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);
  const total = subtotal + deliveryFee;

  // Format Food WhatsApp Payload
  const formatFoodOrderMessage = () => {
    let msg = `*NOVO PEDIDO - VITRINE TAPZOOM*\n`;
    msg += `--------------------------------\n`;
    msg += `👤 *Cliente:* ${customerName || 'Não informado'}\n`;
    msg += `🛵 *Tipo:* ${deliveryType === 'entrega' ? 'Entrega em domicílio' : 'Retirada no balcão'}\n`;
    if (deliveryType === 'entrega') {
      msg += `📍 *Endereço:* ${customerAddress || 'A combinar'}\n`;
    }
    msg += `💳 *Pagamento:* ${paymentMethod}\n`;
    msg += `--------------------------------\n`;
    msg += `*ITENS DO PEDIDO:*\n`;

    Object.entries(cart).forEach(([id, qty]) => {
      const item = MENU_ITEMS.find((m) => m.id === id);
      if (item) {
        msg += `• ${qty}x ${item.name} - R$ ${(item.price * qty).toFixed(2)}\n`;
      }
    });

    msg += `--------------------------------\n`;
    msg += `Subtotal: R$ ${subtotal.toFixed(2)}\n`;
    if (deliveryType === 'entrega') {
      msg += `Taxa de entrega: R$ ${deliveryFee.toFixed(2)}\n`;
    }
    msg += `*TOTAL: R$ ${total.toFixed(2)}*\n`;
    msg += `--------------------------------\n`;
    msg += `_Pedido gerado via Vitrine Digital Tapzoom_`;
    return msg;
  };

  // Format Clinic Pre-scheduling Payload
  const formatClinicMessage = () => {
    let msg = `*PRÉ-AGENDAMENTO & TRIAGEM CLÍNICA*\n`;
    msg += `--------------------------------\n`;
    msg += `👤 *Paciente:* ${patientName || 'Não informado'}\n`;
    msg += `📱 *Telefone:* ${patientPhone || 'Não informado'}\n`;
    msg += `🩺 *Especialidade:* ${clinicSpecialty}\n`;
    msg += `📅 *Dia Preferencial:* ${clinicDay}\n`;
    msg += `⏰ *Turno Preferencial:* ${clinicShift}\n`;
    msg += `--------------------------------\n`;
    msg += `📝 *Queixa Principal / Motivo:*\n"${clinicComplaint}"\n`;
    msg += `--------------------------------\n`;
    msg += `_Solicitação gerada via Sistema de Triagem Tapzoom_`;
    return msg;
  };

  const copyToClipboard = (text: string, type: 'food' | 'clinic') => {
    navigator.clipboard.writeText(text);
    if (type === 'food') {
      setCopiedFoodMessage(true);
      setTimeout(() => setCopiedFoodMessage(false), 2500);
    } else {
      setCopiedClinicMessage(true);
      setTimeout(() => setCopiedClinicMessage(false), 2500);
    }
  };

  const simulateNfcTap = () => {
    setIsSimulatingTap(true);
    setTimeout(() => {
      setIsSimulatingTap(false);
      setNfcTapped(true);
    }, 700);
  };

  return (
    <section id="demos" className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-3 tracking-wide uppercase">
            <span>Showroom Interativo</span>
            <span aria-hidden="true">·</span>
            <span>Ambiente de Simulação</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Experimente na prática o que a Tapzoom entrega para os seus clientes.
          </h2>
          <p className="mt-3 text-base text-neutral-300 leading-relaxed">
            Nada de apresentações teóricas em PowerPoint. Interaja com os três motores funcionais abaixo e
            veja como a experiência é rápida para o cliente e organizada para o atendente.
          </p>
        </div>

        {/* Interactive Segmented Control Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-900/90 border border-neutral-800 rounded-xl mb-10 max-w-2xl">
          <button
            onClick={() => setActiveTab('gastronomia')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'gastronomia'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>01. Vitrine Gastronômica & Varejo</span>
          </button>

          <button
            onClick={() => setActiveTab('clinica')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'clinica'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            <span>02. Pré-Agendamento Clínico</span>
          </button>

          <button
            onClick={() => setActiveTab('nfc')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'nfc'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Radio className="w-4 h-4" />
            <span>03. Conexão NFC + QR Code</span>
          </button>
        </div>

        {/* =========================================================================
            TAB 1: VITRINE GASTRONÔMICA E VAREJO
           ========================================================================= */}
        {activeTab === 'gastronomia' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Mobile Simulation Frame */}
            <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                    TZ
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Smash Burger Gourmet</h3>
                    <p className="text-xs text-neutral-400">Cardápio Interativo ao Vivo</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-900 px-2 py-0.5 rounded">
                  Aberto para Pedidos
                </span>
              </div>

              {/* Items List */}
              <div className="mt-5 space-y-3.5">
                {MENU_ITEMS.map((item) => {
                  const qty = cart[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-2">
                          <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                          <span className="text-xs text-purple-400 font-mono font-bold">
                            R$ {item.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 line-clamp-1 max-w-md">{item.description}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 shrink-0">
                        {qty > 0 ? (
                          <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-700 rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 text-neutral-300 hover:text-white rounded hover:bg-neutral-800"
                              aria-label="Diminuir"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-mono font-bold text-white px-1 tabular-nums">
                              {qty}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 text-neutral-300 hover:text-white rounded hover:bg-neutral-800"
                              aria-label="Aumentar"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-purple-600/90 hover:bg-purple-600 rounded-lg transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                            <span>Adicionar</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order Settings Form */}
              <div className="mt-6 pt-5 border-t border-neutral-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Seu Nome</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs text-white bg-neutral-950 border border-neutral-800 rounded-lg focus:outline-none focus:border-purple-500"
                      placeholder="Nome do cliente"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Forma de Pagamento</label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full px-3 py-2 text-xs text-white bg-neutral-950 border border-neutral-800 rounded-lg focus:outline-none focus:border-purple-500"
                    >
                      <option value="Pix">Pix (Chave Instantânea)</option>
                      <option value="Cartão de Crédito/Débito">Cartão (Máquina na entrega)</option>
                      <option value="Dinheiro">Dinheiro com Troco</option>
                    </select>
                  </div>
                </div>

                {/* Delivery Option */}
                <div className="flex items-center gap-3 text-xs">
                  <button
                    onClick={() => setDeliveryType('entrega')}
                    className={`flex-1 py-2 px-3 rounded-lg border text-center font-medium transition-colors cursor-pointer ${
                      deliveryType === 'entrega'
                        ? 'border-purple-500 bg-purple-950/40 text-purple-300'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Entrega (+R$ 8,00)
                  </button>
                  <button
                    onClick={() => setDeliveryType('retirada')}
                    className={`flex-1 py-2 px-3 rounded-lg border text-center font-medium transition-colors cursor-pointer ${
                      deliveryType === 'retirada'
                        ? 'border-purple-500 bg-purple-950/40 text-purple-300'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Retirada no Balcão (Grátis)
                  </button>
                </div>

                {deliveryType === 'entrega' && (
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Endereço de Entrega</label>
                    <input
                      type="text"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full px-3 py-2 text-xs text-white bg-neutral-950 border border-neutral-800 rounded-lg focus:outline-none focus:border-purple-500"
                      placeholder="Rua, número, complemento e bairro"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right: Real WhatsApp Output Preview */}
            <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-white">
                    Ficha Formatada Recebida no WhatsApp
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(formatFoodOrderMessage(), 'food')}
                  className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedFoodMessage ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Texto</span>
                    </>
                  )}
                </button>
              </div>

              {/* Chat Bubble Rendering */}
              <div className="bg-[#0b141a] p-4 rounded-xl border border-neutral-800 text-xs font-mono text-neutral-200 whitespace-pre-wrap leading-relaxed shadow-inner">
                {formatFoodOrderMessage()}
              </div>

              {/* Total Summary */}
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400 block">Total Calculado</span>
                  <span className="text-lg font-bold font-mono text-white">
                    R$ {total.toFixed(2)}
                  </span>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_DATA.contacts.whatsapp1.raw}?text=${encodeURIComponent(
                    formatFoodOrderMessage()
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Testar Envio no WhatsApp</span>
                </a>
              </div>

              <div className="text-xs text-neutral-400 space-y-1">
                <p className="font-semibold text-neutral-300">Por que isso muda o seu jogo?</p>
                <p>
                  O atendente não perde 10 minutos perguntando nome, endereço, troco ou ponto da carne. O pedido chega
                  pronto para impressão na cozinha sem erros.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: PRÉ-AGENDAMENTO & TRIAGEM CLÍNICA
           ========================================================================= */}
        {activeTab === 'clinica' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Clinic Form Simulator */}
            <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                    CL
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Clínica & Consultório Médico</h3>
                    <p className="text-xs text-neutral-400">Fluxo de Triagem para Recepção</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400 bg-purple-950/60 border border-purple-900 px-2 py-0.5 rounded">
                  Triagem Inteligente
                </span>
              </div>

              {/* Specialty Selector */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-2">
                  Especialidade Médica ou Odontológica
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Odontologia Geral & Implantes',
                    'Harmonização & Estética',
                    'Dermatologia Clínica',
                    'Nutrição & Longevidade',
                  ].map((spec) => (
                    <button
                      key={spec}
                      onClick={() => setClinicSpecialty(spec)}
                      className={`px-3 py-2 text-xs rounded-lg border text-left font-medium transition-colors cursor-pointer ${
                        clinicSpecialty === spec
                          ? 'border-purple-500 bg-purple-950/40 text-purple-300'
                          : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Shift & Day */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">Dia da Semana Preferencial</label>
                  <select
                    value={clinicDay}
                    onChange={(e) => setClinicDay(e.target.value)}
                    className="w-full px-3 py-2 text-xs text-white bg-neutral-950 border border-neutral-800 rounded-lg focus:outline-none focus:border-purple-500"
                  >
                    <option value="Segunda-feira">Segunda-feira</option>
                    <option value="Terça-feira">Terça-feira</option>
                    <option value="Quarta-feira">Quarta-feira</option>
                    <option value="Quinta-feira">Quinta-feira</option>
                    <option value="Sexta-feira">Sexta-feira</option>
                    <option value="Sábado (Plantão)">Sábado (Plantão)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">Turno de Preferência</label>
                  <div className="flex gap-2">
                    {(['Manhã (08h às 12h)', 'Tarde (14h às 18h)'] as const).map((shift) => (
                      <button
                        key={shift}
                        onClick={() => setClinicShift(shift)}
                        className={`flex-1 py-2 px-2 text-xs rounded-lg border text-center font-medium transition-colors cursor-pointer ${
                          clinicShift === shift
                            ? 'border-purple-500 bg-purple-950/40 text-purple-300'
                            : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {shift.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Patient Complaint */}
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Queixa Principal ou Motivo da Consulta
                </label>
                <textarea
                  value={clinicComplaint}
                  onChange={(e) => setClinicComplaint(e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 text-xs text-white bg-neutral-950 border border-neutral-800 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="Descreva o que o paciente está sentindo..."
                />
              </div>

              {/* Patient Data */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">Nome do Paciente</label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full px-3 py-2 text-xs text-white bg-neutral-950 border border-neutral-800 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">WhatsApp de Contato</label>
                  <input
                    type="text"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs text-white bg-neutral-950 border border-neutral-800 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* Right: Clinic WhatsApp Preview */}
            <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-white">
                    Ficha de Triagem Pronta para Recepção
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(formatClinicMessage(), 'clinic')}
                  className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedClinicMessage ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Ficha</span>
                    </>
                  )}
                </button>
              </div>

              {/* Formatted Output */}
              <div className="bg-[#0b141a] p-4 rounded-xl border border-neutral-800 text-xs font-mono text-neutral-200 whitespace-pre-wrap leading-relaxed shadow-inner">
                {formatClinicMessage()}
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400 block">Tempo médio de confirmação</span>
                  <span className="text-sm font-bold text-emerald-400">15 segundos na recepção</span>
                </div>
                <a
                  href={`https://wa.me/${COMPANY_DATA.contacts.whatsapp2.raw}?text=${encodeURIComponent(
                    formatClinicMessage()
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enviar para Recepção</span>
                </a>
              </div>

              <div className="text-xs text-neutral-400 space-y-1">
                <p className="font-semibold text-neutral-300">Benefício para sua Clínica:</p>
                <p>
                  Elimina o vaivém de mensagens sobre especialidade e horário disponível. A recepcionista já abre a agenda
                  no horário certo e apenas confirma a consulta com o paciente.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: TECNOLOGIA NFC + QR CODE INTELIGENTE
           ========================================================================= */}
        {activeTab === 'nfc' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Physical Product Visual Showcase */}
            <div className="lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="relative">
                <img
                  src="/src/assets/images/nfc_smart_stand_1792197323018.jpg"
                  alt="Display Acrílico Inteligente NFC e QR Code Tapzoom"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md border border-neutral-800 px-3 py-1 rounded-lg text-xs font-semibold text-purple-400">
                  Tecnologia NFC NTAG213 + Gravura a Laser
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-base font-bold text-white">Display Acrílico & Cartões Conectados</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Sem necessidade de baixar aplicativo. O cliente apenas encosta o celular no display de mesa ou balcão
                  para ser direcionado instantaneamente para o link configurado da sua empresa.
                </p>

                <div className="pt-2 grid grid-cols-3 gap-2 text-xs text-neutral-300 font-medium">
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-center">
                    <span className="block text-purple-400 font-bold font-mono">1 seg</span>
                    <span>Conexão rápida</span>
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-center">
                    <span className="block text-purple-400 font-bold font-mono">100%</span>
                    <span>Compatível iOS & Android</span>
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-center">
                    <span className="block text-purple-400 font-bold font-mono">Remoto</span>
                    <span>Link editável</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive NFC Tap Simulator */}
            <div className="lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">Simulador de Aproximação (NFC Tap)</h3>
                <p className="text-xs text-neutral-400">
                  Escolha qual ação o display físico deve disparar quando o cliente encostar o celular:
                </p>
              </div>

              {/* Destination selector */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'google', label: 'Avaliação Google 5★' },
                  { id: 'cardapio', label: 'Cardápio na Mesa' },
                  { id: 'instagram', label: 'Instagram @tapzoomm' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setNfcDestination(item.id as any);
                      setNfcTapped(false);
                    }}
                    className={`p-2.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer text-center ${
                      nfcDestination === item.id
                        ? 'border-purple-500 bg-purple-950/40 text-purple-300'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Interactive Tap Zone */}
              <div className="border border-dashed border-neutral-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-neutral-950 relative overflow-hidden">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSimulatingTap
                      ? 'scale-110 bg-purple-500 text-white animate-pulse'
                      : nfcTapped
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-neutral-900 text-purple-400 border border-neutral-800'
                  }`}
                >
                  <Radio className="w-10 h-10" />
                </div>

                <div className="mt-4 space-y-1">
                  <p className="text-sm font-bold text-white">
                    {isSimulatingTap
                      ? 'Lendo Chip NFC...'
                      : nfcTapped
                      ? 'Aproximação Concluída com Sucesso!'
                      : 'Aproxime o Smartphone'}
                  </p>
                  <p className="text-xs text-neutral-400 max-w-xs">
                    {nfcTapped
                      ? 'O cliente foi redirecionado imediatamente para a tela final em seu aparelho.'
                      : 'Clique no botão abaixo para simular a resposta imediata da aproximação.'}
                  </p>
                </div>

                <button
                  onClick={simulateNfcTap}
                  disabled={isSimulatingTap}
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-lg transition-colors cursor-pointer shadow-md disabled:opacity-50"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Simular Toque com o Celular</span>
                </button>
              </div>

              {/* Result Preview when Tapped */}
              {nfcTapped && (
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/60 animate-in fade-in space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-purple-300">Ação Disparada no Celular do Cliente:</span>
                    <span className="text-emerald-400 font-mono text-[11px]">Status: 200 OK</span>
                  </div>
                  {nfcDestination === 'google' && (
                    <div className="flex items-center justify-between text-xs text-neutral-200 bg-neutral-950/80 p-3 rounded-lg border border-neutral-800">
                      <div className="flex items-center gap-2">
                        <div className="flex text-amber-400">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                        </div>
                        <span className="font-medium">Janela de Avaliação do Google aberta diretamente</span>
                      </div>
                      <span className="text-purple-400 text-[11px] font-mono">+300% reviews</span>
                    </div>
                  )}

                  {nfcDestination === 'cardapio' && (
                    <div className="text-xs text-neutral-200 bg-neutral-950/80 p-3 rounded-lg border border-neutral-800">
                      <span>Cardápio Digital da Mesa #08 aberto na hora sem digitar URL e sem PDF.</span>
                    </div>
                  )}

                  {nfcDestination === 'instagram' && (
                    <div className="text-xs text-neutral-200 bg-neutral-950/80 p-3 rounded-lg border border-neutral-800 flex items-center justify-between">
                      <span>Perfil @tapzoomm aberto direto no app do Instagram do visitante.</span>
                      <a
                        href={COMPANY_DATA.contacts.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:underline flex items-center gap-1"
                      >
                        <span>Visitar</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
