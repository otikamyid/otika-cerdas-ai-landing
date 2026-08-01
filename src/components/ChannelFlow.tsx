import { Bot, Check, Instagram, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const outcomes = [
  "Balasan mengikuti knowledge bisnis",
  "Bahasa natural, tidak kaku seperti bot",
  "Kualifikasi prospek dan rekomendasi produk",
  "Handover mulus ke admin manusia",
];

const ChannelFlow = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
  <section ref={sectionRef} id="channels" className="section bg-slate-50/70 overflow-hidden">
    <div className="container-tight">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="eyebrow">Channel aktif Otika</span>
        <h2 className="mt-4">WhatsApp & Instagram, satu AI Agent yang paham bisnismu</h2>
        <p className="mt-5 text-lg text-slate-600">Chat pelanggan masuk dari dua channel utama, lalu ditangani dengan alur yang sudah disesuaikan bersama tim Otika.</p>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="flow-board" aria-label="Alur WhatsApp dan Instagram menuju AI Agent Otika">
          <div className="space-y-4">
            <div className={`channel-card flow-in ${isVisible ? "is-visible" : ""}`}><MessageCircle className="text-emerald-500" /> WhatsApp</div>
            <div className={`channel-card flow-in flow-delay-2 ${isVisible ? "is-visible" : ""}`}><Instagram className="text-pink-500" /> Instagram</div>
          </div>
          <div className="flow-line" aria-hidden="true"><span /></div>
          <div className="agent-core">
            <Sparkles className="absolute right-3 top-3 h-4 w-4 text-amber-400" />
            <Bot className="mx-auto mb-3 h-9 w-9 text-primary" />
            <strong>AI Agent<br />Otika</strong>
          </div>
        </div>

        <div className="space-y-4">
          {outcomes.map((outcome, index) => (
            <div className={`outcome-card ${isVisible ? "is-visible" : ""}`} style={{ animationDelay: `${index * 120 + 150}ms` }} key={outcome}>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-50"><Check className="h-4 w-4 text-emerald-600" /></span>
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-slate-500">Integrasi Messenger dan channel lainnya sedang dalam pengembangan.</p>
    </div>
  </section>
  );
};

export default ChannelFlow;
