"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Boxes,
  CalendarCheck,
  ChevronDown,
  ClipboardList,
  FileCheck2,
  FlaskConical,
  Instagram,
  MapPin,
  MessageCircle,
  PackageCheck,
  Route,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  CARGO_TYPES,
  FAQ_ITEMS,
  FREIGHT_ROUTES,
  NAV_LINKS,
  PAGE_IMAGES,
  PROCESS_STEPS,
  SCHEMA_NAP,
  SITE,
  STATS,
  TRUST_POINTS,
  WHATSAPP_MESSAGES,
  whatsappUrl,
} from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const viewportReveal = { once: true, amount: 0.18 } as const;

const trustIcons = [Route, ShieldCheck, MapPin, MessageCircle] as const;
const cargoIcons = [Truck, Boxes, FlaskConical] as const;
const processIcons = [ClipboardList, FileCheck2, CalendarCheck, PackageCheck] as const;
const freightCards = [...FREIGHT_ROUTES, ...FREIGHT_ROUTES];

export default function HomePage() {
  return (
    <main id="conteudo-principal" className="min-h-screen bg-ink text-white">
      <HeroSection />
      <CredibilityBar />
      <AboutSection />
      <CargoTypesSection />
      <GuaranteeSection />
      <ProcessSection />
      <NumbersSection />
      <FreightsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
}

function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[calc(100svh-32px)] items-center overflow-hidden px-5 pb-16 pt-24 sm:px-6 lg:px-10"
    >
      <Image
        src={PAGE_IMAGES.hero.src}
        alt={PAGE_IMAGES.hero.alt}
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgb(10_10_10_/_0.94),rgb(10_10_10_/_0.70)_48%,rgb(10_10_10_/_0.40))]" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

      <motion.div
        className="relative z-20 mx-auto grid w-full max-w-content gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(240px,0.22fr)] lg:items-end"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="max-w-3xl">
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.36, ease: "easeOut" }}
            className="text-sm font-extrabold uppercase text-accent"
          >
            TRANSPORTE DE CARGAS PARA TODO O BRASIL
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-4 font-heading text-5xl font-black leading-[0.9] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Transporte de cargas para o Brasil inteiro
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-5 max-w-2xl text-base font-medium text-white/80 sm:text-lg"
          >
            Uma transportadora em Camaçari BA com atendimento direto, rotas nacionais e compromisso claro do primeiro contato até a entrega.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <WhatsAppButton href={whatsappUrl(WHATSAPP_MESSAGES.hero)}>
              Solicitar frete
            </WhatsAppButton>
            <a
              href="#como-funciona"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-base font-extrabold uppercase text-white transition hover:border-lime hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              Ver como funciona
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.42, ease: "easeOut" }}
          className="flex lg:justify-end"
        >
          {/* TODO: Substituir por foto real do caminhão da frota Trans Baronne. */}
          <span className="inline-flex rounded-full border border-dashed border-lime/80 bg-ink/80 px-3 py-2 text-xs font-bold italic uppercase text-lime shadow-glow">
            [ FOTO REAL DO CAMINHÃO ]
          </span>
        </motion.div>
      </motion.div>

      <a
        href="#sobre"
        aria-label="Ir para a próxima seção"
        className="absolute bottom-5 left-1/2 z-20 inline-flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-lime hover:text-lime"
      >
        <ArrowDown aria-hidden="true" className="h-5 w-5" />
      </a>
    </section>
  );
}

function CredibilityBar() {
  return (
    <section className="border-y border-border bg-surface px-5 py-5 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_POINTS.map((point, index) => {
          const Icon = trustIcons[index];
          return (
            <motion.div
              key={point}
              className="flex min-h-[58px] items-center gap-3 rounded-2xl border border-border bg-ink/40 px-4 py-3"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.28, delay: index * 0.04 }}
            >
              <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-lime" />
              <span className="text-sm font-bold uppercase text-white">
                {point}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <SectionShell id="sobre">
      <motion.div
        className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
        variants={stagger}
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.36, ease: "easeOut" }}>
          <SectionLabel>QUEM SOMOS</SectionLabel>
          <h2 className="mt-3 max-w-xl font-heading text-4xl font-black leading-none text-white sm:text-5xl md:text-6xl">
            Transporte com base firme e alcance nacional.
          </h2>
        </motion.div>
        <motion.div
          className="space-y-5 text-base text-muted sm:text-lg"
          variants={fadeUp}
          transition={{ duration: 0.36, ease: "easeOut" }}
        >
          <p>
            A Trans Baronne opera transporte de cargas a partir de Camaçari BA para empresas que precisam de clareza, velocidade de resposta e cuidado real na estrada.
          </p>
          <p>
            Cada frete é tratado como uma operação própria, com comunicação direta, planejamento de rota e atenção ao que protege a carga, o prazo e a confiança de quem contrata.
          </p>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

