import { BookOpen, MessagesSquare, RefreshCw, WandSparkles, ArrowUpRight } from "lucide-react";
import { consultationUrl } from "@/lib/site";

const steps = [
  { icon: MessagesSquare, title: "Ngobrol dulu. Bukan langsung invoice.", text: "Ceritakan produk, SOP, pertanyaan pelanggan, dan bagian yang paling menyita waktu admin." },
  { icon: BookOpen, title: "Bisnismu jadi buku pelajarannya.", text: "Katalog, FAQ, gaya bicara, dan alur kualifikasi prospek disusun. Termasuk kapan harus memanggil manusia." },
  { icon: WandSparkles, title: "Diracik, diuji, baru diajak kerja.", text: "Kami customize AI Agent untuk WhatsApp atau Instagram, lalu menguji skenario percakapan bisnis Anda." },
  { icon: RefreshCw, title: "Bisnis berkembang. AI ikut belajar.", text: "Knowledge dan jawaban disempurnakan mengikuti perubahan produk, promo, dan kebutuhan operasional." },
];

const Services = () => <section id="cara-kerja" className="section v3-process">
  <div className="v3-shell">
    <div className="v3-section-intro" data-reveal><div><span className="v3-kicker">04 / DARI KENALAN SAMPAI JALAN</span><h2>AI-nya belajar bisnis Anda.<br /><span className="v3-muted-text">Anda tak perlu kuliah AI dulu.</span></h2></div><p>Kami bantu dari pemetaan kebutuhan sampai AI Agent siap berbicara dengan pelanggan.</p></div>
    <div className="v3-steps">{steps.map((step, index) => <article key={step.title} data-reveal><div className="v3-step-number">0{index + 1}<step.icon size={24} strokeWidth={1.5} /></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    <div className="v3-process-note"><span>AI membantu. <strong>Manusia tetap memegang kendali.</strong></span><a href={consultationUrl("cara kerja V3")} target="_blank" rel="noreferrer">Mulai dari ngobrol <ArrowUpRight size={18} /></a></div>
  </div>
</section>;
export default Services;
