
const Services = () => {
  return (
    <section id="services" className="section relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 to-white"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-300/8 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20 mb-6">
              💼 Layanan Kami
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
            <span className="text-gray-900">Layanan Utama</span><br />
            <span className="gradient-text">dari OTIKA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Membantu Alur Penjualan dan Layanan Pelanggan sehingga pekerjaan CS Anda jadi ringan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-300/10 rounded-3xl blur-2xl scale-110"></div>
              
              {/* Modern glass frame */}
              <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-4 shadow-2xl float-animation">
                <img
                  src="https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Automated AI Chatbots"
                  className="w-full h-[350px] object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                🤖 AI Powered
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="gradient-text">Automated AI Chatbots</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Layanan chat untuk membantu proses penjualan dan layanan pelanggan berbasis AI yang bahasanya nggak kaku seperti bot!
            </p>
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Berkomunikasi seperti manusia</span>
              </div>
              <div className="flex items-start group">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Mampu mengirim gambar katalog produk</span>
              </div>
              <div className="flex items-start group">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Bekerja 24/7 tanpa lelah</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                📊 CRM System
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="gradient-text">CRM Inbox</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Layanan CRM Integrasi berbagai platform chat sosmed Anda
            </p>
            <div className="space-y-4">
              <div className="flex items-start group">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Kelola semua pesan dari berbagai platform</span>
              </div>
              <div className="flex items-start group">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Tampilan antarmuka yang mudah digunakan</span>
              </div>
              <div className="flex items-start group">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">Analisis percakapan dan performa</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-300/10 rounded-3xl blur-2xl scale-110"></div>
              
              {/* Modern glass frame */}
              <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/30 rounded-3xl p-4 shadow-2xl float-animation" style={{animationDelay: '2s'}}>
                <img
                  src="https://images.pexels.com/photos/8284724/pexels-photo-8284724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="CRM Inbox"
                  className="w-full h-[350px] object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="relative bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-12 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-300/5 rounded-3xl blur-xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-8">
                <span className="text-gray-900">Tujuan kita adalah membuat</span><br />
                <span className="gradient-text">"Bisnis Anda jalan, CS Anda bahagia 🤭"</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
                Kita memahami tidak sepenuhnya bisnis itu semua di-handle oleh AI, Anda juga tetap butuh tenaga manusia untuk handle bisnis Anda. AI tidak menggantikan manusia, tapi membantu pekerjaan manusia dalam konteks ini meringankan beban CS dari sisi <strong className="text-primary">Waktu & Tenaga</strong>. Tentu dalam setiap bisnis output utama adalah <strong className="gradient-text">KONVERSI PENJUALAN meningkat</strong>. Maka dari itu OTIKA menawarkan kemudahan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
