
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section id="pricing" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-700 uppercase mb-2">Layanan utama kami</h2>
          <h3 className="text-3xl font-bold mb-6">Paket Layanan Otika</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Paket Chatbot yang membuat CS Anda super fast response tanpa ngeluh dan tanpa menuntut naik gaji. Tentunya jauh <em>di bawah UMR</em> daerah manapun.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Keterangan: live agent adalah CS manusia yang ditugaskan untuk mengambil alih AI apabila dibutuhkan support real CS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pricing Card 1 */}
          <div className="pricing-card">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-1">Paket SMART</h3>
              <div className="flex justify-center items-end mb-6">
                <span className="text-5xl font-bold">Rp 96k</span>
                <span className="text-gray-500 ml-2">/ bulan</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Schedule/Penjadwalan AI On / Off</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Kondisi pengendali AI Bot On / Off</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Memanggil agent/CS manusia ketika membutuhkan support manusia</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Auto Off ketika intervensi manusia</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Daya Ingat</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>300 pertanyaan/hari</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>24 Jam NonStop</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-primary hover:bg-primary-600 text-white font-medium py-3"
              asChild
            >
              <a href="https://otika.biz.id/cart/?add-to-cart=144" target="_blank" rel="noopener noreferrer">
                Pilih Paket
              </a>
            </Button>
          </div>

          {/* Pricing Card 2 */}
          <div className="pricing-card pricing-card-highlight">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg font-semibold">
              POPULER
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-1">Paket GENIUS</h3>
              <div className="flex justify-center items-end mb-6">
                <span className="text-5xl font-bold">Rp 199k</span>
                <span className="text-gray-500 ml-2">/ bulan</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span className="font-medium">Semua Fitur SMART</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Auto Off ketika intervensi CS manusia</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Kirim Gambar katalog Produk/Jasa</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Membaca & Mempelajari Data PDF, Google Doc, Spreadsheet, Excel dll</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Daya Ingat & konteks</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Bisa Browsing Google</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Hitung ongkir langsung oleh AI</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Bisa lacak pengiriman langsung oleh AI</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Analisis gambar</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Integrasi Woocommerce WordPress</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                <span>Boleh request 1 Fitur Tambahan Custom</span>
              </li>
            </ul>
            
            <Button 
              className="w-full bg-primary hover:bg-primary-600 text-white font-medium py-3"
              asChild
            >
              <a href="https://otika.biz.id/cart/?add-to-cart=146" target="_blank" rel="noopener noreferrer">
                Pilih Paket
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center px-4">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Mau Custom Request?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Paket ini memungkinkan Admin AI Anda menjadi super Bot menyesuaikan kebutuhan tugas admin Anda yang sangat kompleks.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-600 text-white font-medium px-4 sm:px-8 py-3 w-full sm:w-auto"
              asChild
            >
              <a href="https://wa.me/6285117202425" target="_blank" rel="noopener noreferrer">
                Hubungi Kami untuk Custom Request
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
