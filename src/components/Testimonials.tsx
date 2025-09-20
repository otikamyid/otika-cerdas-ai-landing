import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      image: "/lovable-uploads/801e4c56-57a6-44e7-a0e2-e12653d0b906.png",
      client: "FnB Bakpia",
      description: "AI merespons dengan cepat dan pengetahuan tentang produk yang lengkap. Pelanggan merasa dilayani dengan baik."
    },
    {
      image: "/lovable-uploads/111656fd-5712-4aa1-8155-dc8ddc66129b.png",
      client: "Bakpia Wirda",
      description: "AI mampu menjelaskan detail produk dan varian rasa, bahkan menampilkan gambar katalog produk dengan harga yang akurat."
    },
    {
      image: "/lovable-uploads/3b363ba7-1bc7-4db4-86a7-677f10949bd5.png",
      client: "Chockles Official",
      description: "Setelah menggunakan Otika, AI telah membantu menjawab pertanyaan pelanggan dengan sangat baik dan mendukung tim CS kami."
    },
    {
      image: "/lovable-uploads/9e85a028-eaad-45e4-bf25-1ac21245740d.png",
      client: "True Love",
      description: "Sudah lebih dari 20 closing tanpa intervensi manusia. Benar-benar membantu otomatisasi layanan kami."
    },
    {
      image: "/lovable-uploads/ce6016f6-56d1-4135-a5be-3e893efa6c0a.png",
      client: "Nur Ramadhan Tours",
      description: "Sampai pada titik sekarang alhamdulillah membantu kami, terutama saat diluar hari dan jam kerja."
    },
    {
      image: "/lovable-uploads/1e79055e-90e6-407e-abde-4074d8c3fcd2.png",
      client: "Fit Motor Tegal",
      description: "Awalnya dipake 1 cabang, sekarang nambah ke cabang lain. Contoh: kenaikan jumlah pelanggan yg datang setelah pake OTIKA."
    },
    {
      image: "/lovable-uploads/megacon-testimonial.jpeg",
      client: "PT Megacon Bangun Perkasa",
      description: "Transaksinya lumayan besar ya Pak, yang udah deal deal pasca AI ini? Alhamdulillah mas sampai Milyaran iya sampai ratusan juta."
    }
  ];
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-white"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-300/8 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20 mb-6">
              ⭐ Testimoni
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
            <span className="text-gray-900">Yang dikatakan oleh</span><br />
            <span className="gradient-text">pengguna layanan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Berikut sedikit testimoni dari beberapa pengguna layanan kami dari berbagai sektor.
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-300/10 rounded-3xl blur-2xl scale-110"></div>
              <div className="relative whatsapp-pattern rounded-3xl shadow-2xl overflow-hidden p-4">
                <div className="bg-white/90 backdrop-blur-xl border border-white/30 rounded-2xl p-2">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={`Testimoni dari ${testimonials[activeIndex].client}`} 
                    className="w-full h-auto max-h-[600px] rounded-xl object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{testimonials[activeIndex].client}</h4>
                    <div className="flex mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed italic">
                  "{testimonials[activeIndex].description}"
                </p>
              </div>
              
              <div className="flex justify-between items-center">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6 text-primary" />
                </button>
                
                <div className="flex space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-3 w-3 rounded-full transition-all duration-300 ${
                        index === activeIndex 
                          ? 'bg-primary scale-125' 
                          : 'bg-gray-300 hover:bg-primary/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6 text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold mb-4">Integrasi ke banyak channel Inbox</h3>
            <p className="text-lg text-gray-600 italic">(dalam tahap pengembangan)</p>
            <p className="text-gray-600 mt-4">
              Selain integrasi ke WhatsApp, bisa juga integrasi ke berberapa aplikasi pesan singkat lho.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </div>
              <span className="mt-2 text-sm font-medium">Messenger</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C14.717 2 17.157 2.004 18.543 2.464C19.93 2.924 21.076 4.07 21.536 5.457C22 6.843 22 9.283 22 12C22 14.717 22 17.157 21.536 18.543C21.076 19.93 19.93 21.076 18.543 21.536C17.157 22 14.717 22 12 22C9.283 22 6.843 22 5.457 21.536C4.07 21.076 2.924 19.93 2.464 18.543C2.004 17.157 2 14.717 2 12C2 9.283 2.004 6.843 2.464 5.457C2.924 4.07 4.07 2.924 5.457 2.464C6.843 2 9.283 2 12 2ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9ZM18 6.5C18 7.32843 17.3284 8 16.5 8C15.6716 8 15 7.32843 15 6.5C15 5.67157 15.6716 5 16.5 5C17.3284 5 18 5.67157 18 6.5Z" />
                </svg>
              </div>
              <span className="mt-2 text-sm font-medium">Instagram</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-400 text-white p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.47-1.13 7.29-.14.74-.42 1.2-.68 1.23-.58.05-1.02-.38-1.58-.75-1.28-.67-1.68-.92-2.7-1.55-.59-.35-.87-.53-.25-1.16.14-.14 2.62-2.49 2.68-2.71.01-.04.02-.08-.02-.11-.04-.03-.08-.02-.12 0-.06.02-1.78 1.14-2.27 1.45-.84.44-1.47.44-1.81.42-.38-.02-1.13-.25-1.13-.25s-.63-.39-.51-.87c.08-.3.51-.74 1.09-1.13 3.82-2.6 4.31-3.06 5.57-3.06.38 0 .66.18.66.18s.16.13.11.5z" />
                </svg>
              </div>
              <span className="mt-2 text-sm font-medium">Telegram</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-500 text-white p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 6.32C16.16 4.9 14.13 4.07 12 4.07C7.64 4.07 4.07 7.64 4.07 12C4.07 13.77 4.61 15.54 5.59 17L4 20L7.12 18.93C8.54 19.82 10.15 20.24 11.77 20.24H11.78C16.14 20.24 19.93 16.67 19.93 12.33C19.93 10.15 19.06 8.14 17.6 6.32ZM12 18.89C10.56 18.89 9.13 18.5 7.9 17.75L7.58 17.56L5.82 18.24L6.54 16.57L6.32 16.24C5.5 14.95 5.05 13.53 5.05 12.01C5.05 8.18 8.18 5.05 12.01 5.05C13.78 5.05 15.48 5.75 16.67 6.94C17.86 8.14 18.56 9.83 18.56 11.61C18.55 15.46 15.83 18.89 12 18.89Z" />
                  <path d="M15.84 13.41C15.64 13.35 14.76 12.93 14.57 12.87C14.39 12.82 14.27 12.8 14.13 13C14 13.2 13.67 13.59 13.56 13.73C13.44 13.87 13.33 13.88 13.13 13.82C12.66 13.64 12.21 13.39 11.81 13.07C11.46 12.77 11.13 12.45 10.83 12.1C10.71 11.9 10.81 11.79 10.9 11.69C10.99 11.59 11.09 11.44 11.19 11.33C11.29 11.21 11.34 11.13 11.4 11C11.45 10.87 11.43 10.76 11.39 10.67C11.35 10.58 11.03 9.7 10.88 9.3C10.73 8.91 10.57 8.91 10.45 8.91C10.33 8.9 10.19 8.9 10.06 8.9C9.93 8.9 9.72 8.94 9.54 9.14C9.36 9.33 8.92 9.76 8.92 10.63C8.92 11.5 9.54 12.35 9.62 12.47C9.73 12.61 11.02 14.53 12.95 15.33C14.15 15.83 14.62 15.85 15.21 15.75C15.58 15.69 16.28 15.31 16.43 14.83C16.59 14.36 16.59 13.95 16.54 13.86C16.5 13.77 16.36 13.72 16.16 13.67C16.06 13.65 15.95 13.62 15.84 13.6V13.41Z" />
                </svg>
              </div>
              <span className="mt-2 text-sm font-medium">WhatsApp</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-red-500 text-white p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path fill="white" d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <span className="mt-2 text-sm font-medium">Email</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
