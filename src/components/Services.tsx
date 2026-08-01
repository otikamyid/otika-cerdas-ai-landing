import { BookOpen, Bot, MessagesSquare, RefreshCw, UserRoundCheck, WandSparkles } from "lucide-react";

const steps = [
  { icon: MessagesSquare, title: "Cerita dulu soal bisnismu", text: "Tim Otika memetakan produk, pertanyaan pelanggan, SOP, dan bagian yang paling menyita waktu admin." },
  { icon: BookOpen, title: "Susun knowledge & alur", text: "Katalog, FAQ, gaya bicara, kualifikasi prospek, serta kapan AI harus menyerahkan chat ke manusia disiapkan bersama." },
  { icon: WandSparkles, title: "Kami customize AI Agent", text: "AI dikonfigurasi dan diuji untuk WhatsApp atau Instagram—bukan dilepas dengan jawaban template seadanya." },
  { icon: RefreshCw, title: "Evaluasi dan bertumbuh", text: "Jawaban dapat disempurnakan mengikuti produk, promo, dan kebutuhan operasional bisnis yang berubah." },
];

const Services = () => <section id="cara-kerja" className="section bg-white">
  <div className="container-tight">
    <div className="mx-auto max-w-3xl text-center">
      <span className="eyebrow">Cara kerja Otika</span>
      <h2 className="mt-4">AI-nya belajar bisnis Anda, bukan Anda yang dipaksa mengikuti template</h2>
      <p className="mt-5 text-lg text-slate-600">Kami bantu dari pemetaan kebutuhan sampai AI Agent siap berbicara dengan pelanggan.</p>
    </div>
    <div className="mt-14 grid gap-5 md:grid-cols-2">
      {steps.map((step, index) => <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm" key={step.title}>
        <div className="flex items-start gap-5"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-50 text-primary"><step.icon /></span><div><span className="text-xs font-bold uppercase tracking-widest text-primary">Langkah {index + 1}</span><h3 className="mt-2 text-xl font-bold">{step.title}</h3><p className="mt-3 leading-relaxed text-slate-600">{step.text}</p></div></div>
      </article>)}
    </div>
    <div className="mt-14 grid gap-5 rounded-3xl bg-slate-950 p-8 text-white md:grid-cols-3 md:p-10">
      <div className="md:col-span-1"><Bot className="h-10 w-10 text-sky-400" /><h3 className="mt-5 text-2xl font-bold">AI membantu. Manusia tetap memegang kendali.</h3></div>
      <div className="grid gap-4 md:col-span-2 sm:grid-cols-2">
        {["Jawab FAQ & detail produk", "Kualifikasi kebutuhan prospek", "Kirim informasi yang relevan", "Handover ke admin saat dibutuhkan"].map(item => <div className="flex gap-3 rounded-xl bg-white/5 p-4" key={item}><UserRoundCheck className="h-5 w-5 shrink-0 text-emerald-400" /><span>{item}</span></div>)}
      </div>
    </div>
  </div>
</section>;

export default Services;
