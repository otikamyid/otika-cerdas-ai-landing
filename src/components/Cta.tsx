
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Cta = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-primary-700"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/50 via-transparent to-primary-300/30"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-light"></div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/15 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white/20 text-white font-semibold rounded-full text-sm border border-white/30 mb-6">
              💬 Join Community
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight">
            Gabung Grup WhatsApp<br />
            <span className="text-white/90">untuk Diskusi!</span>
          </h2>
          
          <p className="text-white/90 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Dapatkan informasi terbaru, tips, dan bantuan langsung dari tim kami. Mari bergabung dengan komunitas pengguna Otika.
          </p>
          
          <button className="inline-flex items-center gap-4 bg-white text-primary hover:bg-gray-100 font-bold py-6 px-10 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl group">
            <a 
              href="https://chat.whatsapp.com/B9l4tLwJoWNHPAfP8bllre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 6.32C16.16 4.9 14.13 4.07 12 4.07C7.64 4.07 4.07 7.64 4.07 12C4.07 13.77 4.61 15.54 5.59 17L4 20L7.12 18.93C8.54 19.82 10.15 20.24 11.77 20.24H11.78C16.14 20.24 19.93 16.67 19.93 12.33C19.93 10.15 19.06 8.14 17.6 6.32ZM12 18.89C10.56 18.89 9.13 18.5 7.9 17.75L7.58 17.56L5.82 18.24L6.54 16.57L6.32 16.24C5.5 14.95 5.05 13.53 5.05 12.01C5.05 8.18 8.18 5.05 12.01 5.05C13.78 5.05 15.48 5.75 16.67 6.94C17.86 8.14 18.56 9.83 18.56 11.61C18.55 15.46 15.83 18.89 12 18.89Z" />
                  <path d="M15.84 13.41C15.64 13.35 14.76 12.93 14.57 12.87C14.39 12.82 14.27 12.8 14.13 13C14 13.2 13.67 13.59 13.56 13.73C13.44 13.87 13.33 13.88 13.13 13.82C12.66 13.64 12.21 13.39 11.81 13.07C11.46 12.77 11.13 12.45 10.83 12.1C10.71 11.9 10.81 11.79 10.9 11.69C10.99 11.59 11.09 11.44 11.19 11.33C11.29 11.21 11.34 11.13 11.4 11C11.45 10.87 11.43 10.76 11.39 10.67C11.35 10.58 11.03 9.7 10.88 9.3C10.73 8.91 10.57 8.91 10.45 8.91C10.33 8.9 10.19 8.9 10.06 8.9C9.93 8.9 9.72 8.94 9.54 9.14C9.36 9.33 8.92 9.76 8.92 10.63C8.92 11.5 9.54 12.35 9.62 12.47C9.73 12.61 11.02 14.53 12.95 15.33C14.15 15.83 14.62 15.85 15.21 15.75C15.58 15.69 16.28 15.31 16.43 14.83C16.59 14.36 16.59 13.95 16.54 13.86C16.5 13.77 16.36 13.72 16.16 13.67C16.06 13.65 15.95 13.62 15.84 13.6V13.41Z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-lg font-bold">Gabung Grup WhatsApp</div>
                <div className="text-sm text-gray-600">Diskusi & Support 24/7</div>
              </div>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
