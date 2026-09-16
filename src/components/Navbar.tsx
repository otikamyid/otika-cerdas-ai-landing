import { ArrowUpRight, Bot, Calculator, ChevronDown, Megaphone, Menu, MessageCircle, RefreshCw, X, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type FeatureLink = { label: string; href: string; description: string; icon: LucideIcon };

const mainLinks = [["Cara Kerja", "/#cara-kerja"], ["Klien", "/#testimonials"], ["Harga", "/#pricing"], ["FAQ", "/#faq"], ["Blog", "https://otika.biz.id/blog/"]];
const featureLinks: FeatureLink[] = [
  { label: "WhatsApp API", href: "/fitur/whatsapp-api", description: "Integrasi resmi untuk inbox tim, otomasi, dan AI Agent.", icon: MessageCircle },
  { label: "WhatsApp Coexistence", href: "/fitur/whatsapp-coexistence", description: "Nomor tetap bisa dipakai di aplikasi sambil terhubung ke API.", icon: RefreshCw },
  { label: "AI Agent", href: "/fitur/ai-agent", description: "AI yang belajar produk, SOP, dan gaya bicara bisnis Anda.", icon: Bot },
  { label: "Follow Up by AI", href: "/fitur/follow-up-ai", description: "Tindak lanjuti prospek secara kontekstual, bukan template kaku.", icon: RefreshCw },
  { label: "Broadcast WhatsApp", href: "/fitur/broadcast-whatsapp", description: "Campaign dan reminder terarah melalui template resmi Meta.", icon: Megaphone },
  { label: "Kalkulator Biaya WhatsApp", href: "/kalkulator-biaya-whatsapp", description: "Perkirakan biaya platform dan pesan WhatsApp Cloud API.", icon: Calculator },
];

const Navbar = ({ compact = false }: { compact?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setFeaturesOpen(false);
      setMobileFeaturesOpen(false);
      if (open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return <header className="v3-header"><nav className="v3-shell v3-nav" aria-label="Navigasi utama">
    <a href="/" className="v3-logo" aria-label="OTIKA beranda"><img src="/assets/otika-wordmark.png" alt="OTIKA" width="144" height="68" /></a>
    {!compact && <div className="v3-desktop-links">
      <a className="nav-link" href={mainLinks[0][1]}>{mainLinks[0][0]}</a>
      <div className={`v3-feature-menu${featuresOpen ? " is-open" : ""}`} onMouseEnter={() => setFeaturesOpen(true)} onMouseLeave={() => setFeaturesOpen(false)}>
        <button type="button" className="nav-link v3-feature-trigger" aria-expanded={featuresOpen} aria-controls="feature-mega-menu" onClick={() => setFeaturesOpen(value => !value)}>
          Fitur <ChevronDown size={15} />
        </button>
        <div id="feature-mega-menu" className="v3-mega-menu" onFocus={() => setFeaturesOpen(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFeaturesOpen(false); }}>
          <div className="v3-mega-intro">
            <span className="v3-small-label">FITUR OTIKA</span>
            <h2>Satu percakapan.<br />Banyak tenaga tambahan.</h2>
            <p>Pilih kemampuan yang paling dekat dengan pekerjaan tim Anda hari ini. Sisanya bisa menyusul saat bisnis makin sibuk.</p>
            <a href="/#features">Lihat gambaran lengkap <ArrowUpRight size={16} /></a>
          </div>
          <div className="v3-mega-grid">
            {featureLinks.map(({ label, href, description, icon: Icon }) => <a href={href} className="v3-mega-link" key={href} onClick={() => setFeaturesOpen(false)}>
              <span className="v3-mega-icon"><Icon size={19} /></span>
              <span><strong>{label}</strong><small>{description}</small></span>
              <ArrowUpRight className="v3-mega-arrow" size={16} />
            </a>)}
          </div>
        </div>
      </div>
      {mainLinks.slice(1).map(([label, href]) => <a className="nav-link" href={href} key={href}>{label}</a>)}
    </div>}
    <div className="v3-nav-actions"><a href="https://app.otika.biz.id" target="_blank" rel="noreferrer" className="btn-primary">Coba Gratis <ArrowUpRight size={16} /></a>{!compact && <button ref={toggle} type="button" className="v3-menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Tutup menu" : "Buka menu"}>{open ? <X /> : <Menu />}</button>}</div>
  </nav>{!compact && open && <nav id="mobile-menu" aria-label="Navigasi mobile" className="v3-mobile-links">
    <a href={mainLinks[0][1]} onClick={() => setOpen(false)}>{mainLinks[0][0]}<ArrowUpRight size={16} /></a>
    <button type="button" className="v3-mobile-feature-trigger" aria-expanded={mobileFeaturesOpen} aria-controls="mobile-feature-links" onClick={() => setMobileFeaturesOpen(value => !value)}>Fitur <ChevronDown size={17} /></button>
    {mobileFeaturesOpen && <div id="mobile-feature-links" className="v3-mobile-feature-links">{featureLinks.map(({ label, href, icon: Icon }) => <a href={href} key={href} onClick={() => setOpen(false)}><Icon size={17} /><span>{label}</span><ArrowUpRight size={15} /></a>)}</div>}
    {mainLinks.slice(1).map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}
  </nav>}</header>;
};
export default Navbar;
