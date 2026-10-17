export interface Solution {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  targetNiche: string;
  painPoint: string;
  solutionOutcome: string;
  features: string[];
  image: string;
  badgeText: string;
}

export interface CaseStudy {
  id: string;
  businessName: string;
  niche: string;
  location: string;
  metric: string;
  metricLabel: string;
  summary: string;
  quote: string;
  author: string;
  role: string;
}

export const COMPANY_DATA = {
  name: 'Tapzoom',
  handle: '@tapzoomm',
  slogan: 'Conecte, facilite e cresça!',
  mission: 'Ajudando negócios a se conectarem com seus clientes.',
  logoUrl: 'https://i.postimg.cc/6pkWzfxW/Whats-App-Image-2026-10-16-at-21-30-24.jpg',
  valueProposition:
    'Eliminamos os atritos de conversão e o congestionamento no atendimento de negócios locais, transformando o tráfego de redes sociais em fluxos automatizados, vitrines visuais interativas e sistemas de agendamento integrados direto ao WhatsApp.',
  contacts: {
    whatsapp1: {
      display: '(96) 98125-6893',
      raw: '5596981256893',
      url: 'https://wa.me/5596981256893?text=Ol%C3%A1%2C%20Tapzoom!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20digitais%20para%20o%20meu%20neg%C3%B3cio.',
      label: 'Comercial 1',
    },
    whatsapp2: {
      display: '(96) 99171-3410',
      raw: '5596991713410',
      url: 'https://wa.me/5596991713410?text=Ol%C3%A1%2C%20Tapzoom!%20Gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20em%20v%C3%ADdeo%20de%202%20minutos.',
      label: 'Comercial 2',
    },
    instagram: {
      handle: '@tapzoomm',
      url: 'https://instagram.com/tapzoomm',
    },
    location: 'Macapá - AP & Atendimento Nacional',
  },
  solutions: [
    {
      id: 'vitrines-digitais',
      number: '01',
      title: 'Vitrines Digitais & BioSites Interativos',
      category: 'Gastronomia e Varejo',
      tagline: 'Adeus PDFs pesados. Olá catálogo visual que vende no WhatsApp.',
      description:
        'Substituição definitiva de PDFs estáticos de 20MB e links de texto crus por cardápios visuais rápidos, leves e responsivos. O cliente escolhe opções, monta o carrinho e envia o pedido 100% calculado e formatado direto para o WhatsApp do seu atendente.',
      targetNiche: 'Hamburguerias, Pizzarias, Restaurantes, Boutiques e Lojas de Varejo',
      painPoint:
        'Cliente desiste de baixar PDF pesado no 4G ou fica mandando 15 perguntas no WhatsApp perguntando se tem tamanho M ou ponto da carne.',
      solutionOutcome: 'Carrinho interativo com cálculo automático de adicionais e endereço pronto para impressão na cozinha.',
      features: [
        'Carregamento instantâneo no Instagram e WhatsApp',
        'Categorias com fotos em alta definição e modificadores',
        'Cálculo de subtotal, adicionais e taxa de entrega',
        'Envio estruturado com um clique para o WhatsApp da loja',
        'Zero cobrança de comissões por pedido',
      ],
      image: '/src/assets/images/vitrine_gastronomia_1792197321874.jpg',
      badgeText: 'Foco em Gastronomia & Varejo',
    },
    {
      id: 'pre-agendamento',
      number: '02',
      title: 'Sistemas de Pré-Agendamento & Triagem',
      category: 'Clínicas e Saúde',
      tagline: 'Fim do telefone ocupado e da recepção sufocada.',
      description:
        'Integração de motores inteligentes de pré-agendamento e triagem em sites existentes ou subdomínios dedicados. O paciente escolhe a especialidade, turno/dia de preferência, relata a queixa principal e envia a ficha completa formatada para a recepção da clínica.',
      targetNiche: 'Clínicas Odontológicas, Dermatologia, Médicos, Fisioterapia e Estética',
      painPoint:
        'Recepção perde horas por dia com mensagens repetitivas sobre quais convênios atendem, horários vagos e perguntando dados do paciente um a um.',
      solutionOutcome: 'Ficha de triagem chega padronizada no WhatsApp da recepção para confirmação rápida em 10 segundos.',
      features: [
        'Filtro por especialidade médica e profissional',
        'Seleção de dias e turnos preferenciais (Manhã / Tarde)',
        'Coleta de queixa principal e histórico de convênio',
        'Ficha padronizada pronta para o prontuário',
        'Redução drástica no índice de faltas e remarcações',
      ],
      image: '/src/assets/images/clinica_triagem_1792197322824.jpg',
      badgeText: 'Foco em Saúde & Consultórios',
    },
    {
      id: 'nfc-qrcode',
      number: '03',
      title: 'Tecnologia NFC + QR Code Inteligente',
      category: 'Conexão Físico-Digital',
      tagline: 'Aproxime o celular e conecte o cliente à sua marca em 1 segundo.',
      description:
        'Displays acrílicos de balcão e cartões inteligentes equipados com chip NFC por aproximação e QR Code dinâmico gravado a laser. O cliente aproxima o smartphone para abrir o cardápio na mesa, avaliar 5 estrelas no Google ou seguir o Instagram.',
      targetNiche: 'Mesas de Restaurantes, Balcões de Recepção, Feiras e Pontos de Venda',
      painPoint:
        'Pedir para o cliente buscar o nome da empresa no Google ou digitar @ no Instagram tem taxa de conversão inferior a 5%.',
      solutionOutcome: 'Mais de 80% dos clientes que aproximam o celular completam a avaliação no Google ou visualizam o catálogo.',
      features: [
        'Aproximação instantânea sem necessidade de baixar nenhum app',
        'Acelerador de avaliações 5 estrelas no Perfil da Empresa no Google',
        'Acesso direto ao cardápio na mesa ou chave Pix do estabelecimento',
        'Material acrílico de alta durabilidade e acabamento premium',
        'Atualização remota dos links sem precisar trocar a peça física',
      ],
      image: '/src/assets/images/nfc_smart_stand_1792197323018.jpg',
      badgeText: 'Presença Física Inovadora',
    },
    {
      id: 'landing-pages',
      number: '04',
      title: 'Landing Pages Comerciais & Portfólios B2B',
      category: 'B2B e Alto Padrão',
      tagline: 'Estruturas de alta conversão para fechar contratos de maior valor.',
      description:
        'Páginas web institucionais focadas em autoridade, qualificação rigorosa de leads e exibição elegante de cases de sucesso. Feito para profissionais que vendem serviços de alto ticket e precisam de credibilidade instantânea.',
      targetNiche: 'Escritórios de Arquitetura, Engenharia, Consultorias, Franquias e B2B',
      painPoint:
        'Perfis no Instagram sem um site profissional transmitem amadorismo para clientes corporativos dispostos a pagar tickets elevados.',
      solutionOutcome: 'Posicionamento premium que justifica preços maiores e gera pedidos de orçamento qualificados.',
      features: [
        'Design autoral exclusivo com narrativa de autoridade',
        'Filtro de qualificação de orçamento para afastar curiosos',
        'Galeria de projetos e estudos de caso com métricas reais',
        'Otimização SEO local para buscas no Google',
        'Integração direta com WhatsApp e e-mail comercial',
      ],
      image: '/src/assets/images/hero_tapzoom_tech_1792197322398.jpg',
      badgeText: 'Foco em Autoridade & B2B',
    },
  ] as Solution[],
  methodology: [
    {
      step: '01',
      title: 'Consultoria & Estudo do Negócio',
      summary:
        'Antes de qualquer contato, estudamos profundamente sua presença atual. Identificamos e valorizamos os pontos fortes reais que sua marca já construiu.',
      detail:
        'Não usamos mensagens genéricas de robô. Analisamos seu Instagram, seu fluxo de atendimento e seu catálogo para entender sua dinâmica real.',
    },
    {
      step: '02',
      title: 'Identificação do Ponto Cego',
      summary:
        'Mapeamos exatamente onde seu cliente desiste no atendimento ou onde sua equipe gasta horas preciosas do dia respondendo perguntas óbvias.',
      detail:
        'Seja o PDF pesado que não carrega, o link quebrado na bio ou a fila de espera no WhatsApp no horário de pico, revelamos o gargalo com clareza.',
    },
    {
      step: '03',
      title: 'Demonstração Prática em Vídeo (2 min)',
      summary:
        'Gravamos uma demonstração curta e direta ao ponto mostrando como a solução Tapzoom funciona aplicada exatamente aos produtos ou serviços do seu negócio.',
      detail:
        'Você vê com os próprios olhos a agilidade da experiência antes de tomar qualquer decisão, comprovando a economia diária de tempo.',
    },
    {
      step: '04',
      title: 'Entrega Ágil & Treinamento da Equipe',
      summary:
        'Configuramos todo o ecossistema, geramos as peças físicas NFC/QR Code e treinamos seus atendentes para receber pedidos e triagens perfeitamente.',
      detail:
        'Seu negócio começa a operar com máxima eficiência em poucos dias, com suporte humanizado e contínuo da nossa equipe.',
    },
  ],
  caseStudies: [
    {
      id: 'case-burger',
      businessName: 'Smash & Beer Artesanal',
      niche: 'Gastronomia & Delivery',
      location: 'Macapá, AP',
      metric: '+140%',
      metricLabel: 'Aumento em pedidos diretos no WhatsApp',
      summary:
        'Substituição de um cardápio em PDF de 18MB por uma Vitrine Digital Tapzoom. Os clientes montam o hambúrguer com adicionais e o pedido chega pronto para impressão.',
      quote:
        'Antes a gente passava 15 minutos explicando o cardápio no WhatsApp em dia de promoção. Agora o pedido chega mastigado com adicionais e endereço. Economizamos mais de 3 horas por noite.',
      author: 'Rodrigo Medeiros',
      role: 'Sócio-Fundador',
    },
    {
      id: 'case-clinica',
      businessName: 'Clínica Odonto & Estética Integrada',
      niche: 'Saúde & Consultório',
      location: 'Macapá, AP',
      metric: '-80%',
      metricLabel: 'Redução do tempo de triagem na recepção',
      summary:
        'Implementação de sistema de pré-agendamento no link da bio. Pacientes selecionam especialidade, turno e relatam queixa principal antes do primeiro contato.',
      quote:
        'Nossa recepcionista não fica mais presa digitando mensagens repetidas. O paciente já chega com turno de preferência e queixa clara. As faltas caíram drasticamente.',
      author: 'Dra. Camila Vasconcelos',
      role: 'Diretora Clínica',
    },
    {
      id: 'case-boutique',
      businessName: 'Maison Chic Concept',
      niche: 'Moda & Acessórios',
      location: 'Santana, AP',
      metric: '+320%',
      metricLabel: 'Crescimento em avaliações 5 estrelas no Google',
      summary:
        'Instalação de displays acrílicos com NFC e QR Code no caixa e provadores, integrados ao catálogo de novidades e coleta de reviews instantânea.',
      quote:
        'O cliente aproxima o celular enquanto embalamos a compra e já deixa 5 estrelas no Google na mesma hora. Nossa autoridade na cidade disparou.',
      author: 'Renata Albuquerque',
      role: 'Gestora Comercial',
    },
  ] as CaseStudy[],
  stats: [
    { value: '+3h', label: 'Economizadas por dia no atendimento ao cliente' },
    { value: '-85%', label: 'Redução de dúvidas e mensagens repetitivas' },
    { value: '100%', label: 'Integrado diretamente ao WhatsApp do seu negócio' },
    { value: '0%', label: 'Taxa percentual ou comissão cobrada por pedidos' },
  ],
};
