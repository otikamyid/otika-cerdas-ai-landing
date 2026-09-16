import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { consultationUrl } from "@/lib/site";
import { ArrowRight, Bot, Check, GitBranch, Megaphone, MessageCircle, RefreshCw, ShieldCheck, Sparkles, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type FeatureKey = "whatsapp-api" | "whatsapp-coexistence" | "ai-agent" | "follow-up-ai" | "broadcast-whatsapp" | "meta-capi";

type Feature = {
  label: string;
  title: string;
  description: string;
  metaDescription: string;
  icon: LucideIcon;
  highlights: string[];
  benefits: { icon: LucideIcon; title: string; text: string }[];
  steps: { title: string; text: string }[];
  note?: string;
};

const features: Record<FeatureKey, Feature> = {
  "whatsapp-api": {
    label: "WhatsApp API",
    title: "WhatsApp resmi untuk bisnis yang chat-nya mulai serius",
    description: "Hubungkan bisnis ke WhatsApp Business Platform untuk membuka ruang bagi inbox tim, otomatisasi, AI Agent, template pesan, dan integrasi yang tidak tersedia di aplikasi biasa.",
    metaDescription: "Integrasi WhatsApp Business API resmi bersama OTIKA untuk AI Agent, inbox tim, template pesan, broadcast, dan otomasi bisnis.",
    icon: MessageCircle,
    highlights: ["Terhubung melalui ekosistem resmi Meta", "Dibantu dari pemetaan kebutuhan sampai aktivasi", "Siap dikembangkan dengan AI Agent dan otomasi"],
    benefits: [
      { icon: Users, title: "Kerja tim lebih rapi", text: "Percakapan dapat ditangani melalui inbox bisnis, tidak lagi bergantung pada satu perangkat admin." },
      { icon: Bot, title: "Fondasi untuk AI Agent", text: "Bangun balasan otomatis yang memahami produk, SOP, dan alur layanan bisnis Anda." },
      { icon: GitBranch, title: "Siap diintegrasikan", text: "Hubungkan percakapan dengan CRM, webhook, atau alur bisnis tertentu sesuai kebutuhan implementasi." },
    ],
    steps: [
      { title: "Konsultasikan kebutuhan", text: "Kami petakan nomor, volume chat, tim, dan otomasi yang ingin dijalankan." },
      { title: "Siapkan akun bisnis", text: "Tim OTIKA mendampingi persiapan aset bisnis dan proses koneksi yang diperlukan oleh Meta." },
      { title: "Aktifkan dan uji", text: "Channel diuji sebelum digunakan untuk melayani pelanggan dan dikembangkan ke fitur berikutnya." },
    ],
    note: "Ketersediaan fitur, verifikasi, template, dan biaya pesan mengikuti ketentuan Meta yang berlaku pada akun bisnis Anda.",
  },
  "whatsapp-coexistence": {
    label: "WhatsApp Coexistence",
    title: "Tetap balas dari HP, sambil menambahkan kekuatan API",
    description: "WhatsApp Coexistence memungkinkan nomor WhatsApp Business yang memenuhi syarat tetap digunakan melalui aplikasi dan dihubungkan ke WhatsApp Business Platform secara bersamaan.",
    metaDescription: "Gunakan WhatsApp Business App dan WhatsApp Business Platform pada nomor yang sama dengan pendampingan WhatsApp Coexistence dari OTIKA.",
    icon: RefreshCw,
    highlights: ["Nomor bisnis tetap dikenal pelanggan", "Admin masih dapat memakai aplikasi WhatsApp Business", "Adopsi API dapat dilakukan lebih bertahap"],
    benefits: [
      { icon: MessageCircle, title: "Tetap nyaman dari HP", text: "Balasan personal tetap dapat dilakukan dari aplikasi WhatsApp Business seperti alur kerja sebelumnya." },
      { icon: Sparkles, title: "Tambahkan otomasi", text: "Gunakan API untuk AI Agent, workflow, atau broadcast tanpa langsung mengubah seluruh cara kerja tim." },
      { icon: ShieldCheck, title: "Transisi lebih terukur", text: "Tim dapat menguji alur baru secara bertahap dengan pendampingan konfigurasi dari OTIKA." },
    ],
    steps: [
      { title: "Cek kelayakan nomor", text: "Kami membantu memeriksa kondisi nomor dan akun bisnis sebelum proses koneksi." },
      { title: "Hubungkan melalui Meta", text: "Ikuti proses otorisasi dan pemilihan opsi Coexistence pada alur yang tersedia." },
      { title: "Uji aplikasi dan API", text: "Pastikan penerimaan pesan, balasan admin, dan otomasi berjalan sesuai kebutuhan bisnis." },
    ],
    note: "Coexistence bergantung pada kelayakan akun, nomor, wilayah, dan kebijakan Meta. Tim OTIKA akan memeriksa kondisinya saat konsultasi.",
  },
  "ai-agent": {
    label: "AI Agent",
    title: "Bukan bot template. AI Agent yang belajar cara bisnis Anda bekerja.",
    description: "OTIKA menyesuaikan knowledge, instruksi, gaya bahasa, batasan, dan alur handover agar AI Agent dapat membantu pelanggan tanpa kehilangan karakter bisnis Anda.",
    metaDescription: "Customize AI Agent OTIKA berdasarkan produk, SOP, knowledge, gaya bahasa, dan alur layanan bisnis Anda.",
    icon: Bot,
    highlights: ["Knowledge disusun dari materi bisnis Anda", "Gaya bicara dan batas jawaban dapat disesuaikan", "Percakapan kompleks dapat dialihkan ke admin"],
    benefits: [
      { icon: Sparkles, title: "Jawaban lebih relevan", text: "AI menggunakan pengetahuan yang disiapkan untuk menjawab FAQ, detail produk, dan kebutuhan pelanggan." },
      { icon: MessageCircle, title: "Bahasa terasa natural", text: "Atur persona dan gaya komunikasi agar respons tidak terdengar seperti balasan robot generik." },
      { icon: Users, title: "Manusia tetap memegang kendali", text: "Tentukan kondisi saat AI harus berhenti dan menyerahkan percakapan kepada admin." },
    ],
    steps: [
      { title: "Bedah alur bisnis", text: "Kami mempelajari produk, SOP, pertanyaan berulang, dan tujuan percakapan Anda." },
      { title: "Bangun dan latih", text: "Knowledge serta instruksi AI disusun, kemudian diuji menggunakan skenario pelanggan nyata." },
      { title: "Evaluasi berkala", text: "Jawaban diperbaiki mengikuti temuan percakapan, perubahan produk, dan kebutuhan tim." },
    ],
  },
  "follow-up-ai": {
    label: "Follow Up by AI",
    title: "Prospek belum menjawab? AI bantu menyapa lagi tanpa kehilangan konteks.",
    description: "Follow Up by AI membantu bisnis menindaklanjuti prospek berdasarkan tahapan dan konteks percakapan—bukan sekadar mengirim template yang sama kepada semua orang.",
    metaDescription: "Follow Up by AI dari OTIKA membantu menindaklanjuti prospek secara terjadwal, kontekstual, dan tetap dapat diteruskan ke admin.",
    icon: RefreshCw,
    highlights: ["Jadwal follow-up disesuaikan dengan alur bisnis", "Pesan dapat mempertimbangkan konteks prospek", "Admin mengambil alih ketika prospek siap dilayani"],
    benefits: [
      { icon: RefreshCw, title: "Prospek tidak cepat terlupakan", text: "Buat rangkaian tindak lanjut untuk percakapan yang belum menghasilkan keputusan." },
      { icon: GitBranch, title: "Alur sesuai respons", text: "Tentukan perlakuan berbeda untuk prospek yang tertarik, menunda, atau tidak lagi ingin dihubungi." },
      { icon: Users, title: "Handover pada waktu yang tepat", text: "Saat ada sinyal minat, percakapan dapat diarahkan kembali kepada tim penjualan." },
    ],
    steps: [
      { title: "Tentukan segmen prospek", text: "Pilih siapa yang layak ditindaklanjuti berdasarkan sumber dan tahap percakapannya." },
      { title: "Susun rangkaian pesan", text: "Atur jeda, konteks, tujuan, serta kondisi berhenti agar follow-up tetap relevan." },
      { title: "Pantau dan optimalkan", text: "Evaluasi respons untuk memperbaiki waktu, bahasa, dan jalur handover ke admin." },
    ],
    note: "Follow-up hanya boleh dilakukan kepada kontak yang memiliki dasar izin yang sesuai. Permintaan berhenti harus dihormati.",
  },
  "broadcast-whatsapp": {
    label: "Broadcast WhatsApp",
    title: "Broadcast lebih terarah. Bukan asal kirim lalu berharap tidak diblokir.",
    description: "Kirim promo, pengumuman, reminder, dan informasi penting melalui template WhatsApp yang disetujui Meta kepada audiens yang memang memberikan izin.",
    metaDescription: "Broadcast WhatsApp OTIKA untuk campaign, pengumuman, reminder, segmentasi audiens, dan pengiriman template resmi Meta.",
    icon: Megaphone,
    highlights: ["Menggunakan template pesan yang disetujui Meta", "Audiens dapat dipilih berdasarkan kebutuhan campaign", "Cocok untuk promo, reminder, dan re-engagement"],
    benefits: [
      { icon: Users, title: "Segmentasi audiens", text: "Pisahkan penerima berdasarkan data yang relevan agar pesan tidak terasa sama untuk semua orang." },
      { icon: Megaphone, title: "Campaign terjadwal", text: "Rencanakan pengiriman promosi, pengumuman, atau pengingat pada waktu yang tepat." },
      { icon: ShieldCheck, title: "Lebih sadar kepatuhan", text: "Gunakan template, opt-in, dan mekanisme opt-out sesuai kebijakan WhatsApp Business." },
    ],
    steps: [
      { title: "Siapkan audiens berizin", text: "Pastikan kontak memang setuju menerima kategori komunikasi yang akan dikirimkan." },
      { title: "Ajukan template", text: "Susun pesan sesuai kategori dan aturan Meta, lalu tunggu persetujuan template." },
      { title: "Kirim dan evaluasi", text: "Jalankan campaign, pantau hasil, serta keluarkan kontak yang memilih berhenti." },
    ],
    note: "Biaya pesan dan persetujuan template mengikuti kategori serta kebijakan Meta. Broadcast tidak boleh digunakan untuk spam.",
  },
  "meta-capi": {
    label: "Meta Conversions API",
    title: "Iklan berhenti menebak. Percakapan ikut memberi sinyal.",
    description: "Hubungkan perjalanan prospek dari iklan Click-to-WhatsApp ke event konversi server-side. OTIKA membantu mencatat konteks atribusi yang tersedia dan mengirim event yang sudah dipetakan kembali ke Meta.",
    metaDescription: "Meta Conversions API OTIKA menghubungkan percakapan Click-to-WhatsApp dengan event konversi server-side untuk membantu pengukuran dan optimasi iklan.",
    icon: GitBranch,
    highlights: ["Event dikirim melalui koneksi server-side", "Dapat dipicu berdasarkan tahap atau konteks percakapan", "Mendukung pemetaan event seperti Lead dan Purchase"],
    benefits: [
      { icon: GitBranch, title: "Jejak klik tidak berhenti di chat", text: "Kaitkan data referral CTWA yang tersedia dengan kontak dan perjalanan prospek di dalam alur OTIKA." },
      { icon: Sparkles, title: "Kalimat bisa menjadi sinyal", text: "Tentukan percakapan atau kalimat tertentu sebagai pemicu event, misalnya minat, permintaan penawaran, atau konfirmasi transaksi." },
      { icon: ShieldCheck, title: "Data dikirim lebih terukur", text: "Normalisasi dan hashing data pelanggan yang dipersyaratkan dilakukan sebelum event diteruskan melalui Conversions API." },
    ],
    steps: [
      { title: "Hubungkan aset Meta", text: "Siapkan Dataset atau Pixel dan akses Conversions API dari akun bisnis Meta yang digunakan." },
      { title: "Petakan sinyal bisnis", text: "Tentukan tahap pipeline, percakapan, atau kalimat yang mewakili Lead, Qualified Lead, Checkout, maupun Purchase." },
      { title: "Uji sebelum berjalan", text: "Validasi payload dan event melalui alat pengujian Meta, lalu pantau hasilnya setelah aktivasi." },
    ],
    note: "Ketersediaan parameter atribusi, penerimaan event, Event Match Quality, dan hasil optimasi tetap mengikuti data yang tersedia serta kebijakan Meta. CAPI memperkuat pengukuran, bukan menjamin performa iklan tertentu.",
  },
};

const capiComparison = [
  ["Infrastruktur pelacakan", "Pixel browser / pencatatan manual", "Meta Conversions API (server-side)"],
  ["Atribusi Click-to-WhatsApp", "Terbatas setelah pengguna membuka aplikasi", "Parameter referral CTWA yang tersedia dicatat"],
  ["Ketergantungan pada browser dan ad-blocker", "Masih bergantung pada pelacakan client-side", "Lebih sedikit bergantung pada browser"],
  ["Pengiriman Event Otomatis berdasarkan percakapan / kalimat", "Tidak tersedia", "Tersedia"],
  ["Event standar Meta seperti Lead dan Purchase", "Dicatat atau dikirim manual", "Dapat dipetakan dan dikirim otomatis"],
  ["Normalisasi dan hashing data pelanggan SHA-256", "Perlu implementasi terpisah", "Disiapkan dalam alur pengiriman event"],
];

const FeaturePage = ({ featureKey }: { featureKey: FeatureKey }) => {
  const feature = features[featureKey];
  const FeatureIcon = feature.icon;
  const path = `/fitur/${featureKey}`;

  return <div className="min-h-screen bg-white">
    <Seo title={`${feature.label} untuk Bisnis | OTIKA`} description={feature.metaDescription} path={path} />
    <Navbar />
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50/50 py-20 md:py-28">
        <div className="hero-glow" />
        <div className="container-tight relative grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <span className="eyebrow"><FeatureIcon className="h-4 w-4" /> Fitur OTIKA</span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">{feature.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{feature.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={consultationUrl(feature.label)} target="_blank" rel="noreferrer" className="btn-primary gap-2">Konsultasikan Kebutuhan <ArrowRight className="h-4 w-4" /></a>
              <a href="https://app.otika.biz.id" target="_blank" rel="noreferrer" className="btn-secondary">Coba Gratis</a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-50 text-primary"><FeatureIcon className="h-7 w-7" /></div>
            <h2 className="mt-6 text-2xl">{feature.label} bersama OTIKA</h2>
            <ul className="mt-6 space-y-4">{feature.highlights.map(item => <li className="flex gap-3 text-slate-700" key={item}><Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />{item}</li>)}</ul>
            <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5"><img src="/assets/meta-tech-provider.png" alt="Meta Tech Provider" className="h-10 w-auto" /><span className="text-xs font-semibold text-slate-600">OTIKA resmi menjadi Meta Tech Provider</span></div>
          </div>
        </div>
      </section>

      <section className="section"><div className="container-tight"><div className="text-center"><span className="eyebrow">Manfaat utama</span><h2 className="mt-4">Dibangun untuk membantu pekerjaan, bukan menambah ribet</h2></div><div className="mt-12 grid gap-6 md:grid-cols-3">{feature.benefits.map(item => <article className="feature-card" key={item.title}><item.icon className="h-8 w-8 text-primary" /><h3 className="mt-5 text-xl font-bold">{item.title}</h3><p className="mt-3 leading-relaxed text-slate-600">{item.text}</p></article>)}</div></div></section>

      {featureKey === "meta-capi" && <section className="section bg-slate-50"><div className="container-tight">
        <div className="mx-auto max-w-3xl text-center"><span className="eyebrow">Bandingkan alurnya</span><h2 className="mt-4">Pixel browser mencatat kunjungan.<br />CAPI OTIKA menyambungkan percakapan.</h2><p className="mt-5 leading-relaxed text-slate-600">Lihat perbedaan pelacakan standar dengan alur server-side yang menghubungkan iklan, chat WhatsApp, dan event konversi.</p></div>
        <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-[760px] w-full text-left text-sm">
            <caption className="sr-only">Perbandingan pelacakan standar dan Meta Conversions API OTIKA</caption>
            <thead className="bg-slate-100 text-slate-950"><tr><th className="px-6 py-5 font-bold">Fitur</th><th className="px-6 py-5 font-bold">Pelacakan standar</th><th className="bg-sky-50 px-6 py-5 font-bold text-primary">CAPI OTIKA</th></tr></thead>
            <tbody>{capiComparison.map(([name, standard, otika]) => <tr className="border-t border-slate-100" key={name}><th scope="row" className="px-6 py-5 font-semibold text-slate-900">{name}</th><td className="px-6 py-5 text-slate-500"><span className="flex items-start gap-2"><span aria-hidden="true" className="mt-0.5 text-slate-300">×</span>{standard}</span></td><td className="bg-emerald-50/60 px-6 py-5 font-semibold text-emerald-700"><span className="flex items-start gap-2"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />{otika}</span></td></tr>)}</tbody>
          </table>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-500">Catatan: parameter dan event yang dapat digunakan bergantung pada payload, konfigurasi, izin, serta ketentuan Meta yang berlaku.</p>
      </div></section>}

      <section className={`section ${featureKey === "meta-capi" ? "bg-white" : "bg-slate-50"}`}><div className="container-tight"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><span className="eyebrow">Cara mulai</span><h2 className="mt-4">Didampingi dari kebutuhan sampai siap digunakan</h2><p className="mt-5 text-slate-600">Setiap bisnis punya kondisi berbeda. OTIKA membantu memilih alur yang relevan, bukan memaksakan semua fitur sekaligus.</p></div><div className="space-y-4">{feature.steps.map((step,index) => <article className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6" key={step.title}><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary font-bold text-white">{index + 1}</span><div><h3 className="text-lg font-bold">{step.title}</h3><p className="mt-2 leading-relaxed text-slate-600">{step.text}</p></div></article>)}</div></div>{feature.note && <p className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900"><strong>Catatan:</strong> {feature.note}</p>}</div></section>

      <section className="bg-primary py-16 text-white"><div className="container-tight text-center"><h2 className="text-3xl md:text-4xl">Belum yakin fitur mana yang cocok?</h2><p className="mx-auto mt-4 max-w-2xl text-sky-50">Ceritakan alur bisnis Anda. Tim OTIKA akan membantu memetakan kebutuhan sebelum Anda memilih implementasi.</p><a href={consultationUrl(`${feature.label} CTA`)} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-primary">Chat Admin OTIKA <ArrowRight className="h-4 w-4" /></a></div></section>
    </main>
    <Footer />
  </div>;
};

export default FeaturePage;
