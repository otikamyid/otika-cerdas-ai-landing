import { lazy, Suspense, type ReactElement } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const LegalPage = lazy(() => import("./pages/LegalPage"));
const FeaturePage = lazy(() => import("./pages/FeaturePage"));
const WhatsAppCostCalculator = lazy(() => import("./pages/WhatsAppCostCalculator"));

const routes: Record<string, ReactElement> = {
  "/": <Index />,
  "/kebijakan-privasi": <LegalPage type="privacy" />,
  "/syarat-ketentuan": <LegalPage type="terms" />,
  "/kebijakan-penggunaan": <LegalPage type="acceptable-use" />,
  "/fitur/whatsapp-api": <FeaturePage featureKey="whatsapp-api" />,
  "/fitur/whatsapp-coexistence": <FeaturePage featureKey="whatsapp-coexistence" />,
  "/fitur/ai-agent": <FeaturePage featureKey="ai-agent" />,
  "/fitur/follow-up-ai": <FeaturePage featureKey="follow-up-ai" />,
  "/fitur/broadcast-whatsapp": <FeaturePage featureKey="broadcast-whatsapp" />,
  "/kalkulator-biaya-whatsapp": <WhatsAppCostCalculator />,
};
const normalizePath = (path: string) => path.length > 1 ? path.replace(/\/$/, "") : path;

const App = () => <Suspense fallback={<div className="grid min-h-screen place-items-center bg-sky-50"><p role="status" className="text-sm font-semibold text-primary">Menyiapkan halaman OTIKA…</p></div>}>{routes[normalizePath(window.location.pathname)] ?? <NotFound />}</Suspense>;
export default App;
