
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-16 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left animate-fade-up">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
              Digital <span className="text-primary">Platform</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
              Ubah Alur Penjualan dan Layanan Pelanggan dengan Teknologi AI
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Cukup <span className="font-semibold text-primary">Rp 3000-an/hari</span> setara harga Es Teh 🤭
            </p>
            <div className="space-x-4">
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
            <div className="absolute -z-10 bg-primary-100 rounded-full w-[450px] h-[450px] opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
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
