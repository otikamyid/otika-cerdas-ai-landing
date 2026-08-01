import { consultationUrl } from "@/lib/site";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Cara Kerja", "/#cara-kerja"], ["Fitur", "/#features"], ["Klien", "/#testimonials"], ["Harga", "/#pricing"], ["FAQ", "/#faq"],
];

const Navbar = ({ compact = false }: { compact?: boolean }) => {
  const [open, setOpen] = useState(false);
  return <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
    <div className="container mx-auto flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">
      <a href="/" className="flex items-center gap-2" aria-label="OTIKA beranda">
        <img src="/assets/otika-logo.png" alt="" className="h-11 w-11 scale-150 object-contain" width="44" height="44" />
        <span className="text-xl font-extrabold tracking-tight text-primary">OTIKA</span>
      </a>
      {!compact && <div className="hidden items-center gap-1 md:flex">
        {links.map(([label, href]) => <a className="nav-link" href={href} key={href}>{label}</a>)}
      </div>}
      <a href={consultationUrl("navbar")} target="_blank" rel="noreferrer" className="btn-primary hidden md:inline-flex">Konsultasi Gratis</a>
      {!compact && <button className="rounded-lg p-2 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Buka menu">{open ? <X /> : <Menu />}</button>}
    </div>
    {open && <div className="border-t bg-white p-4 md:hidden">
      {links.map(([label, href]) => <a className="block rounded-lg px-3 py-3 font-medium text-slate-700" href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a href={consultationUrl("menu mobile")} target="_blank" rel="noreferrer" className="btn-primary mt-3 w-full">Konsultasi Gratis</a>
    </div>}
  </nav>;
};

export default Navbar;
