
import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load components that aren't immediately visible
const Clients = lazy(() => import("@/components/Clients"));
const Features = lazy(() => import("@/components/Features"));
const Services = lazy(() => import("@/components/Services"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Faq = lazy(() => import("@/components/Faq"));
const Cta = lazy(() => import("@/components/Cta"));
const Footer = lazy(() => import("@/components/Footer"));

// Simple loading component
const LoadingFallback = () => <div className="min-h-16 w-full bg-gray-50"></div>;

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Clients />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Features />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Faq />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Cta />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
