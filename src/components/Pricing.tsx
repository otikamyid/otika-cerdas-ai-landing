
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section id="pricing" className="section relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-50/30"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-300/8 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20 mb-6">
              💰 Harga Terjangkau
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
            <span className="text-gray-900">Paket Layanan</span><br />
            <span className="gradient-text">Otika</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            Paket Chatbot yang membuat CS Anda super fast response tanpa ngeluh dan tanpa menuntut naik gaji. Tentunya jauh <em className="gradient-text">di bawah UMR</em> daerah manapun.
          </p>
          <p className="text-sm text-gray-500">
            Keterangan: live agent adalah CS manusia yang ditugaskan untuk mengambil alih AI apabila dibutuhkan support real CS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Pricing Card 1 */}
          <div className="pricing-card h-full">
            <div className="text-center mb-8">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                  ⚡ Basic Plan
                </span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4">Paket SMART</h3>
              <div className="flex justify-center items-end mb-6">
                <span className="text-6xl font-bold gradient-text">Rp 96k</span>
                <span className="text-gray-500 ml-3 text-lg">/ bulan</span>
              </div>
            </div>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <span className="text-gray-700">Schedule/Penjadwalan AI On / Off</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <span className="text-gray-700">Kondisi pengendali AI Bot On / Off</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <span className="text-gray-700">Memanggil agent/CS manusia ketika membutuhkan support manusia</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <span className="text-gray-700">Auto Off ketika intervensi manusia</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <span className="text-gray-700">Daya Ingat</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <span className="text-gray-700">300 pertanyaan/hari</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <span className="text-gray-700">24 Jam NonStop</span>
              </div>
            </div>
            
            <button className="btn-secondary w-full">
              <a href="https://otika.myr.id/membership/otika" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <span>Pilih Paket</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </button>
          </div>

          {/* Pricing Card 2 - Featured */}
          <div className="pricing-card pricing-card-highlight relative h-full">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm px-6 py-2 rounded-full font-bold shadow-lg">
                ⭐ POPULER
              </span>
            </div>
            
            <div className="text-center mb-8 pt-4">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-white/20 text-white font-semibold rounded-full text-sm mb-4">
                  🚀 Pro Plan
                </span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 text-white">Paket GENIUS</h3>
              <div className="flex justify-center items-end mb-6">
                <span className="text-6xl font-bold text-white">Rp 199k</span>
                <span className="text-white/80 ml-3 text-lg">/ bulan</span>
              </div>
            </div>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <span className="text-white font-medium">Semua Fitur SMART</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <span className="text-white">Auto Off ketika intervensi CS manusia</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <span className="text-white">Kirim Gambar katalog Produk/Jasa</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <span className="text-white">Membaca & Mempelajari Data PDF, Google Doc, Spreadsheet, Excel dll</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <span className="text-white">Daya Ingat & konteks</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <span className="text-white">Bisa Browsing Google</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <span className="text-white">Hitung ongkir langsung oleh AI</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <span className="text-white">Bisa lacak pengiriman langsung oleh AI</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <span className="text-white">Analisis gambar</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <span className="text-white">Integrasi Woocommerce WordPress</span>
              </div>
              <div className="flex items-start group">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors flex-shrink-0 mt-1">
                  <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <span className="text-white">Boleh request 1 Fitur Tambahan Custom</span>
              </div>
            </div>
            
            <button className="w-full bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105">
              <a href="https://otika.myr.id/membership/otika" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <span>Pilih Paket</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-12 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-300/5 rounded-3xl blur-xl"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20 mb-4">
                  🎯 Custom Solution
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                <span className="gradient-text">Mau Custom Request?</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Paket ini memungkinkan Admin AI Anda menjadi super Bot menyesuaikan kebutuhan tugas admin Anda yang sangat kompleks.
              </p>
              <button className="btn-primary">
                <a href="https://wa.me/6285117202425" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span>Request Fitur!</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
