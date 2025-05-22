
import { Mail, Instagram, MessageCircle, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img
              src="https://otika.biz.id/wp-content/uploads/2024/09/cropped-OTIKA-2.png"
              alt="Otika Cerdas Indonesia"
              className="h-12 w-auto mb-4"
              loading="lazy"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              OTIKA adalah layanan integrasi Customer Service berbasis AI yang membantu bisnis Anda meningkatkan konversi penjualan dan meringankan beban CS Anda.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/otikaindonesia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.threads.com/@otikaindonesia" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:hai@otika.biz.id" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">AI Chatbot</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">WhatsApp Integration</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">CRM Inbox</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Custom Solutions</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://chat.whatsapp.com/B9l4tLwJoWNHPAfP8bllre" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Grup WhatsApp</a>
              </li>
              <li>
                <a href="https://wa.me/6285117202425" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">WhatsApp: 0851-1720-2425</a>
              </li>
              <li>
                <a href="mailto:hai@otika.biz.id" className="text-gray-300 hover:text-white transition-colors">hai@otika.biz.id</a>
              </li>
              <li>
                <a href="https://otika.biz.id" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">otika.biz.id</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} Otika Cerdas Indonesia. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="https://otika.biz.id/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
