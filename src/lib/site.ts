export const site = {
  name: "OTIKA",
  legalName: "PT Otika Solusi Nusantara",
  url: "https://otika.id",
  email: "hai@otika.biz.id",
  phoneDisplay: "0851-1720-2425",
  whatsapp: "6285117202425",
  instagram: "https://www.instagram.com/otikaindonesia",
  community: "https://chat.whatsapp.com/B9l4tLwJoWNHPAfP8bllre",
};

export const consultationUrl = (source = "website") => {
  const message = `Halo OTIKA, saya ingin konsultasi Customize AI Agent untuk bisnis saya. Saya datang dari ${source}.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
};
