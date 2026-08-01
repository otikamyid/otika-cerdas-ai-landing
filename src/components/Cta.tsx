import { consultationUrl } from "@/lib/site";
import { ArrowRight, MessageCircle } from "lucide-react";

const Cta = () => <section className="relative overflow-hidden bg-primary py-20 text-white">
  <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
  <div className="container-tight relative text-center">
    <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold">Konsultasi gratis bersama admin Otika</span>
    <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold md:text-5xl">Punya alur bisnis yang unik? Bagus. AI Agent-nya juga jangan generik.</h2>
    <p className="mx-auto mt-6 max-w-2xl text-lg text-sky-50">Ceritakan produk, jumlah chat, dan pekerjaan admin yang ingin diringankan. Kami bantu petakan solusi yang masuk akal.</p>
    <a href={consultationUrl("CTA akhir")} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-primary shadow-xl transition hover:-translate-y-1"><MessageCircle className="h-5 w-5" /> Chat Admin Otika <ArrowRight className="h-4 w-4" /></a>
  </div>
</section>;

export default Cta;
