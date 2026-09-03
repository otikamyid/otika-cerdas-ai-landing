import Index from "./pages/Index";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import type { ReactElement } from "react";
import FeaturePage from "./pages/FeaturePage";
import WhatsAppCostCalculator from "./pages/WhatsAppCostCalculator";

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

const App = () => routes[normalizePath(window.location.pathname)] ?? <NotFound />;

export default App;
