import { useEffect } from "react";

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
    setMeta('meta[property="og:url"]', "content", `https://otika.biz.id${path}`);
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://otika.biz.id${path}`;
  }, [description, path, title]);
  return null;
};

export default Seo;
