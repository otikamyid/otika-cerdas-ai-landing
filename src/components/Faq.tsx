
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="faq-item">
      <button
        className="flex justify-between items-center w-full text-left py-3 focus:outline-none"
        onClick={toggle}
      >
        <h4 className="text-lg font-medium">{question}</h4>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-3 text-gray-600">{answer}</div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Jasa Apa ini?',
      answer: 'Ini adalah jasa mengintegrasikan AI ke nomor WhatsApp Biasa maupun WhatsApp Bisnis Anda yang disesuaikan dengan profil, produk, dan jasa bisnis milik Anda sehingga AI akan menjawab sesuai dengan Bisnis Anda. Intinya pelanggan "terima jadi" sesuai fitur yang dibutuhkan.'
    },
    {
      question: 'Apakah sistem berlangganan?',
      answer: 'Ya, sistemnya adalah langganan, karena ada maintenance & update sistem agar tetap berjalan dengan baik & lancar.'
    },
    {
      question: 'Apakah paket di atas sudah integrasi semua platform?',
      answer: 'Untuk Paket yang tertera SMART & Genius AI Bot hanya terintegrasi dengan WhatsApp saja. Integrasi dengan platform lain seperti Instagram, Facebook Page, Telegram dll. mohon ajukan Custom Request.'
    },
    {
      question: 'Apakah AI bisa membalas/kirim gambar / video?',
      answer: 'YA Bisa, Paket Genius bisa membalas berupa gambar/image, sedang kebutuhan AI membalas dengan video bisa ajukan custom request.'
    },
    {
      question: 'Ada Support After Sales-nya?',
      answer: 'Supoort After Sales dari kami berupa panduan mudah integrasi nomor WhatsApp untuk keperluan CS bisnis Anda. Panduan secara langsung memberikan pelatihan kepada AI agar menjawab pertanyaan sesuai kebutuhan pelanggan, panduan melatih AI sehingga menjadi expert sebagai CS mulai dari menyapa, analisisi kebutuhan pelanggan, sampai dengan closing secara smooth. Kami juga bagikan ebook Jago CS membuat AI jadi jago beneran menjadi CS selayaknya manusia.'
    },
    {
      question: 'Apakah hanya untuk sektor Usaha saja?',
      answer: 'Implementasi AI ini tidak hanya untuk Customer Service / Layanan pelanggan saja. Layanan Publik seperti Lembaga Pemerintahan seperti Rumah Sakit, Sekolah, & Kantor Pemerintahan juga bisa mengimplementasikan AI ini untuk layanan publik yang maksimal.'
    },
    {
      question: 'Custom Apa saja yang pernah diimplementasikan pada WhatsApp AI?',
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>AI bisa melayani dengan voice note/suara</li>
          <li>Integrasi dengan Facebook, Instagram, Telegram, Website chat</li>
          <li>AI Chatbot mampu menganalisis gambar/image yang dikirim oleh pelanggan (bukti transfer, pamflet promo dll)</li>
          <li>Bisa kirim multi bubble chat</li>
          <li>Lacak paket kiriman</li>
          <li>Konversi mata uang</li>
          <li>Forward pesan ke tim divisi lain</li>
          <li>Bisa multibahasa internasional sesuai kebutuhan</li>
          <li>Follow Up berseri dengan mempertahankan konteks pembicaraan, bukan template</li>
          <li>Pencatatan Leads secara mendetail</li>
        </ul>
      )
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pertanyaan yang Sering Ditanyakan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Berikut adalah beberapa pertanyaan yang sering ditanyakan tentang layanan kami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
