import { independencePromoUrl } from "@/lib/site";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "otika-hut-ri-81-promo-closed";

const IndependencePromo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (window.sessionStorage.getItem(SESSION_KEY) === "true") return;

    const timer = window.setTimeout(() => setIsOpen(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePromo();
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closePromo = () => {
    window.sessionStorage.setItem(SESSION_KEY, "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const promoUrl = independencePromoUrl();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePromo();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-[32rem] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
      >
        <h2 id="promo-title" className="sr-only">Promo Kemerdekaan OTIKA</h2>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={closePromo}
          aria-label="Tutup promo"
          className="absolute right-2 top-2 z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-950/85 text-white shadow-lg transition hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <a
          href={promoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Ambil Promo Kemerdekaan OTIKA melalui WhatsApp"
          className="min-h-0 flex-1 bg-slate-100"
        >
          <img
            src="/assets/promo-hut-ri-81.jpg"
            alt="Promo Kemerdekaan OTIKA spesial HUT RI ke-81, mulai Rp81.000 per bulan"
            className="h-full max-h-[calc(100dvh-7.75rem)] w-full object-contain sm:max-h-[calc(100dvh-9.5rem)]"
            width="1122"
            height="1402"
          />
        </a>

        <div className="shrink-0 p-3 sm:p-4">
          <a
            href={promoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-5 py-3 text-center text-base font-extrabold tracking-wide text-white shadow-lg shadow-red-600/20 transition hover:from-red-700 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
          >
            AMBIL PROMO
          </a>
        </div>
      </section>
    </div>
  );
};

export default IndependencePromo;
