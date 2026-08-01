import Index from "./pages/Index";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import type { ReactElement } from "react";

const routes: Record<string, ReactElement> = {
  "/": <Index />,
  "/kebijakan-privasi": <LegalPage type="privacy" />,
  "/syarat-ketentuan": <LegalPage type="terms" />,
  "/kebijakan-penggunaan": <LegalPage type="acceptable-use" />,
};

const normalizePath = (path: string) => path.length > 1 ? path.replace(/\/$/, "") : path;

const App = () => routes[normalizePath(window.location.pathname)] ?? <NotFound />;

export default App;
