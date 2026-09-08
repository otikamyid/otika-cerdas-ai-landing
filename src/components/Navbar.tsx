import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [["Cara Kerja", "/#cara-kerja"], ["Fitur", "/#features"], ["Klien", "/#testimonials"], ["Harga", "/#pricing"], ["FAQ", "/#faq"], ["Blog", "https://otika.biz.id/blog/"]];

const Navbar = ({ compact = false }: { compact?: boolean }) => {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return <header className="v3-header"><nav className="v3-shell v3-nav" aria-label="Navigasi utama">
    <a href="/" className="v3-logo" aria-label="OTIKA beranda"><img src="/assets/otika-wordmark.png" alt="OTIKA" width="144" height="68" /></a>
    {!compact && <div className="v3-desktop-links">{links.map(([label, href]) => <a className="nav-link" href={href} key={href}>{label}</a>)}</div>}
    <div className="v3-nav-actions"><a href="https://app.otika.biz.id" target="_blank" rel="noreferrer" className="btn-primary">Coba Gratis <ArrowUpRight size={16} /></a>{!compact && <button ref={toggle} type="button" className="v3-menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Tutup menu" : "Buka menu"}>{open ? <X /> : <Menu />}</button>}</div>
  </nav>{!compact && open && <nav id="mobile-menu" aria-label="Navigasi mobile" className="v3-mobile-links">{links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}</nav>}</header>;
};
export default Navbar;
