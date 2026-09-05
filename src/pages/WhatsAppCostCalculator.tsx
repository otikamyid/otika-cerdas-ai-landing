import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { consultationUrl } from "@/lib/site";
import { ArrowRight, Calculator, Info, MessageCircle, ShieldCheck } from "lucide-react";
import { useState } from "react";

const rates = {
  marketing: 586.33,
  utility: 356.65,
  service: 356.65,
};

const plans = [
  { name: "SMART", price: 145_000, description: "AI Agent untuk kebutuhan dasar" },
  { name: "GENIUS", price: 299_000, description: "AI Agent + Dashboard Web App" },
] as const;

const formatRupiah = (value: number) => new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
}).format(Math.round(value));

type SliderProps = {
  label: string;
  description: string;
  value: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  note?: string;
};

const MessageSlider = ({ label, description, value, max, step, onChange, note }: SliderProps) => (
  <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 sm:p-6">
    <div className="flex items-start justify-between gap-4">
      <div>
        <label htmlFor={`slider-${label}`} className="font-bold text-white">{label}</label>
        <p className="mt-1 text-sm text-slate-400">{description}</p>
      </div>
      <span className="shrink-0 font-mono text-sm font-bold text-cyan-300">{value.toLocaleString("id-ID")} pesan</span>
    </div>
    <input
      id={`slider-${label}`}
      type="range"
      min="0"
      max={max}
      step={step}
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
      className="mt-6 h-2 w-full cursor-pointer accent-sky-400"
    />
    <div className="mt-2 flex justify-between text-xs text-slate-500">
      <span>0{note ? ` (${note})` : ""}</span>
      <span>{max.toLocaleString("id-ID")} pesan</span>
    </div>
  </div>
);

