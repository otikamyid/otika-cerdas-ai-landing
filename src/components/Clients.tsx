import { useState } from "react";

const ClientLogo = ({ src, name }: { src: string; name: string }) => {
  const [failed, setFailed] = useState(false);
  return failed ? <span className="v3-client-fallback" aria-hidden="true">{name.replace(/^PT /, "").slice(0, 1)}</span> : <img src={src} alt="" width="46" height="38" loading="lazy" onError={() => setFailed(true)} />;
};


const Clients = () => {
  const clients = [
    {
      name: "PT Megacon Bangun Perkasa",
      logo: "/assets/megacon-logo.png",
      link: "https://megaconperkasa.com/"
    },
    {
      name: "Fit Motor Tegal",
      logo: "/assets/75122380-2821-4162-a300-869d7f57e0f7.png",
      link: "https://fitmotor.web.id"
    },
    {
      name: "SKB Karanganyar",
      logo: "https://otika.biz.id/wp-content/uploads/2024/10/photo-Profil-SKB-150x150.jpg",
      link: "https://s.id/skbkaranganyar"
    },
    {
      name: "Chockles",
      logo: "https://otika.biz.id/wp-content/uploads/2025/02/Mask-group-e1738549093434.webp",
      link: "https://wa.me/6282134065599"
    },
    {
      name: "Bintaro Learning Center",
      logo: "/assets/bintaro-learning-center-logo.png",
      link: "https://bintarolc.co.id"
    },
    {
      name: "Nur Ramadhan",
      logo: "https://otika.biz.id/wp-content/uploads/2025/03/Nur-Ramadhan-Squad-Muda.webp",
      link: "https://www.nurramadhan.site/"
    },
    {
      name: "Bule Pro Apparel",
      logo: "https://otika.biz.id/wp-content/uploads/2025/01/Bule-Pro-Apparel.webp",
      link: "https://wa.me/628978130907"
    },
    {
      name: "Warung Rupa Rupa Japan",
      logo: "/assets/warung-rupa-rupa-logo.png",
      link: "https://bit.ly/Katalog_2025_Januari"
    }
  ];

  return <section className="v3-clients">
    <div className="v3-shell">
      <div className="v3-clients-heading"><h2>Sudah jadi rekan kerja bisnis-bisnis ini.</h2><p>Dari bengkel sampai travel. Dari produk sampai pelayanan.</p></div>
      <div className="v3-client-grid">{clients.map(client => <a key={client.name} className="v3-client" href={client.link} target="_blank" rel="noreferrer"><ClientLogo src={client.logo} name={client.name} /><span>{client.name}</span></a>)}</div>
    </div>
  </section>;
};
export default Clients;
