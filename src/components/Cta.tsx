
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Cta = () => {
  return (
    <section id="contact" className="bg-primary-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mau Custom Request?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Ceritakan kebutuhan bisnis Anda dan tim kami akan membantu memberikan solusi yang tepat untuk meningkatkan efisiensi bisnis Anda
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-600 text-white px-6 py-6 text-lg w-full sm:w-auto"
            asChild
          >
            <a 
              href="https://wa.me/6285117202425" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Konsultasi Gratis</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
