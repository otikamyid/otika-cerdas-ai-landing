
import {
  Clock,
  MessagesSquare,
  TrendingUp,
  Puzzle,
  ShieldCheck,
} from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Balas Ratusan Chat Sampai Closing Full Autopilot!
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Otika adalah Layanan Jasa Integrasi Customer Service Berbasis AI (Artificial Intelligence) dengan WhatsApp dan berbagai aplikasi pesan singkat yang bekerja seperti CS Manusia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center mb-5">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Respon Cepat 24/7</h3>
            <p className="text-gray-600">
              AI Chatbot yang merespon pelanggan Anda secara instan kapanpun, bahkan di luar jam kerja.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center mb-5">
              <MessagesSquare className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Bahasa Natural</h3>
            <p className="text-gray-600">
              Teknologi AI canggih yang berkomunikasi dengan bahasa natural, tidak kaku seperti chatbot biasa.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center mb-5">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Konversi Tinggi</h3>
            <p className="text-gray-600">
              Dirancang untuk membantu proses penjualan dari pemberian informasi hingga closing transaksi.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <div className="rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center mb-5">
              <Puzzle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Integrasi Mudah</h3>
            <p className="text-gray-600">
              Pasang pada WhatsApp biasa maupun WhatsApp Bisnis dengan cepat dan langsung bisa digunakan.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="feature-card">
            <div className="rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center mb-5">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Aman & Handal</h3>
            <p className="text-gray-600">
              Keamanan data terjamin dengan infrastruktur yang stabil dan handal untuk keperluan bisnis.
            </p>
          </div>

          {/* Feature 6 — koin Rupiah kustom (lucide tidak punya simbol Rp) */}
          <div className="feature-card">
            <div className="rounded-full bg-primary-100 w-16 h-16 flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <text
                  x="12"
                  y="12"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="8"
                  fontWeight="700"
                  fill="currentColor"
                  stroke="none"
                  fontFamily="Poppins, sans-serif"
                >
                  Rp
                </text>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Hemat Biaya</h3>
            <p className="text-gray-600">
              Biaya jauh lebih murah dibandingkan mempekerjakan CS manusia - mulai dari Rp 5000-an/hari.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
