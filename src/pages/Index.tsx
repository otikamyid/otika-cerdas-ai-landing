import ChannelFlow from "@/components/ChannelFlow";
import CrmFeatures from "@/components/CrmFeatures";
import Clients from "@/components/Clients";
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
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("v3-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <div className="v3-page">
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
    <Testimonials />
    <Faq />
    <Cta />
  </main>
  <Footer />
</div>;
};

export default Index;
