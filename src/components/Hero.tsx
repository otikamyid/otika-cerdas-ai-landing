import { consultationUrl } from "@/lib/site";
import { ArrowRight, Calculator, CheckCircle2, MessageCircle } from "lucide-react";

const Hero = () => (
  <section className="hero-section">
    <div className="hero-glow" />
    <div className="container relative mx-auto grid items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
      <div className="animate-fade-up">
        <span className="eyebrow"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Customize AI Agent untuk bisnismu</span>
        <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-slate-950 md:text-5xl lg:text-6xl">Bukan chatbot template. <span className="gradient-text">Ini AI Agent punya bisnismu.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">Otika mempelajari produk, SOP, gaya bicara, sampai alur closing bisnis Anda.</p>
        <p className="mt-4 font-semibold text-slate-800"><mark className="rounded-md bg-yellow-300 px-2 py-1 text-slate-950">Mulai Rp5.000-an per hari.</mark> <span className="ml-1">Kurang lebih setara es teh, tapi yang ini bisa bantu balas pelanggan 24 jam.</span></p>
        <div className="mt-6 inline-flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
          <img src="/assets/meta-tech-provider.png" alt="Meta Tech Provider" className="h-12 w-auto object-contain" width="102" height="60" />
          <div><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Kepercayaan resmi</p><p className="mt-1 text-sm font-bold text-slate-900">OTIKA resmi menjadi Meta Tech Provider</p></div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className="btn-primary gap-2" href={consultationUrl("hero")} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5" /> Konsultasikan Bisnis Saya</a>
          <a className="btn-secondary gap-2" href="#cara-kerja">Lihat Cara Kerja <ArrowRight className="h-4 w-4" /></a>
        </div>
        <a href="/kalkulator-biaya-whatsapp" className="mt-4 inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-bold text-amber-900 transition hover:-translate-y-0.5 hover:bg-amber-100">
          <Calculator className="h-5 w-5 text-amber-600" /> Cek perkiraan biaya WhatsApp API mulai 1 Oktober 2026 <ArrowRight className="h-4 w-4" />
        </a>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
          {["Konsultasi gratis", "Dibantu setup", "Handover ke admin"].map(item => <span className="flex items-center gap-2" key={item}><CheckCircle2 className="h-4 w-4 text-emerald-500" />{item}</span>)}
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className="absolute inset-8 rounded-full bg-primary/20 blur-3xl" />
        <img src="/assets/Hero Image OTIKA (1).webp" alt="Ilustrasi AI Agent Otika" className="relative mx-auto w-full max-w-[560px] animate-float" width="600" height="600" fetchPriority="high" />
        <div className="absolute bottom-8 left-2 rounded-2xl border border-white bg-white/90 p-4 shadow-xl backdrop-blur">
          <p className="text-xs text-slate-500">Status AI Agent</p><p className="mt-1 font-bold text-emerald-600">● Siap balas pelanggan</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
