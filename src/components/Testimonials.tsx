import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  { image: "/assets/801e4c56-57a6-44e7-a0e2-e12653d0b906.png", client: "FnB Bakpia", description: "AI merespons cepat dengan pengetahuan produk yang lengkap. Pelanggan merasa dilayani dengan baik." },
  { image: "/assets/111656fd-5712-4aa1-8155-dc8ddc66129b.png", client: "Bakpia Wirda", description: "AI mampu menjelaskan detail produk, varian rasa, gambar katalog, dan harga dengan akurat." },
  { image: "/assets/3b363ba7-1bc7-4db4-86a7-677f10949bd5.png", client: "Chockles Official", description: "AI membantu menjawab pertanyaan pelanggan dan mendukung pekerjaan tim CS kami." },
  { image: "/assets/9e85a028-eaad-45e4-bf25-1ac21245740d.png", client: "True Love", description: "Sudah lebih dari 20 closing tanpa intervensi manusia. Sangat membantu otomatisasi layanan kami." },
  { image: "/assets/ce6016f6-56d1-4135-a5be-3e893efa6c0a.png", client: "Nur Ramadhan Tours", description: "Membantu kami terutama di luar hari dan jam kerja." },
  { image: "/assets/1e79055e-90e6-407e-abde-4074d8c3fcd2.png", client: "Fit Motor Tegal", description: "Awalnya dipakai satu cabang, kemudian bertambah ke cabang lain." },
  { image: "/assets/megacon-testimonial.jpeg", client: "PT Megacon Bangun Perkasa", description: "AI membantu percakapan yang berlanjut pada transaksi bernilai besar." },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const move = (direction: number) => setActive(current => (current + direction + testimonials.length) % testimonials.length);
  const item = testimonials[active];
  return <section id="testimonials" className="section bg-slate-50">
    <div className="container-tight">
      <div className="mx-auto max-w-3xl text-center"><span className="eyebrow">Cerita klien Otika</span><h2 className="mt-4">Bukan sekadar demo. Sudah dipakai bisnis sungguhan.</h2><p className="mt-5 text-lg text-slate-600">Cuplikan percakapan dan pengalaman pengguna dari beragam sektor.</p></div>
      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2" data-reveal>
        <div className="rounded-3xl bg-[#e8e1d9] p-4 shadow-xl"><img src={item.image} alt={`Cuplikan testimoni ${item.client}`} className="mx-auto max-h-[560px] w-full rounded-2xl bg-white object-contain" loading="lazy" /></div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <Quote className="h-10 w-10 text-primary/30" /><p className="mt-6 text-xl leading-relaxed text-slate-700">“{item.description}”</p><h3 className="mt-7 text-xl font-bold">{item.client}</h3>
          <div className="mt-8 flex items-center justify-between"><button className="carousel-button" onClick={() => move(-1)} aria-label="Testimoni sebelumnya"><ChevronLeft /></button><div className="flex gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => setActive(i)} aria-label={`Lihat testimoni ${i + 1}`} className={`h-2.5 rounded-full transition-all ${i === active ? "w-7 bg-primary" : "w-2.5 bg-slate-300"}`} />)}</div><button className="carousel-button" onClick={() => move(1)} aria-label="Testimoni berikutnya"><ChevronRight /></button></div>
        </div>
      </div>
    </div>
  </section>;
};

export default Testimonials;
