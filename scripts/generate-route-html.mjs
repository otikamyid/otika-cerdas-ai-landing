import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new globalThis.URL("../", import.meta.url));
const dist = join(root, "dist");
const template = await readFile(join(dist, "index.html"), "utf8");
const origin = "https://otika.id";
const image = `${origin}/assets/Hero%20Image%20OTIKA%20(1).webp`;

const pages = [
  ["/", "Customize AI Agent WhatsApp & Instagram | OTIKA", "AI Agent yang disesuaikan dengan produk, SOP, gaya komunikasi, dan alur bisnis Anda. Konsultasi integrasi WhatsApp dan Instagram bersama Otika."],
  ["/fitur/whatsapp-api", "WhatsApp API untuk Bisnis | OTIKA", "Integrasi WhatsApp Business API resmi bersama OTIKA untuk AI Agent, inbox tim, template pesan, broadcast, dan otomasi bisnis."],
  ["/fitur/whatsapp-coexistence", "WhatsApp Coexistence untuk Bisnis | OTIKA", "Gunakan WhatsApp Business App dan WhatsApp Business Platform pada nomor yang sama dengan pendampingan WhatsApp Coexistence dari OTIKA."],
  ["/fitur/ai-agent", "AI Agent untuk Bisnis | OTIKA", "Customize AI Agent OTIKA berdasarkan produk, SOP, knowledge, gaya bahasa, dan alur layanan bisnis Anda."],
  ["/fitur/follow-up-ai", "Follow Up by AI untuk Bisnis | OTIKA", "Follow Up by AI dari OTIKA membantu menindaklanjuti prospek secara terjadwal, kontekstual, dan tetap dapat diteruskan ke admin."],
  ["/fitur/broadcast-whatsapp", "Broadcast WhatsApp untuk Bisnis | OTIKA", "Broadcast WhatsApp OTIKA untuk campaign, pengumuman, reminder, segmentasi audiens, dan pengiriman template resmi Meta."],
  ["/kalkulator-biaya-whatsapp", "Kalkulator Biaya WhatsApp API Indonesia | OTIKA", "Hitung estimasi biaya WhatsApp Business Platform Indonesia berdasarkan paket OTIKA dan volume pesan Meta."],
  ["/kebijakan-privasi", "Kebijakan Privasi | OTIKA", "Cara OTIKA mengumpulkan, menggunakan, dan melindungi informasi pengguna layanan."],
  ["/syarat-ketentuan", "Syarat & Ketentuan | OTIKA", "Ketentuan penggunaan layanan Customize AI Agent dan integrasi OTIKA."],
  ["/kebijakan-penggunaan", "Kebijakan Penggunaan | OTIKA", "Panduan penggunaan layanan OTIKA yang aman, sah, dan bertanggung jawab."],
];

const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const replaceContent = (html, selector, value) => html.replace(new RegExp(`(<meta ${selector} content=")[^"]*("\\s*/?>)`), `$1${escapeHtml(value)}$2`);

for (const [path, title, description] of pages) {
  const url = `${origin}${path}`;
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`);

  html = replaceContent(html, 'name="description"', description);
  html = replaceContent(html, 'property="og:url"', url);
  html = replaceContent(html, 'property="og:title"', title);
  html = replaceContent(html, 'property="og:description"', description);
  html = replaceContent(html, 'property="og:image"', image);
  html = replaceContent(html, 'name="twitter:url"', url);
  html = replaceContent(html, 'name="twitter:title"', title);
  html = replaceContent(html, 'name="twitter:description"', description);
  html = replaceContent(html, 'name="twitter:image"', image);

  if (path !== "/") {
    const output = join(dist, path.slice(1), "index.html");
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, html);
  }
}

const notFound = template
  .replace(/<title>[^<]*<\/title>/, "<title>Halaman Tidak Ditemukan | OTIKA</title>")
  .replace('<meta name="robots" content="index, follow, max-image-preview:large" />', '<meta name="robots" content="noindex, nofollow" />');
await writeFile(join(dist, "404.html"), notFound);
