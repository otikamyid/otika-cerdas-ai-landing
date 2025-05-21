
const Services = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-700 uppercase mb-2">What We Do</h2>
          <h3 className="text-3xl font-bold mb-4">Layanan Utama saat ini dari OTIKA</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Membantu Alur Penjualan dan Layanan Pelanggan sehingga pekerjaan CS Anda jadi ringan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="p-1 bg-white rounded-xl shadow-lg">
              <img
                src="https://otika.biz.id/wp-content/uploads/2024/09/c2694067-icon-22.png"
                alt="Automated AI Chatbots"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Automated AI Chatbots</h3>
            <p className="text-lg text-gray-600 mb-6">
              Layanan chat untuk membantu proses penjualan dan layanan pelanggan berbasis AI yang bahasanya nggak kaku seperti bot!
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Berkomunikasi seperti manusia</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Mampu mengirim gambar katalog produk</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Bekerja 24/7 tanpa lelah</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-24">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">CRM Inbox</h3>
            <p className="text-lg text-gray-600 mb-6">
              Layanan CRM Integrasi berbagai platform chat sosmed Anda
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Kelola semua pesan dari berbagai platform</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Tampilan antarmuka yang mudah digunakan</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Analisis percakapan dan performa</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="p-1 bg-white rounded-xl shadow-lg">
              <img
                src="https://otika.biz.id/wp-content/uploads/2024/09/31cefb9c-img-icon4.png"
                alt="CRM Inbox"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Tujuan kita adalah membuat "Bisnis Anda jalan, CS Anda bahagia 🤭"
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Kita memahami tidak sepenuhnya bisnis itu semua di-handle oleh AI, Anda juga tetap butuh tenaga manusia untuk handle bisnis Anda. AI tidak menggantikan manusia, tapi membantu pekerjaan manusia dalam konteks ini meringankan beban CS dari sisi <strong>Waktu & Tenaga</strong>. Tentu dalam setiap bisnis output utama adalah <strong>KONVERSI PENJUALAN meningkat</strong>. Maka dari itu OTIKA menawarkan kemudahan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