function CargoTypesSection() {
  return (
    <SectionShell id="tipos-de-carga" className="bg-surface/60">
      <motion.div className="max-w-3xl" variants={fadeUp}>
        <SectionLabel>TIPOS DE CARGA</SectionLabel>
        <h2 className="mt-3 font-heading text-4xl font-black leading-none text-white sm:text-5xl md:text-6xl">
          Fretes pensados para a carga certa.
        </h2>
      </motion.div>

      <motion.div className="mt-10 grid gap-4 md:grid-cols-3" variants={stagger}>
        {CARGO_TYPES.map((cargo, index) => {
          const Icon = cargoIcons[index];
          return (
            <motion.article
              key={cargo.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-[0_18px_60px_rgb(0_0_0_/_0.24)]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.32, delay: index * 0.06 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime text-ink shadow-glow">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-heading text-3xl font-black leading-none text-white">
                {cargo.title}
              </h3>
              <p className="mt-4 text-base text-muted">{cargo.description}</p>
            </motion.article>
          );
        })}
      </motion.div>

      <motion.div
        className="mt-8 rounded-2xl border border-lime/25 border-l-4 border-l-lime bg-ink p-5 sm:p-6"
        variants={fadeUp}
      >
        <p className="text-base font-semibold text-white sm:text-lg">
          Não encontrou seu tipo de carga?{" "}
          <strong className="font-extrabold text-lime">
            Transportamos todo tipo de carga.
          </strong>{" "}
          Fale com a gente e monte sua cotação.
        </p>
      </motion.div>

      <motion.div className="mt-7" variants={fadeUp}>
        <WhatsAppButton href={whatsappUrl(WHATSAPP_MESSAGES.quote)}>
          Faça Sua Cotação!
        </WhatsAppButton>
      </motion.div>
    </SectionShell>
  );
}

function GuaranteeSection() {
  return (
    <SectionShell id="garantia">
      <motion.div
        className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <SectionLabel>GARANTIA MINHA CARGA SEGURA</SectionLabel>
          <h2 className="mt-3 font-heading text-4xl font-black leading-none text-white sm:text-5xl md:text-6xl">
            Sua carga protegida do embarque até a entrega.
          </h2>
          <p className="mt-5 text-base text-muted sm:text-lg">
            Toda carga embarcada com a Trans Baronne segue coberta por seguro durante a jornada completa, da origem ao destino. É uma camada objetiva de confiança para quem não pode expor mercadoria, produção ou cliente final a riscos evitáveis.
          </p>
          <div className="mt-7">
            <WhatsAppButton href={whatsappUrl(WHATSAPP_MESSAGES.insurance)}>
              Falar sobre a garantia
            </WhatsAppButton>
          </div>
        </motion.div>

        <motion.article
          className="relative overflow-hidden rounded-2xl border border-lime/40 bg-surface p-6 shadow-glow-soft sm:p-8"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.36, ease: "easeOut" }}
        >
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-lime" />
          <ShieldCheck aria-hidden="true" className="h-16 w-16 text-lime" />
          <h3 className="mt-7 bg-transparent font-heading text-4xl font-black leading-none text-white [text-shadow:none]">
            Garantia para o caminho inteiro
          </h3>
          <p className="mt-5 text-base text-muted sm:text-lg">
            O frete não termina quando o caminhão sai da origem. A operação acompanha cada etapa para que a carga chegue com responsabilidade, documentação alinhada e cobertura durante o percurso contratado.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {["Origem", "Rota", "Destino"].map((item) => (
              <span
                key={item}
                className="inline-flex min-h-[36px] items-center rounded-full border border-border bg-ink px-4 text-sm font-bold uppercase text-lime"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.article>
      </motion.div>
    </SectionShell>
  );
}

function ProcessSection() {
  return (
    <SectionShell id="como-funciona" className="bg-surface/60">
      <motion.div className="max-w-3xl" variants={fadeUp}>
        <SectionLabel>COMO FUNCIONA</SectionLabel>
        <h2 className="mt-3 font-heading text-4xl font-black leading-none text-white sm:text-5xl md:text-6xl">
          Da cotação à entrega, sem ruído.
        </h2>
      </motion.div>

      <motion.div className="relative mt-12" variants={fadeUp}>
        <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-border md:block" />
        <motion.div className="grid gap-5 md:grid-cols-4" variants={stagger}>
          {PROCESS_STEPS.map((step, index) => {
            const Icon = processIcons[index];
            return (
              <motion.article
                key={step.number}
                className="relative rounded-2xl border border-border bg-ink p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex items-center gap-4 md:block">
                  <span className="relative z-10 inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-lime bg-surface font-heading text-3xl font-black text-lime shadow-glow">
                    {step.number}
                  </span>
                  <Icon
                    aria-hidden="true"
                    className="h-8 w-8 shrink-0 text-lime md:mt-7"
                  />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-black leading-none text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-base text-muted">{step.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div className="mt-8" variants={fadeUp}>
        <WhatsAppButton href={whatsappUrl(WHATSAPP_MESSAGES.process)}>
          Faça Sua Cotação!
        </WhatsAppButton>
      </motion.div>
    </SectionShell>
  );
}

function NumbersSection() {
  return (
    <section
      id="numeros"
      className="relative isolate overflow-hidden px-5 py-14 sm:px-6 md:py-24 lg:px-10"
    >
      <Image
        src={PAGE_IMAGES.numbers.src}
        alt={PAGE_IMAGES.numbers.alt}
        fill
        loading="lazy"
        sizes="100vw"
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgb(0_0_0_/_0.96),rgb(0_0_0_/_0.90)_50%,rgb(0_0_0_/_0.96))]" />
      <div className="absolute inset-0 z-10 bg-ink/40" />
      <motion.div
        className="relative z-20 mx-auto max-w-content"
        initial="hidden"
        whileInView="visible"
        viewport={viewportReveal}
        variants={stagger}
      >
        <motion.div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start" variants={stagger}>
          <motion.div className="max-w-3xl" variants={fadeUp}>
            <SectionLabel>TRANS BARONNE EM NÚMEROS</SectionLabel>
            <h2 className="mt-3 font-heading text-4xl font-black leading-none text-white sm:text-5xl md:text-6xl">
              Prova de estrada, cliente e constância.
            </h2>
          </motion.div>
          {/* TODO: Adicionar foto real de operação da Trans Baronne nesta seção. */}
          <motion.span
            className="w-fit rounded-full border border-dashed border-lime/80 bg-ink/95 px-3 py-2 text-xs font-bold italic uppercase text-lime shadow-[0_0_24px_rgb(0_0_0_/_0.40)]"
            variants={fadeUp}
          >
            [ FOTO REAL A ADICIONAR ]
          </motion.span>
        </motion.div>

        <motion.div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" variants={stagger}>
          {STATS.map((stat, index) => (
            <motion.article
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-ink/95 p-5 shadow-[0_18px_60px_rgb(0_0_0_/_0.32)] backdrop-blur"
              variants={fadeUp}
              transition={{ duration: 0.32, delay: index * 0.03, ease: "easeOut" }}
            >
              <div className="font-heading text-5xl font-black leading-none text-lime">
                {typeof stat.value === "number" ? (
                  <CountUpNumber
                    value={stat.value}
                    prefix={"prefix" in stat ? stat.prefix : ""}
                    suffix={"suffix" in stat ? stat.suffix : ""}
                  />
                ) : (
                  stat.value
                )}
              </div>
              <p className="mt-3 text-base font-bold uppercase text-white">
                {stat.label}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function FreightsSection() {
  return (
    <SectionShell id="fretes" className="overflow-hidden bg-ink">
      <motion.div className="max-w-3xl" variants={fadeUp}>
        <SectionLabel>FRETES CONCLUÍDOS</SectionLabel>
        <h2 className="mt-3 font-heading text-4xl font-black leading-none text-white sm:text-5xl md:text-6xl">
          Rotas reais para cargas que precisam chegar.
        </h2>
        <p className="mt-5 text-base text-muted sm:text-lg">
          A cada frete, a Trans Baronne transforma distância em operação combinada, registrada e concluída com atenção ao cliente.
        </p>
      </motion.div>

      <motion.div className="relative mt-10 overflow-hidden rounded-2xl" variants={fadeUp}>
        <div className="freight-track flex w-max gap-4 will-change-transform">
          {freightCards.map((freight, index) => (
            <article
              key={`${freight.route}-${index}`}
              className="relative h-[310px] w-[78vw] max-w-[330px] shrink-0 overflow-hidden rounded-2xl border border-border bg-surface sm:w-[330px]"
            >
              <Image
                src={freight.image}
                alt={freight.alt}
                fill
                loading="lazy"
                sizes="(min-width: 640px) 330px, 78vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(10_10_10_/_0.08),rgb(10_10_10_/_0.90))]" />
              <div className="absolute left-4 top-4 rounded-full bg-lime px-3 py-1 text-xs font-black uppercase text-ink">
                FRETE CONCLUÍDO
              </div>
              <div className="absolute right-4 top-4 flex h-8 w-24 items-center justify-center rounded-full bg-ink/90 px-2">
                <Image
                  src={SITE.logo.wordmark}
                  alt="Logo Trans Baronne no frete concluído"
                  width={720}
                  height={82}
                  loading="lazy"
                  sizes="96px"
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-heading text-3xl font-black leading-none text-white">
                  {freight.route}
                </p>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionShell id="faq" className="bg-surface/60">
      <motion.div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]" variants={stagger}>
        <motion.div variants={fadeUp}>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-3 font-heading text-4xl font-black leading-none text-white sm:text-5xl md:text-6xl">
            Tire suas dúvidas.
          </h2>
        </motion.div>
        <motion.div className="space-y-3" variants={stagger}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <motion.article
                key={item.question}
                className="overflow-hidden rounded-2xl border border-border bg-ink"
                variants={fadeUp}
                transition={{ duration: 0.3, delay: index * 0.03, ease: "easeOut" }}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="flex min-h-[60px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-extrabold text-white transition hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-lime"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180 text-lime" : "text-white/70"}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-base text-muted">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

function FinalCTASection() {
  return (
    <section
      id="contato"
      className="bg-[linear-gradient(135deg,#063016,#15803d_52%,#0a0a0a)] px-5 py-16 sm:px-6 md:py-24 lg:px-10"
    >
      <motion.div
        className="mx-auto max-w-content"
        initial="hidden"
        whileInView="visible"
        viewport={viewportReveal}
        variants={stagger}
      >
        <motion.div className="max-w-3xl" variants={fadeUp}>
          <SectionLabel className="text-white">CONTATO</SectionLabel>
          <h2 className="mt-3 font-heading text-4xl font-black leading-none text-white sm:text-5xl md:text-6xl">
            Mova sua carga com a Trans Baronne agora.
          </h2>
          <p className="mt-5 text-base font-medium text-white/80 sm:text-lg">
            Envie os dados do frete e receba uma cotação direta para sua próxima rota nacional.
          </p>
        </motion.div>
        <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" variants={fadeUp}>
          <WhatsAppButton
            href={whatsappUrl(WHATSAPP_MESSAGES.final)}
            className="bg-white text-ink hover:bg-lime"
          >
            Solicitar frete pelo WhatsApp
          </WhatsAppButton>
          <a
            href={SITE.instagramUrl}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/50 px-5 py-3 text-base font-extrabold uppercase text-white transition hover:border-lime hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Instagram aria-hidden="true" className="h-5 w-5" />
            Instagram
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-border bg-ink px-5 py-12 sm:px-6 lg:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={viewportReveal}
      variants={stagger}
    >
      <motion.div className="mx-auto grid max-w-content gap-10 md:grid-cols-[1.2fr_0.8fr_1fr_1.1fr]" variants={stagger}>
        <motion.section variants={fadeUp}>
          <Image
            src={SITE.logo.full}
            alt={SITE.logo.alt}
            width={720}
            height={425}
            loading="lazy"
            sizes="(min-width: 768px) 240px, 210px"
            className="h-auto w-[210px] max-w-full md:w-[240px]"
          />
          <p className="mt-3 max-w-xs text-base text-muted">
            Transporte nacional de cargas com base em Camaçari BA e atendimento direto para empresas.
          </p>
        </motion.section>

        <FooterColumn title="Serviços">
          <FooterText>Lotação</FooterText>
          <FooterText>Fracionado</FooterText>
          <FooterText>Químico</FooterText>
          <FooterText>Seguro de carga</FooterText>
        </FooterColumn>

        <FooterColumn title="Links rápidos">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex min-h-[44px] items-center text-sm font-semibold text-muted transition hover:text-lime"
            >
              {link.label}
            </a>
          ))}
        </FooterColumn>

        <FooterColumn title="Contato">
          <address className="space-y-2 text-sm not-italic text-muted">
            <p>{SCHEMA_NAP.name}</p>
            <p>{SCHEMA_NAP.streetAddress}</p>
            <p>
              {SCHEMA_NAP.addressLocality} {SCHEMA_NAP.addressRegion}, CEP{" "}
              {SCHEMA_NAP.postalCode}
            </p>
            <p>WhatsApp {SITE.whatsappDisplay}</p>
            <p>CNPJ {SCHEMA_NAP.cnpj}</p>
            <a
              href={SITE.instagramUrl}
              className="flex min-h-[44px] items-center text-lime transition hover:text-white"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram {SCHEMA_NAP.instagram}
            </a>
          </address>
        </FooterColumn>
      </motion.div>
      <motion.div className="mx-auto mt-10 max-w-content border-t border-border pt-6 text-sm text-muted" variants={fadeUp}>
        © {year} {SITE.legalName}. Todos os direitos reservados.
      </motion.div>
    </motion.footer>
  );
}

function FloatingWhatsAppButton() {
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const watchedElements = Array.from(
      document.querySelectorAll("[data-contextual-whatsapp='true'], #contato, footer"),
    );

    if (watchedElements.length === 0) {
      return;
    }

    const visibleElements = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleElements.add(entry.target);
          } else {
            visibleElements.delete(entry.target);
          }
        });
        setShouldHide(visibleElements.size > 0);
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.18 },
    );

    watchedElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={whatsappUrl(WHATSAPP_MESSAGES.floating)}
      aria-label="Faça sua cotação pelo WhatsApp"
      className={`fixed bottom-5 right-4 z-[70] inline-flex min-h-[52px] min-w-[52px] items-center justify-center gap-2 rounded-full bg-primary px-4 text-ink shadow-glow transition duration-300 hover:bg-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime sm:bottom-6 sm:right-6 sm:px-5 ${shouldHide ? "pointer-events-none translate-y-8 opacity-0" : "translate-y-0 opacity-100"}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-extrabold uppercase sm:inline">
        Faça sua cotação
      </span>
    </a>
  );
}

function SectionShell({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id: string;
}) {
  return (
    <motion.section
      id={id}
      className={`px-5 py-14 sm:px-6 md:py-24 lg:px-10 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportReveal}
      variants={stagger}
    >
      <div className="mx-auto max-w-content">{children}</div>
    </motion.section>
  );
}

function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.p
      className={`text-sm font-extrabold uppercase text-accent ${className}`}
      variants={fadeUp}
      transition={{ duration: 0.34, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  );
}

function WhatsAppButton({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <a
      href={href}
      data-contextual-whatsapp="true"
      className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-extrabold uppercase text-ink shadow-glow transition hover:bg-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime ${className}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

function CountUpNumber({
  prefix = "",
  suffix = "",
  value,
}: {
  prefix?: string;
  suffix?: string;
  value: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 850;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {current.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

function FooterColumn({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <section>
      <h3 className="font-heading text-2xl font-black uppercase text-white">
        {title}
      </h3>
      <div className="mt-4 space-y-2">{children}</div>
    </section>
  );
}

function FooterText({ children }: { children: ReactNode }) {
  return <p className="text-sm font-semibold text-muted">{children}</p>;
}
