import { consultationUrl } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
const Cta = () => <section className="v3-final-cta">
  <div className="v3-shell" data-reveal><span className="v3-kicker">BISNIS ANDA UNIK. AI-NYA JUGA HARUS.</span><h2>Biar chatnya dijawab.<br /><span>Bukan cuma dipikirin.</span></h2><p>Ceritakan produk, jumlah chat, dan pekerjaan admin yang ingin diringankan. Kita mulai dari ngobrol, lalu petakan solusi yang masuk akal.</p><a href={consultationUrl("CTA akhir V3")} target="_blank" rel="noreferrer" className="btn-primary">Ngobrol dengan Admin OTIKA <ArrowUpRight size={20} /></a><small>Konsultasi gratis. Tanpa kewajiban berlangganan.</small></div>
</section>;
export default Cta;
