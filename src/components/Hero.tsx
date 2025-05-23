
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-left animate-fade-up">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-3 md:mb-4">
              <span className="text-black">Customize </span>
              <span className="text-primary">AI Chatbot</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-4 md:mb-6 font-medium">
              Ubah Alur Penjualan dan Layanan Pelanggan dengan Teknologi AI
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              Cukup <span className="font-semibold text-primary">Rp 3000-an/hari</span> setara harga Es Teh 🤭
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-600 text-white font-medium px-6 py-3 w-full sm:w-auto"
                asChild
              >
                <a href="#pricing">Mulai Sekarang</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary-50 font-medium px-6 py-3 w-full sm:w-auto"
                asChild
              >
                <a href="#features">Pelajari Lebih Lanjut</a>
              </Button>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <img
              src="/lovable-uploads/7fbf2c0f-8809-43e7-879b-999905aa6246.png"
              alt="Otika AI Chat Assistant"
              className="mx-auto max-w-full h-auto animate-fade-in"
              loading="eager"
              width="400"
              height="300"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
