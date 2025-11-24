import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img
                  src="/images/logo.png"
                  alt="Tam's AC Logo"
                  className="h-10 md:h-14 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Bengkel AC kendaraan terpercaya di Bandung sejak 2010. Spesialis
              perbaikan, perawatan, dan penggantian spare parts AC mobil dan bus
              dengan teknologi terkini.
            </p>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold mb-6 text-white">
              Layanan Kami
            </h4>
            <ul className="space-y-3 text-gray-300">
              <ul className="space-y-3 text-gray-300">
                <li className="relative w-fit">
                  <span className="text-gray-300">
                    Perbaikan AC Mobil & Bus
                  </span>
                </li>
                <li className="relative w-fit">
                  <span className="text-gray-300">Penggantian Spare Parts</span>
                </li>
                <li className="relative w-fit">
                  <span className="text-gray-300">Cuci & Servis AC</span>
                </li>
                <li className="relative w-fit">
                  <span className="text-gray-300">Perawatan Berkala</span>
                </li>
                <li className="relative w-fit">
                  <span className="text-gray-300">Diagnosa Gratis</span>
                </li>
              </ul>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold mb-6 text-white">
              Kontak
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Jl. Gatot Subroto No.201, Bandung, Jawa Barat</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+62 878-2526-3379</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span>tamsirac999@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Tam's AC. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Dibuat oleh{" "}
              <a
                href="https://frefriandi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF0000] transition-colors font-medium"
              >
                Fai Refriandi
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
