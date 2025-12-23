import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Zap } from "lucide-react";

const ConsultationCta = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Custom AI Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Butuh AI Agent yang Lebih Personal?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Jadwalkan konsultasi gratis untuk customisasi AI Agent sesuai kebutuhan bisnis Anda, 
            baik untuk Customer Service maupun Automation proses bisnis
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 text-left">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">AI Customer Service</h3>
                <p className="text-sm text-muted-foreground">
                  Chatbot cerdas yang memahami konteks bisnis Anda dan melayani pelanggan 24/7
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 text-left">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Business Automation</h3>
                <p className="text-sm text-muted-foreground">
                  Otomatisasi proses bisnis dengan AI untuk efisiensi dan produktivitas maksimal
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a 
              href="https://wa.me/6285799272526?text=Halo%20OTIKA%2C%20saya%20ingin%20konsultasi%20mengenai%20customisasi%20AI%20Agent%20untuk%20bisnis%20saya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Jadwalkan Konsultasi Gratis
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Konsultasi gratis tanpa kewajiban • Respon dalam 1x24 jam
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCta;
