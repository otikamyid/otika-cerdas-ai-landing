import ChannelFlow from "@/components/ChannelFlow";
import CrmFeatures from "@/components/CrmFeatures";
import Clients from "@/components/Clients";
import ConsultationCta from "@/components/ConsultationCta";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Seo from "@/components/Seo";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const Index = () => <div className="min-h-screen bg-white">
  <Seo title="Customize AI Agent WhatsApp & Instagram | OTIKA" description="AI Agent yang disesuaikan dengan produk, SOP, gaya komunikasi, dan alur bisnis Anda. Konsultasi integrasi WhatsApp dan Instagram bersama Otika." />
  <Navbar />
  <main>
    <Hero />
    <Clients />
    <Features />
    <ChannelFlow />
    <CrmFeatures />
    <Services />
    <Pricing />
    <ConsultationCta />
    <Testimonials />
    <Faq />
    <Cta />
  </main>
  <Footer />
</div>;

export default Index;
