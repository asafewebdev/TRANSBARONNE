"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { NAV_LINKS, SITE, WHATSAPP_MESSAGES, whatsappUrl } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const headerClass =
    isScrolled || isOpen
      ? "border-white/10 bg-ink/95 shadow-[0_16px_50px_rgb(0_0_0_/_0.34)] backdrop-blur-xl"
      : "border-transparent bg-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${headerClass}`}
    >
      <div className="mx-auto flex min-h-[72px] max-w-content items-center justify-between px-5 sm:px-6 lg:px-10">
        <a
          href="#inicio"
          className="group relative inline-flex min-h-[44px] w-[214px] items-center overflow-visible sm:w-[246px]"
          aria-label={`${SITE.name} página inicial`}
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={SITE.logo.wordmark}
            alt={SITE.logo.alt}
            width={720}
            height={82}
            sizes="(min-width: 640px) 246px, 214px"
            className="block h-auto w-full max-w-full object-contain transition duration-200 group-hover:drop-shadow-[0_0_12px_rgb(126_211_33_/_0.50)]"
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center text-sm font-bold uppercase text-white/80 transition hover:text-lime"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappUrl(WHATSAPP_MESSAGES.nav)}
          className="hidden min-h-[44px] items-center gap-2 rounded-full bg-primary px-5 text-sm font-extrabold uppercase text-ink shadow-[0_0_28px_rgb(126_211_33_/_0.34)] transition hover:bg-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime lg:inline-flex"
          rel="noopener noreferrer"
          target="_blank"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Fale Conosco
        </a>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/20 text-white transition hover:border-lime hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime lg:hidden"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            id="mobile-navigation"
            aria-label="Navegação principal mobile"
            className="fixed inset-0 top-[72px] z-40 bg-ink px-5 py-6 lg:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex min-h-[52px] items-center border-b border-white/10 text-lg font-extrabold uppercase text-white transition hover:text-lime"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.nav)}
              className="mt-7 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-base font-extrabold uppercase text-ink shadow-[0_0_28px_rgb(126_211_33_/_0.32)] transition hover:bg-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => setIsOpen(false)}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Fale Conosco
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
