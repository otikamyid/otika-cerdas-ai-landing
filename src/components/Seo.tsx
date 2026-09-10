import { useEffect } from "react";
import { site } from "@/lib/site";

type SeoProps = { title: string; description: string; path?: string };

const Seo = ({ title, description, path = "/" }: SeoProps) => {
  useEffect(() => {
    document.title = title;
    const setMeta = (selector: string, attribute: string, value: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) element.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", `${site.url}${path}`);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:url"]', "content", `${site.url}${path}`);
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${site.url}${path}`;
  }, [description, path, title]);
  return null;
};

export default Seo;
