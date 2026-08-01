import { site, consultationUrl } from "@/lib/site";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => <footer className="bg-slate-950 text-white">
  <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
    <div className="grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <a href="/" className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2" aria-label="OTIKA beranda">
          <img src="/assets/otika-logo.png" alt="" className="h-10 w-10 scale-150 object-contain" width="40" height="40" loading="lazy" />
          <span className="text-xl font-extrabold text-primary">OTIKA</span>
        </a>
        <p className="mt-4 max-w-md leading-relaxed text-slate-400">Customize AI Agent untuk membantu bisnis melayani pelanggan, menyaring prospek, dan menjaga percakapan tetap berjalan melalui WhatsApp dan Instagram.</p>
        <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-slate-800 bg-white px-3 py-2 text-slate-950">
          <img src="/assets/meta-tech-provider.png" alt="Meta Tech Provider" className="h-9 w-auto" width="77" height="45" loading="lazy" />
          <span className="text-xs font-semibold">Resmi menjadi Meta Tech Provider</span>
        </div>
        <div className="mt-5 flex gap-4">
          <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram Otika"><Instagram className="h-5 w-5" /></a>
          <a href={`mailto:${site.email}`} aria-label="Email Otika"><Mail className="h-5 w-5" /></a>
          <a href={consultationUrl("footer")} target="_blank" rel="noreferrer" aria-label="WhatsApp Otika"><MessageCircle className="h-5 w-5" /></a>
        </div>
      </div>
      <div><h2 className="text-base font-semibold">Jelajahi</h2><ul className="mt-4 space-y-3 text-sm text-slate-400"><li><a href="/#features">Fitur</a></li><li><a href="/#channels">Channel</a></li><li><a href="/#pricing">Harga</a></li><li><a href="/#testimonials">Klien & Testimoni</a></li></ul></div>
      <div><h2 className="text-base font-semibold">Perusahaan</h2><ul className="mt-4 space-y-3 text-sm text-slate-400"><li><a href="/kebijakan-privasi">Kebijakan Privasi</a></li><li><a href="/syarat-ketentuan">Syarat & Ketentuan</a></li><li><a href="/kebijakan-penggunaan">Kebijakan Penggunaan</a></li><li><a href={`mailto:${site.email}`}>{site.email}</a></li></ul></div>
    </div>
    <div className="mt-12 border-t border-slate-800 pt-7 text-sm text-slate-500">© {new Date().getFullYear()} {site.legalName}. Seluruh hak cipta dilindungi.</div>
  </div>
</footer>;

export default Footer;
