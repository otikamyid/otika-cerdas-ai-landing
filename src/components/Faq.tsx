import { ChevronDown } from "lucide-react";
import { useState } from "react";
const faqs=[
  ["Jasa apa ini?","Otika membantu mengintegrasikan AI Agent yang disesuaikan dengan profil, produk, SOP, dan kebutuhan bisnis Anda. Tim kami membantu proses konfigurasi sampai siap digunakan."],
  ["Apakah sistemnya berlangganan?","Ya. Biaya berlangganan mencakup penggunaan sistem serta dukungan dan pemeliharaan sesuai paket atau kesepakatan layanan."],
  ["Channel apa saja yang tersedia saat ini?","Saat ini Otika fokus melayani WhatsApp dan Instagram. Messenger dan channel lainnya masih dalam tahap pengembangan."],
  ["Apakah AI bisa mengirim gambar atau video?","AI Agent dapat dikonfigurasi untuk mengirim gambar sesuai paket dan kebutuhan. Pengiriman video atau alur media khusus dapat dibahas melalui konsultasi."],
  ["Apakah ada dukungan setelah pemasangan?","Ada. Tim Otika membantu onboarding, penyusunan knowledge, evaluasi jawaban, serta panduan agar AI Agent terus relevan dengan kebutuhan bisnis."],
  ["Apakah hanya untuk toko online?","Tidak. Otika dapat digunakan untuk layanan pelanggan, pendidikan, travel, layanan publik, otomotif, properti, dan sektor lain yang banyak berinteraksi lewat chat."],
  ["Apa saja yang bisa dikustomisasi?","Knowledge produk, gaya bicara, FAQ, kualifikasi prospek, rekomendasi produk, pengiriman katalog, pencatatan lead, follow-up, handover ke admin, dan integrasi tertentu dapat dibahas sesuai kebutuhan."],
];
const Faq=()=>{const[open,setOpen]=useState(0);return <section id="faq" className="section bg-white"><div className="container-tight"><div className="mx-auto max-w-3xl text-center"><span className="eyebrow">FAQ</span><h2 className="mt-4">Yang sering ditanyakan sebelum konsultasi</h2></div><div className="mx-auto mt-12 max-w-3xl">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button className="flex w-full items-center justify-between gap-4 py-4 text-left font-semibold" onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}>{q}<ChevronDown className={`h-5 w-5 shrink-0 transition ${open===i?"rotate-180":""}`}/></button><div className={`grid transition-all ${open===i?"grid-rows-[1fr] pb-5":"grid-rows-[0fr]"}`}><p className="overflow-hidden leading-relaxed text-slate-600">{a}</p></div></div>)}</div></div></section>};
export default Faq;
