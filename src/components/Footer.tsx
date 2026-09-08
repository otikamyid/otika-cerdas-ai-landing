import { site, consultationUrl } from "@/lib/site";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => <footer className="v3-footer text-white">
  <div className="container mx-auto px-4 py-14 sm:px-6 lg:px-8">
    <p className="v3-footer-signoff">Bisnis Anda jalan.<br /><span>OTIKA bantu percakapannya.</span></p>
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
      <div className="md:col-span-2">
        <a href="/" className="inline-flex items-center" aria-label="OTIKA beranda">
          <img src="/assets/otika-wordmark-dark.png" alt="OTIKA" className="h-auto w-40 object-contain sm:w-44" width="176" height="83" loading="lazy" />
        </a>
        <p className="mt-4 max-w-md leading-relaxed text-slate-400">Customize AI Agent untuk membantu bisnis melayani pelanggan, menyaring prospek, dan menjaga percakapan tetap berjalan melalui WhatsApp dan Instagram.</p>
        <div className="mt-5 flex gap-4">
          <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram Otika"><Instagram className="h-5 w-5" /></a>
          <a href={`mailto:${site.email}`} aria-label="Email Otika"><Mail className="h-5 w-5" /></a>
          <a href={consultationUrl("footer")} target="_blank" rel="noreferrer" aria-label="WhatsApp Otika"><MessageCircle className="h-5 w-5" /></a>
        </div>
      </div>
      <div><h2 className="text-base font-semibold">Fitur</h2><ul className="mt-4 space-y-3 text-sm text-slate-400"><li><a href="/fitur/whatsapp-api">WhatsApp API</a></li><li><a href="/fitur/whatsapp-coexistence">WhatsApp Coexistence</a></li><li><a href="/fitur/ai-agent">AI Agent</a></li><li><a href="/fitur/follow-up-ai">Follow Up by AI</a></li><li><a href="/fitur/broadcast-whatsapp">Broadcast</a></li><li><a href="/kalkulator-biaya-whatsapp">Kalkulator Biaya WhatsApp</a></li></ul></div>
      <div><h2 className="text-base font-semibold">Jelajahi</h2><ul className="mt-4 space-y-3 text-sm text-slate-400"><li><a href="/#features">Keunggulan</a></li><li><a href="/#channels">Channel</a></li><li><a href="/#pricing">Harga</a></li><li><a href="/#testimonials">Klien & Testimoni</a></li><li><a href="https://otika.biz.id/blog/">Blog</a></li></ul></div>
      <div><h2 className="text-base font-semibold">Perusahaan</h2><ul className="mt-4 space-y-3 text-sm text-slate-400"><li><a href="/kebijakan-privasi">Kebijakan Privasi</a></li><li><a href="/syarat-ketentuan">Syarat & Ketentuan</a></li><li><a href="/kebijakan-penggunaan">Kebijakan Penggunaan</a></li><li><a href={`mailto:${site.email}`}>{site.email}</a></li></ul></div>
    </div>
    <div className="mt-12 border-t border-slate-800 pt-7 text-sm text-slate-500">© {new Date().getFullYear()} {site.legalName}. Seluruh hak cipta dilindungi.</div>
  </div>
</footer>;

export default Footer;
