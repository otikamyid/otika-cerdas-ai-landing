
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/lovable-uploads/03f7a487-9b4f-44f6-b154-326c9ccbca06.png"
          alt="Background"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left animate-fade-up">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
              <span className="text-black">Customize </span>
              <span className="text-primary">AI Chatbot</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
              Ubah Alur Penjualan dan Layanan Pelanggan dengan Teknologi AI
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Cukup <span className="font-semibold text-primary">Rp 3000-an/hari</span> setara harga Es Teh 🤭
            </p>
            <div className="space-x-4 flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-600 text-white font-medium px-6 py-3"
                asChild
              >
                <a href="#pricing">Mulai Sekarang</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary-50 font-medium px-6 py-3"
                asChild
              >
                <a href="#features">Pelajari Lebih Lanjut</a>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img
              src="https://otika.biz.id/wp-content/uploads/2024/09/b7f49e08-neobot-bg.png"
              alt="Otika AI Chat Assistant"
              className="mx-auto max-w-full h-auto animate-fade-in"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
