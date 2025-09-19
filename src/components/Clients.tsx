
const Clients = () => {
  const clients = [
    {
      name: "SKB Karanganyar",
      logo: "https://otika.biz.id/wp-content/uploads/2024/10/photo-Profil-SKB-150x150.jpg",
      link: "https://s.id/skbkaranganyar"
    },
    {
      name: "Bakpia Wirda",
      logo: "https://otika.biz.id/wp-content/uploads/2025/02/Mask-group-e1738549093434.webp",
      link: "https://wa.me/6282134065599"
    },
    {
      name: "True Love",
      logo: "https://otika.biz.id/wp-content/uploads/2025/01/True-Love.webp",
      link: "https://wa.me/6283831758025"
    },
    {
      name: "Nur Ramadhan",
      logo: "https://otika.biz.id/wp-content/uploads/2025/03/Nur-Ramadhan-Squad-Muda.webp",
      link: "https://www.nurramadhan.site/"
    },
    {
      name: "Bule Pro Apparel",
      logo: "https://otika.biz.id/wp-content/uploads/2025/01/Bule-Pro-Apparel.webp",
      link: "https://wa.me/628978130907"
    },
    {
      name: "Fit Motor Tegal",
      logo: "/lovable-uploads/75122380-2821-4162-a300-869d7f57e0f7.png",
      link: "https://wa.me/6285799272526"
    },
    {
      name: "PT Megacon Bangun Perkasa",
      logo: "https://megaconperkasa.com/wp-content/uploads/2022/09/logo-megacon-precast.png.pagespeed.ce.IKReW0H-aG.png",
      link: "https://megaconperkasa.com/"
    },
    {
      name: "Warung Rupa Rupa Japan",
      logo: "/lovable-uploads/warung-rupa-rupa-logo.png",
      link: "https://bit.ly/Katalog_2025_Januari"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dipercaya oleh</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai perusahaan dan organisasi telah mempercayai layanan kami untuk mengembangkan bisnis mereka
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 items-center">
          {clients.map((client, index) => (
            <a 
              key={index} 
              href={client.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="w-20 h-20 mb-3 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                {client.name}
              </span>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Bergabunglah dengan klien-klien terpercaya kami
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
