"use client";

import { Phone, MapPin, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium shadow-sm">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="text-gray-900 font-bold">
                Layanan Berkualitas
              </span>
            </div>

            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
              Solusi AC Mobil & Bus
              <br />
              <span className="text-gray-900">Terpercaya</span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Spesialis diagnosa, perawatan, dan perbaikan AC kendaraan dengan
              teknisi berpengalaman dan spare parts berkualitas premium.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[#FF0000] hover:bg-[#cc0000] text-base md:text-lg px-10 py-7 rounded-xl shadow-sm transform hover:scale-102 transition-all"
              >
                <Zap className="w-5 h-5 mr-2" />
                Reservasi Sekarang
              </Button>
              <a
                href="https://wa.me/6287825263379?text=Halo%20Tam's%20AC%2C%20saya%20ingin%20konsultasi%20tentang%20AC%20kendaraan%20saya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 text-base md:text-lg px-10 py-7 rounded-xl shadow-sm transform hover:scale-102 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Hubungi via WhatsApp
                </Button>
              </a>
            </div>

            <div className="flex items-start space-x-3 bg-white border border-gray-200 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm w-full">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#FF0000] mt-0.5 md:mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-gray-900 text-sm md:text-base">
                  Lokasi Bengkel
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  Jl. Gatot Subroto No.201, Bandung, Jawa Barat
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-102 transition-transform duration-500">
              <img
                src="public/images/hero-pict.jpg"
                alt="Mechanic working on car AC"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 md:-bottom-8 md:-left-8 bg-white border-2 border-gray-200 p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-lg max-w-[160px] md:max-w-xs transform hover:scale-102 transition-transform">
              <p className="text-2xl md:text-3xl lg:text-4xl font-black text-[#FF0000]">
                15+
              </p>
              <p className="text-gray-900 font-bold text-xs md:text-sm lg:text-base">
                Tahun Pengalaman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