const WhatsAppCostCalculator = () => {
  const [planIndex, setPlanIndex] = useState(0);
  const [marketing, setMarketing] = useState(0);
  const [utility, setUtility] = useState(0);
  const [service, setService] = useState(1_000);

  const plan = plans[planIndex];
  const billableService = Math.max(0, service - 1_000);
  const marketingCost = marketing * rates.marketing;
  const utilityCost = utility * rates.utility;
  const serviceCost = billableService * rates.service;
  const metaCost = marketingCost + utilityCost + serviceCost;
  const total = plan.price + metaCost;

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Kalkulator Biaya WhatsApp API Indonesia | OTIKA"
        description="Hitung estimasi biaya WhatsApp Business Platform Indonesia mulai 1 Oktober 2026 berdasarkan paket OTIKA dan volume pesan Meta."
        path="/kalkulator-biaya-whatsapp"
      />
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24">
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="container-tight relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sky-300">
                <Calculator className="h-4 w-4" /> Berlaku mulai 1 Oktober 2026
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">Hitung perkiraan biaya <span className="text-sky-400">WhatsApp API</span> bulanan Anda</h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Gabungkan biaya paket OTIKA dengan estimasi tarif pesan Meta berdasarkan volume pemakaian bisnis Anda.</p>
            </div>

            <div className="mt-12 grid gap-8 xl:grid-cols-[1.55fr_.75fr]">
              <div className="space-y-5">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 sm:p-6">
                  <h2 className="text-lg font-bold text-white">1. Pilih paket OTIKA</h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {plans.map((item, index) => (
                      <button
                        type="button"
                        key={item.name}
                        onClick={() => setPlanIndex(index)}
                        aria-pressed={planIndex === index}
                        className={`rounded-xl border p-4 text-left transition ${planIndex === index ? "border-sky-400 bg-sky-400/10 ring-1 ring-sky-400" : "border-slate-700 bg-slate-950/40 hover:border-slate-500"}`}
                      >
                        <span className="font-bold text-white">Paket {item.name}</span>
                        <span className="mt-2 block text-sm font-semibold text-sky-300">{formatRupiah(item.price)}/bulan</span>
                        <span className="mt-1 block text-xs text-slate-400">{item.description}</span>
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm leading-relaxed text-amber-100">
                    <strong className="text-amber-300">Khusus Paket CUSTOM:</strong> biaya layanan dan implementasi OTIKA mengikuti kebutuhan serta kesepakatan proyek. Biaya penggunaan WhatsApp Cloud API tidak termasuk biaya paket dan menjadi tanggung jawab masing-masing klien.
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-lg font-bold text-white">2. Perkirakan volume pesan per bulan</h2>
                  <div className="space-y-4">
                    <MessageSlider label="Pesan marketing" description="Broadcast, promosi, dan re-engagement" value={marketing} max={20_000} step={100} onChange={setMarketing} />
                    <MessageSlider label="Pesan utility" description="Order, pembayaran, dan notifikasi transaksional" value={utility} max={10_000} step={100} onChange={setUtility} />
                    <MessageSlider label="Service (balas pesan)" description="Balasan bebas di dalam jendela layanan pelanggan 24 jam" value={service} max={10_000} step={100} onChange={setService} note="1.000 pertama gratis" />
                  </div>
                </div>
              </div>

              <aside className="h-fit rounded-2xl border border-sky-400/30 bg-slate-900/80 p-6 xl:sticky xl:top-24">
                <p className="text-xs font-bold uppercase tracking-widest text-sky-300">Ringkasan estimasi bulanan</p>
                <p className="mt-2 text-sm text-slate-400">Paket OTIKA + estimasi pesan Meta</p>
                <dl className="mt-7 space-y-4 text-sm">
                  <div className="flex justify-between gap-4 border-b border-slate-700 pb-4"><dt className="text-slate-400">Paket {plan.name}</dt><dd className="font-semibold">{formatRupiah(plan.price)}</dd></div>
                  <div className="flex justify-between gap-4 border-b border-slate-700 pb-4"><dt className="text-slate-400">Marketing Meta</dt><dd className="font-semibold">{formatRupiah(marketingCost)}</dd></div>
                  <div className="flex justify-between gap-4 border-b border-slate-700 pb-4"><dt className="text-slate-400">Utility Meta</dt><dd className="font-semibold">{formatRupiah(utilityCost)}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-slate-400">Service Meta <span className="block text-xs">({billableService.toLocaleString("id-ID")} berbayar)</span></dt><dd className="font-semibold">{formatRupiah(serviceCost)}</dd></div>
                </dl>
                <div className="mt-7 rounded-xl border border-sky-400/30 bg-primary-900/70 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-sky-300">Total estimasi / bulan</p>
                  <p className="mt-2 text-3xl font-extrabold sm:text-4xl">{formatRupiah(total)}</p>
                  <p className="mt-2 text-xs text-slate-400">Biaya pesan Meta: {formatRupiah(metaCost)}</p>
                </div>
                <a href={consultationUrl("kalkulator biaya WhatsApp API")} target="_blank" rel="noreferrer" className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-slate-950 transition hover:bg-sky-50">
                  Konsultasikan Hasil <ArrowRight className="h-4 w-4" />
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section className="section bg-sky-50/60">
          <div className="container-tight grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h2 className="mt-4 text-2xl font-bold">Tarif yang digunakan</h2>
              <ul className="mt-5 space-y-3 text-slate-600">
                <li>Marketing: <strong className="text-slate-900">Rp586,33/pesan</strong></li>
                <li>Utility: <strong className="text-slate-900">Rp356,65/pesan</strong></li>
                <li>Service: <strong className="text-slate-900">Rp356,65/pesan</strong> setelah 1.000 pesan gratis per nomor/bulan</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <Info className="h-8 w-8 text-amber-600" />
              <h2 className="mt-4 text-2xl font-bold text-slate-900">Penting sebelum membuat anggaran</h2>
              <p className="mt-4 leading-relaxed text-slate-700">Kalkulator ini adalah simulasi, belum termasuk PPN, biaya model AI, API tambahan, diskon volume, atau kebutuhan implementasi khusus. Tagihan aktual mengikuti kategori pesan, tujuan negara penerima, serta rate card Meta yang berlaku.</p>
              <p className="mt-4 rounded-xl border border-amber-200 bg-white/70 p-4 text-sm leading-relaxed text-slate-700"><strong className="text-slate-900">Disclaimer Paket CUSTOM:</strong> seluruh biaya pemakaian WhatsApp Cloud API dibayarkan dan menjadi tanggung jawab masing-masing klien sesuai tagihan Meta atau metode pembayaran yang terhubung pada akun WhatsApp Business milik klien.</p>
              <a href="https://developers.facebook.com/docs/whatsapp/pricing/" target="_blank" rel="noreferrer" className="mt-5 inline-flex font-semibold text-primary hover:underline">Lihat informasi harga resmi Meta <ArrowRight className="ml-2 h-4 w-4" /></a>
            </article>
          </div>
          <div className="container-tight mt-8 text-center">
            <a href={consultationUrl("halaman estimasi biaya WhatsApp API")} target="_blank" rel="noreferrer" className="btn-primary gap-2"><MessageCircle className="h-5 w-5" /> Tanya Admin OTIKA</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhatsAppCostCalculator;
