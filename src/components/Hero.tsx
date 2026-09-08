import { ArrowDown, ArrowUpRight, Check, CheckCheck, Instagram, Sparkles, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { consultationUrl } from "@/lib/site";

const conversations = [
  { label: "Otomotif", name: "Marshell", initial: "M", question: "Halo kak, bisa booking service motor?", reply: "Bisa, Kak! Mau service rutin atau ada keluhan khusus? Saya bantu arahkan sesuai kebutuhan motornya ya.", tag: "Kebutuhan dikenali", note: "SOP layanan → respons yang relevan" },
  { label: "Material", name: "Mega", initial: "M", question: "U Ditch ukuran 50x50 ready?", reply: "Saya bantu cek ya, Kak. Kebutuhannya berapa unit dan lokasi proyeknya di mana? Biar tim kami siapkan penawaran yang pas.", tag: "Prospek dikualifikasi", note: "Knowledge produk → prospek lebih siap" },
  { label: "Travel", name: "Nura", initial: "N", question: "jadi deal paket Mumtazz.", reply: "Siap, Kak Nura! Saya teruskan ke admin untuk konfirmasi ketersediaan dan langkah pendaftarannya ya.", tag: "Diteruskan ke admin", note: "Alur closing → handover ke manusia" },
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const chat = conversations[active];
  return <section className="v3-hero">
    <div className="v3-grid-bg" aria-hidden="true" />
    <div className="v3-shell v3-hero-layout">
      <div className="v3-hero-copy">
        <span className="v3-kicker"><span className="v3-status-dot" /> CUSTOMIZE AI AGENT UNTUK BISNISMU</span>
        <h1>Chat masuk.<br />Bisnis jalan.<br /><span className="v3-blue-text">Anda bisa napas.</span></h1>
        <p className="v3-hero-sub">Bukan chatbot template. <strong>Ini AI Agent punya bisnismu.</strong> Otika mempelajari produk, SOP, gaya bicara, sampai alur closing bisnis Anda.</p>
        <p className="v3-price-note"><mark>Mulai Rp5.000-an per hari.</mark><br /><span>Setara es teh. Bedanya, yang ini bantu balas pelanggan.</span></p>
        <div className="v3-actions">
          <a href={consultationUrl("hero V3")} target="_blank" rel="noreferrer" className="btn-primary gap-3">Rakit AI untuk Bisnis Saya <ArrowUpRight size={18} /></a>
          <a href="#cara-kerja" className="v3-text-link">Kenalan dulu <ArrowDown size={16} /></a>
        </div>
        <div className="v3-assurances"><span><Check size={14} /> Konsultasi gratis</span><span><Check size={14} /> Dibantu setup</span><span><Check size={14} /> Tetap ada manusia</span></div>
      </div>
      <div className="v3-demo-wrap">
        <div className="v3-orbit v3-orbit-one" aria-hidden="true" /><div className="v3-orbit v3-orbit-two" aria-hidden="true" />
        <div className="v3-demo-sticker"><Sparkles size={16} /><span>AI-nya kerja.<br /><strong>Anda pegang kendali.</strong></span></div>
        <div className="v3-demo">
          <div className="v3-demo-chrome"><span><i /><i /><i /></span><span>app.otika.biz.id</span><ShieldCheck size={15} /></div>
          <div className="v3-demo-heading"><div className="v3-agent-icon"><Sparkles size={23} /></div><div><strong>AI Agent bisnismu</strong><span><i className="v3-status-dot" /> Siap bantu pelanggan</span></div><span className="v3-live-badge">24/7</span></div>
          <div className="v3-demo-tabs" aria-label="Pilih contoh percakapan">{conversations.map((item, index) => <button type="button" key={item.label} aria-pressed={index === active} onClick={() => setActive(index)}>{item.label}</button>)}</div>
          <div className="v3-chat" key={chat.label} aria-live="polite" aria-atomic="true">
            <div className="v3-chat-person"><span>{chat.initial}</span><strong>{chat.name}</strong><img src="/assets/whatsapp-glyph-green.svg" width="19" height="19" alt="WhatsApp" /></div>
            <div className="v3-bubble v3-bubble-in">{chat.question}<small>09.41</small></div>
            <div className="v3-bubble v3-bubble-out">{chat.reply}<small>OTIKA AI <CheckCheck size={14} /></small></div>
            <div className="v3-chat-tag"><Check size={13} /> {chat.tag}</div>
          </div>
          <div className="v3-demo-foot"><span><Sparkles size={14} /> {chat.note}</span><span>Ilustrasi alur</span></div>
        </div>
        <div className="v3-channel-chip"><img src="/assets/whatsapp-glyph-green.svg" width="24" height="24" alt="" /><Instagram size={24} /><span>Dua channel.<br /><strong>Satu rekan kerja digital.</strong></span></div>
        <p className="v3-demo-hint">Coba pilih jenis bisnis di atas ↑</p>
      </div>
    </div>
    <div className="v3-shell"><div className="v3-hero-bottom"><div className="v3-meta-proof"><img src="/assets/meta-tech-provider.png" alt="Meta Tech Provider" width="110" height="65" /><span>OTIKA resmi menjadi<br /><strong>Meta Tech Provider</strong></span></div><a href="/kalkulator-biaya-whatsapp"><span className="v3-small-label">HITUNG DULU, TENANG KEMUDIAN</span><span>Cek perkiraan biaya WhatsApp API <ArrowUpRight size={18} /></span></a></div></div>
  </section>;
};
export default Hero;
