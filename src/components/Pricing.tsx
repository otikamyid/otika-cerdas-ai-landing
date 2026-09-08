import { ArrowUpRight, Check, Calculator, Sparkles } from "lucide-react";
import { consultationUrl } from "@/lib/site";

const plans = [
  { name: "SMART", tag: "MULAI DARI YANG ESENSIAL", price: "145", intro: "Rekan digital untuk menjawab pelanggan sehari-hari.", features: ["Schedule AI On / Off", "Kondisi pengendali AI Bot On / Off", "Panggil CS manusia saat dibutuhkan", "Auto Off saat manusia mengambil alih", "Daya ingat percakapan", "200 pertanyaan/hari", "Aktif 24 jam", "Tanpa Dashboard App"] },
  { name: "GENIUS", tag: "LEBIH BANYAK RUANG BERTUMBUH", price: "299", intro: "AI Agent plus dashboard untuk pekerjaan yang lebih lengkap.", features: ["Semua fitur SMART + Dashboard Web App", "Auto Off saat intervensi CS manusia", "Kirim gambar katalog produk/jasa", "Baca & pelajari PDF sebagai knowledge", "Daya ingat & konteks", "Analisis gambar", "Hitung detail harga produk/jasa oleh AI", "Eskalasi ke manusia/tim otomatis", "Unlimited AI Response"] },
];

const Pricing = () => <section id="pricing" className="section v3-pricing">
  <div className="v3-shell">
    <div className="v3-section-intro" data-reveal><div><span className="v3-kicker">05 / INVESTASI YANG MASUK AKAL</span><h2>Di bawah UMR.<br /><span className="v3-muted-text">Di atas ekspektasi bot biasa.</span></h2></div><p>CS super fast response, tanpa ngeluh dan tanpa menuntut naik gaji. Pilih kebutuhan awalnya, kita bantu racik sisanya.</p></div>
    <div className="v3-plan-grid">{plans.map(plan => <article className={`v3-plan ${plan.name === "GENIUS" ? "v3-plan-featured" : ""}`} key={plan.name} data-reveal>
      <div className="v3-plan-top"><span className="v3-small-label">{plan.tag}</span>{plan.name === "GENIUS" && <span className="v3-popular"><Sparkles size={13} /> POPULER</span>}</div>
      <h3>{plan.name}</h3><p>{plan.intro}</p><div className="v3-plan-price"><span>Rp</span><strong>{plan.price}</strong><span>ribu<br />/ bulan</span></div>
      <a href={consultationUrl(`paket ${plan.name}`)} className={plan.name === "GENIUS" ? "btn-primary" : "btn-secondary"} target="_blank" rel="noreferrer">Pilih Paket {plan.name} <ArrowUpRight size={18} /></a>
      <ul>{plan.features.map(feature => <li key={feature}><Check size={16} /><span>{feature}</span></li>)}</ul>
    </article>)}</div>
    <div className="v3-custom-plan" data-reveal><div><span className="v3-small-label">PAKET CUSTOM</span><h3>Bisnisnya unik? Jangan disuruh seragam.</h3><p>AI Customer Service atau automasi proses bisnis: ceritakan alur rumitnya, kita bahas racikannya.</p></div><a href={consultationUrl("paket CUSTOM V3")} target="_blank" rel="noreferrer" className="btn-secondary">Racik Paket Saya <ArrowUpRight size={18} /></a></div>
    <div className="v3-pricing-note"><p>Biaya WhatsApp Cloud API menjadi tanggung jawab masing-masing klien, terpisah dari biaya layanan OTIKA, termasuk Paket CUSTOM. Biaya model AI dan integrasi tambahan mengikuti kesepakatan layanan. Live agent adalah CS manusia yang mengambil alih saat dibutuhkan.</p><a href="/kalkulator-biaya-whatsapp"><Calculator size={18} /> Hitung estimasi biaya API <ArrowUpRight size={16} /></a></div>
  </div>
</section>;
export default Pricing;
