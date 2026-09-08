import { ArrowUpRight, Inbox, LayoutDashboard, ListFilter, Tags, TrendingUp, Workflow, SlidersHorizontal } from "lucide-react";
const crmFeatures = [
  { icon: Inbox, title: "Unified Inbox", text: "Chat WhatsApp dan Instagram masuk satu dashboard. Tim tidak perlu lompat-lompat tab." },
  { icon: LayoutDashboard, title: "Sales Pipeline", text: "Kanban drag-and-drop dari prospek sampai closing, lengkap dengan nilai deal dan target." },
  { icon: ListFilter, title: "Assign & Transfer Agent", text: "Bagi chat otomatis atau manual. Alihkan ke agent lain ketika percakapan perlu eskalasi." },
  { icon: Tags, title: "Labeling & Tagging", text: "Label warna untuk lead. Filter, segmentasi, dan laporan jadi lebih mudah." },
  { icon: TrendingUp, title: "AI Lead Scoring", text: "Bantu urutkan lead panas dan dingin agar tim fokus ke prospek yang paling potensial." },
  { icon: Workflow, title: "23+ fitur lainnya", text: "Workflow, broadcast scheduler, analytics, role & permission, API, dan Follow Up by AI. Bukan sekadar template." },
];
const CrmFeatures = () => <section className="section v3-crm">
  <div className="v3-shell">
    <div className="v3-section-intro" data-reveal><div><span className="v3-kicker">03 / INCLUDE APLIKASI CRM OTIKA</span><h2>Chatnya ramai.<br /><span>Dashboardnya tetap waras.</span></h2></div><p>Kelola Lead & Order Lebih Profesional. Dari chat pertama sampai siap closing, semua lebih mudah dipantau dalam satu tempat.</p></div>
    <div className="v3-pipeline" data-reveal aria-label="Ilustrasi tahapan sales pipeline">
      <div><span className="v3-small-label">SALES PIPELINE</span><span className="v3-pipeline-caption">Ilustrasi alur kerja tim</span></div>
      <div className="v3-pipeline-columns">{[
        { title: "Prospek masuk", customer: "Marshell", task: "Booking service motor", color: "sky" },
        { title: "Sedang ngobrol", customer: "Mega", task: "Kebutuhan U Ditch 50×50", color: "amber" },
        { title: "Siap ditindaklanjuti", customer: "Nura", task: "Konfirmasi paket Mumtazz", color: "green" },
      ].map((item, i) => <div className={`v3-pipeline-column v3-pipeline-${item.color}`} key={item.title}><h3><span />{item.title}<small>0{i + 1}</small></h3><div><strong>{item.customer}</strong><p>{item.task}</p><span>AI + tim OTIKA</span></div></div>)}</div>
    </div>
    <div className="v3-crm-features">{crmFeatures.map(({icon: Icon, title, text}) => <article key={title} data-reveal><Icon size={23} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></article>)}</div>
    <a className="v3-insights-link" href="/kalkulator-biaya-whatsapp"><SlidersHorizontal size={22} /><span><strong>AI boleh responsif. Pengeluaran tetap dipantau.</strong><small>Kenali WhatsApp Insights, estimasi biaya API, dan kontrol batas respons AI.</small></span><ArrowUpRight size={22} /></a>
  </div>
</section>;
export default CrmFeatures;
