import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { site } from "@/lib/site";
import { ReactNode } from "react";

type LegalType = "privacy" | "terms" | "acceptable-use";
type Section = { title: string; content: ReactNode };

const legalContent: Record<LegalType, { title: string; description: string; path: string; sections: Section[] }> = {
  privacy: {
    title: "Kebijakan Privasi",
    description: "Cara Otika mengumpulkan, menggunakan, dan melindungi informasi pengguna layanan.",
    path: "/kebijakan-privasi",
    sections: [
      { title: "1. Tentang kebijakan ini", content: <p>Kebijakan ini menjelaskan bagaimana {site.legalName} mengelola informasi ketika Anda mengunjungi website, menghubungi tim kami, atau menggunakan layanan Otika.</p> },
      { title: "2. Informasi yang dapat kami terima", content: <><p>Informasi dapat mencakup nama, nomor telepon, alamat email, nama dan profil bisnis, kebutuhan layanan, serta informasi yang Anda berikan saat konsultasi atau menggunakan layanan.</p><p>Dalam penyediaan AI Agent dan integrasi channel, sistem juga dapat memproses data teknis dan isi komunikasi sesuai konfigurasi layanan pelanggan.</p></> },
      { title: "3. Penggunaan informasi", content: <p>Kami menggunakan informasi untuk menjawab konsultasi, menyediakan dan mendukung layanan, melakukan konfigurasi AI Agent, menjaga keamanan, memperbaiki kualitas layanan, serta memenuhi kewajiban hukum.</p> },
      { title: "4. Penyedia layanan dan platform pihak ketiga", content: <p>Otika dapat menggunakan penyedia infrastruktur dan platform pihak ketiga, termasuk layanan Meta untuk integrasi WhatsApp dan Instagram. Penggunaan platform tersebut juga tunduk pada kebijakan masing-masing penyedia.</p> },
      { title: "5. Perlindungan dan penyimpanan", content: <p>Kami menerapkan langkah teknis dan operasional yang wajar untuk melindungi informasi. Tidak ada sistem digital yang sepenuhnya bebas risiko, sehingga pengguna juga bertanggung jawab menjaga keamanan akses akun dan kredensialnya.</p> },
      { title: "6. Hak dan permintaan pengguna", content: <p>Anda dapat meminta akses, koreksi, atau penghapusan informasi yang Anda berikan, sepanjang dapat dilakukan dan sesuai kewajiban hukum serta kebutuhan penyediaan layanan.</p> },
      { title: "7. Pembaruan dan kontak", content: <p>Kebijakan ini dapat diperbarui mengikuti perubahan layanan atau peraturan. Pertanyaan dan permintaan terkait privasi dapat dikirim ke <a href={`mailto:${site.email}`}>{site.email}</a>.</p> },
    ],
  },
  terms: {
    title: "Syarat & Ketentuan",
    description: "Ketentuan penggunaan layanan Customize AI Agent dan integrasi Otika.",
    path: "/syarat-ketentuan",
    sections: [
      { title: "1. Penerimaan ketentuan", content: <p>Dengan menggunakan website atau layanan Otika, Anda menyatakan telah memahami dan menyetujui ketentuan ini. Kesepakatan layanan khusus, proposal, atau invoice dapat memuat ketentuan tambahan.</p> },
      { title: "2. Lingkup layanan", content: <p>Otika menyediakan konsultasi, konfigurasi, integrasi, dan dukungan AI Agent yang disesuaikan dengan kebutuhan bisnis. Ruang lingkup, fitur, channel, durasi, dan biaya mengikuti paket atau kesepakatan yang dipilih.</p> },
      { title: "3. Tanggung jawab pengguna", content: <p>Pengguna wajib memberikan informasi yang sah, menjaga kredensial, memperoleh izin yang diperlukan dari penerima pesan, serta memastikan produk, konten, dan komunikasi bisnisnya sesuai hukum dan kebijakan platform terkait.</p> },
      { title: "4. Layanan pihak ketiga", content: <p>Fitur tertentu bergantung pada WhatsApp, Instagram, Meta, penyedia AI, jaringan, atau infrastruktur lain. Perubahan, gangguan, penolakan, atau pembatasan dari pihak tersebut berada di luar kendali langsung Otika.</p> },
      { title: "5. Pembayaran dan perubahan layanan", content: <p>Harga, periode langganan, batas penggunaan, biaya implementasi, dan ketentuan perubahan paket mengikuti informasi pada penawaran atau kesepakatan pelanggan. Tanyakan kepada admin sebelum pembayaran apabila ada bagian yang belum jelas.</p> },
      { title: "6. Kekayaan intelektual", content: <p>Merek, desain, materi, dan sistem Otika tetap menjadi milik pemegang haknya. Data serta materi bisnis yang diberikan pelanggan tetap menjadi tanggung jawab dan milik pihak yang berhak atas materi tersebut.</p> },
      { title: "7. Kontak", content: <p>Pertanyaan mengenai ketentuan layanan dapat disampaikan melalui <a href={`mailto:${site.email}`}>{site.email}</a> atau WhatsApp {site.phoneDisplay}.</p> },
    ],
  },
  "acceptable-use": {
    title: "Kebijakan Penggunaan",
    description: "Panduan penggunaan layanan Otika yang aman, sah, dan bertanggung jawab.",
    path: "/kebijakan-penggunaan",
    sections: [
      { title: "1. Tujuan", content: <p>Kebijakan ini menjaga agar layanan Otika digunakan secara aman, bertanggung jawab, dan tidak merugikan pengguna, penerima pesan, platform mitra, maupun pihak lain.</p> },
      { title: "2. Penggunaan yang dilarang", content: <><p>Layanan tidak boleh digunakan untuk spam, penipuan, phishing, penyamaran, perjudian ilegal, pinjaman ilegal, konten seksual eksplisit, ujaran kebencian, kekerasan, malware, barang terlarang, atau pelanggaran hak pihak lain.</p><p>Pengguna juga dilarang mencoba mengakses data pihak lain, mengganggu infrastruktur, melakukan reverse engineering, atau melewati batas teknis tanpa izin.</p></> },
      { title: "3. Persetujuan penerima pesan", content: <p>Pengguna bertanggung jawab memastikan penerima telah memberikan izin yang sesuai sebelum menerima pesan promosi atau pesan massal, serta menyediakan mekanisme berhenti berlangganan bila diwajibkan.</p> },
      { title: "4. Kepatuhan terhadap platform", content: <p>Pengguna wajib mematuhi kebijakan WhatsApp Business, Instagram, Meta, dan platform lain yang digunakan. Keputusan pembatasan atau penangguhan akun oleh platform terkait berada pada kewenangan platform tersebut.</p> },
      { title: "5. Penanganan pelanggaran", content: <p>Otika dapat meminta klarifikasi, membatasi fitur, menangguhkan, atau menghentikan layanan apabila terdapat indikasi pelanggaran, risiko keamanan, atau kewajiban hukum.</p> },
      { title: "6. Pelaporan", content: <p>Indikasi penyalahgunaan dapat dilaporkan ke <a href={`mailto:${site.email}`}>{site.email}</a> dengan informasi pendukung yang memadai.</p> },
    ],
  },
};

const LegalPage = ({ type }: { type: LegalType }) => {
  const page = legalContent[type];
  return <div className="min-h-screen bg-white">
    <Seo title={`${page.title} | OTIKA`} description={page.description} path={page.path} />
    <Navbar compact />
    <main className="legal-page">
      <div className="container-tight">
        <a href="/" className="text-sm font-semibold text-primary hover:underline">← Kembali ke beranda</a>
        <span className="eyebrow mt-10">Dokumen legal</span>
        <h1 className="mt-4">{page.title}</h1>
        <p className="mt-4 text-slate-500">Terakhir diperbarui: 1 Agustus 2026</p>
        <div className="legal-content">
          {page.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.content}</section>)}
        </div>
        <p className="mt-12 rounded-2xl bg-amber-50 p-5 text-sm text-amber-900">Dokumen ini merupakan informasi umum layanan Otika dan dapat diperbarui setelah peninjauan operasional atau hukum.</p>
      </div>
    </main>
    <Footer />
  </div>;
};

export default LegalPage;
