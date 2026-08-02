import { Inbox, LayoutDashboard, ListFilter, Tags, TrendingUp, Workflow } from "lucide-react";

const crmFeatures = [
  { icon: Inbox, title: "Unified Inbox", text: "Chat WhatsApp dan Instagram masuk satu dashboard—tim tidak perlu lompat-lompat tab." },
  { icon: LayoutDashboard, title: "Sales Pipeline", text: "Kanban drag-and-drop dari prospek sampai closing, lengkap dengan nilai deal dan target." },
  { icon: ListFilter, title: "Assign & Transfer Agent", text: "Bagi chat ke tim secara otomatis atau manual, lalu transfer ke agent lain ketika perlu eskalasi." },
  { icon: Tags, title: "Labeling & Tagging", text: "Kategorikan lead menggunakan label warna agar filter, segmentasi, dan laporan menjadi lebih mudah." },
  { icon: TrendingUp, title: "AI Lead Scoring", text: "Bantu mengurutkan lead panas dan dingin agar tim sales fokus ke prospek yang paling potensial closing." },
  { icon: Workflow, title: "23+ Fitur Canggih Lainnya", text: "Workflow automation, broadcast scheduler, analytics, role & permission, integrasi API, Follow Up by AI yang bukan sekadar template, dan banyak lagi." },
];

const CrmFeatures = () => (
  <section className="section relative overflow-hidden bg-slate-950 text-white">
    <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
    <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
    <div className="container-tight relative">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sky-300">Include aplikasi CRM OTIKA</span>
        <h2 className="mt-5 text-white">Kelola Lead & Order Lebih Profesional</h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-300">Dari chat pertama sampai pelanggan siap closing, semua lebih mudah dipantau dalam satu tempat.</p>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {crmFeatures.map((feature, index) => <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.06] p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[.09]" key={feature.title}>
          <span className="absolute right-5 top-4 text-5xl font-extrabold text-white/[.04]">{String(index + 1).padStart(2, "0")}</span>
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-cyan-400 shadow-lg shadow-primary/20"><feature.icon className="h-6 w-6" /></div>
          <h3 className="mt-5 text-xl font-bold text-white">{feature.title}</h3>
          <p className="mt-3 leading-relaxed text-slate-300">{feature.text}</p>
        </article>)}
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-slate-300"><span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">CRM terintegrasi</span><span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">AI + human handover</span><span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Dibantu setup tim OTIKA</span></div>
    </div>
  </section>
);

export default CrmFeatures;
