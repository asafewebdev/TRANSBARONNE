export const SITE = {
  name: "Trans Baronne",
  legalName: "TRANS BARONNE TRANSPORTES LTDA",
  description:
    "Transporte de cargas para todo o Brasil com base em Camaçari BA, atendimento direto e Garantia Minha Carga Segura.",
  url: "https://transbaronne.com.br",
  whatsapp: "5571999990385",
  whatsappBaseUrl: "https://wa.me/5571999990385",
  whatsappDisplay: "(71) 9 9999-0385",
  instagram: "@grupo_baronne",
  instagramUrl: "https://www.instagram.com/grupo_baronne/",
  cnpj: "44.473.554/0001-81",
  logo: {
    full: "/images/logo-transbaronne.png",
    wordmark: "/images/logo-transbaronne-wordmark.png",
    alt: "Logo da Trans Baronne",
  },
  title:
    "Transportadora em Camaçari BA | Transporte de Cargas para todo o Brasil | Trans Baronne",
  metaDescription:
    "A Trans Baronne faz transporte de cargas para todo o Brasil com base em Camaçari BA. Lotação, fracionado e cargas químicas com a Garantia Minha Carga Segura.",
  ogImage:
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&h=630&q=82",
} as const;

export const SCHEMA_NAP = {
  name: "TRANS BARONNE TRANSPORTES LTDA",
  streetAddress: "Rua Serra Verde, Parque Real",
  addressLocality: "Camaçari",
  addressRegion: "BA",
  postalCode: "42813-132",
  addressCountry: "BR",
  telephone: "+55-71-99999-0385",
  cnpj: "44.473.554/0001-81",
  instagram: "@grupo_baronne",
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Transporte", href: "#sobre" },
  { label: "Tipos de Carga", href: "#tipos-de-carga" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Números", href: "#numeros" },
  { label: "Fretes", href: "#fretes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

export const WHATSAPP_MESSAGES = {
  nav: "Olá, quero falar com a Trans Baronne sobre transporte de cargas.",
  hero:
    "Olá, quero solicitar um frete com a Trans Baronne para transporte de cargas.",
  quote:
    "Olá, quero fazer uma cotação de transporte de carga com a Trans Baronne.",
  insurance:
    "Olá, quero entender a Garantia Minha Carga Segura para meu frete.",
  process:
    "Olá, quero montar uma cotação de frete com coleta e entrega acompanhadas.",
  final:
    "Olá, quero solicitar um frete pelo WhatsApp com a Trans Baronne.",
  floating:
    "Olá, quero fazer minha cotação com a Trans Baronne.",
} as const;

export function whatsappUrl(message: string): string {
  return `${SITE.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const TRUST_POINTS = [
  "Atuação nacional",
  "Garantia Minha Carga Segura",
  "Base em Camaçari BA",
  "Atendimento direto",
] as const;

export const CARGO_TYPES = [
  {
    title: "Lotação",
    description:
      "Fretes dedicados para cargas que precisam de rota direta, planejamento preciso e capacidade exclusiva.",
  },
  {
    title: "Fracionado",
    description:
      "Envios menores com organização inteligente, acompanhamento próximo e alcance nacional.",
  },
  {
    title: "Químico",
    description:
      "Operação cuidadosa para cargas químicas, com atenção documental, segurança e condução responsável.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Envie os dados da carga",
    description:
      "Informe origem, destino, volume, peso, prazos e cuidados necessários.",
  },
  {
    number: "02",
    title: "Receba sua cotação",
    description:
      "A equipe calcula a melhor rota e apresenta uma proposta objetiva.",
  },
  {
    number: "03",
    title: "Coleta agendada",
    description:
      "O embarque é combinado com clareza para proteger sua agenda e sua operação.",
  },
  {
    number: "04",
    title: "Entrega com acompanhamento",
    description:
      "Sua carga segue monitorada do ponto de partida até o destino final.",
  },
] as const;

export const STATS = [
  { value: 5, suffix: " ANOS", label: "de mercado" },
  { value: 600, prefix: "+", label: "entregas realizadas" },
  { value: 30, prefix: "+", label: "clientes ativos" },
  { value: "TODO O BRASIL", label: "atendido" },
] as const;

export const FREIGHT_ROUTES = [
  {
    route: "Camaçari BA para São Paulo SP",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80",
    alt: "Trans Baronne em entrega de carga de Camaçari BA para São Paulo SP",
  },
  {
    route: "Salvador BA para Recife PE",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    alt: "Trans Baronne em transporte de cargas de Salvador BA para Recife PE",
  },
  {
    route: "Feira de Santana BA para Brasília DF",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80",
    alt: "Trans Baronne em frete concluído de Feira de Santana BA para Brasília DF",
  },
  {
    route: "Camaçari BA para Rio de Janeiro RJ",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80",
    alt: "Trans Baronne em transporte rodoviário de carga de Camaçari BA para Rio de Janeiro RJ",
  },
  {
    route: "Salvador BA para Fortaleza CE",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80",
    alt: "Trans Baronne em entrega nacional de cargas de Salvador BA para Fortaleza CE",
  },
] as const;

export const PAGE_IMAGES = {
  hero: {
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=84",
    alt: "Caminhão em rodovia representando transporte de cargas da Trans Baronne para todo o Brasil",
  },
  numbers: {
    src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1800&q=80",
    alt: "Operação de cargas e logística nacional usada como referência visual da Trans Baronne",
  },
} as const;

export const FAQ_ITEMS = [
  {
    question: "A Trans Baronne atende quais cidades?",
    answer:
      "A Trans Baronne realiza transporte de cargas para todo o Brasil. A operação parte da base em Camaçari BA e organiza rotas nacionais conforme origem, destino, tipo de carga e prazo combinado.",
  },
  {
    question: "Como funciona a Garantia Minha Carga Segura?",
    answer:
      "A Garantia Minha Carga Segura cobre a carga durante todo o trajeto, da origem ao destino. Antes do embarque, a equipe confirma os dados do frete e orienta os cuidados necessários para manter a operação protegida.",
  },
  {
    question: "Qual é o prazo médio de entrega?",
    answer:
      "O prazo depende da rota, do tipo de carga, do volume transportado e da janela de coleta. Na cotação, a Trans Baronne informa uma previsão prática para que sua equipe possa planejar recebimento e operação.",
  },
  {
    question: "Vocês emitem nota fiscal e CT-e?",
    answer:
      "Sim. A operação trabalha com documentação fiscal e emissão de CT-e quando aplicável ao frete contratado. Ao solicitar a cotação, envie os dados da carga e da empresa para a equipe orientar o processo correto.",
  },
  {
    question: "Como faço para pedir uma cotação?",
    answer:
      "Clique em qualquer botão de WhatsApp da página e envie origem, destino, tipo de carga, peso, volume, prazo desejado e dados para contato. Com essas informações, a equipe monta uma proposta de frete objetiva.",
  },
] as const;
