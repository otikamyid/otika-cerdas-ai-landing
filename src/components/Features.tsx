import { ArrowUpRight, BrainCircuit, Clock3, Handshake, MessageCircle, SlidersHorizontal } from "lucide-react";

const benefits = [
  { icon: BrainCircuit, title: "Ngerti produk. Bukan cuma ‘baik, Kak’.", text: "Knowledge bisnis dan SOP jadi bekal menjawab. Respons lebih relevan, gaya bicara tetap punya Anda." },
  { icon: Clock3, title: "Jam tutup toko ≠ jam tutup chat.", text: "Bantu jawab pertanyaan pelanggan 24/7, bahkan saat tim Anda sudah waktunya istirahat." },
  { icon: Handshake, title: "AI sigap. Admin tetap siap.", text: "Percakapan yang perlu sentuhan manusia bisa dialihkan ke tim. Kontrol tetap ada di tangan Anda." },
  { icon: SlidersHorizontal, title: "Bisnis beda, racikannya beda.", text: "Dari FAQ, katalog, sampai alur follow-up. Kami sesuaikan dengan pekerjaan yang benar-benar ingin diringankan." },
];

const Features = () => <section id="features" className="section v3-benefits">
  <div className="v3-shell">
    <div className="v3-section-intro" data-reveal><div><span className="v3-kicker">01 / REKAN KERJA DIGITAL</span><h2>Balas ratusan chat.<br /><span className="v3-muted-text">Bukan ratusan keluhan admin.</span></h2></div><p>Balas Ratusan Chat Sampai Closing Full Autopilot! OTIKA membantu percakapan bergerak dari “kak, mau tanya” ke langkah berikutnya.</p></div>
    <div className="v3-bento">
      <article className="v3-bento-lead" data-reveal><span className="v3-small-label">CUSTOMIZE AI AGENT</span><div className="v3-bento-symbol" aria-hidden="true"><MessageCircle size={82} strokeWidth={1} /><span>ai</span></div><h3>CS tanpa drama.<br />Bisnis tetap punya rasa.</h3><p>Teknologi AI yang disiapkan untuk cara bisnis Anda bekerja. Bukan memaksa bisnis mengikuti template.</p><a href="/fitur/ai-agent">Kenali AI Agent OTIKA <ArrowUpRight size={19} /></a></article>
      {benefits.map(({ icon: Icon, title, text }, index) => <article className="v3-benefit-card" key={title} data-reveal><div><Icon size={26} strokeWidth={1.5} /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p></article>)}
    </div>
  </div>
</section>;
export default Features;
