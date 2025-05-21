
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
      link: "#"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-8">Dipercaya oleh</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {clients.map((client, index) => (
            <a 
              key={index} 
              href={client.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-center transition-all duration-300 hover:opacity-80"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-16 w-16 object-contain rounded-full"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
