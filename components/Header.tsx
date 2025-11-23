"use client";

import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 md:px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center group cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative">
              <img
                src="/images/logo.png"
                alt="Tam's AC Logo"
                className="h-8 md:h-12 w-auto object-contain"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[#FF0000] transition-colors font-medium relative group"
            >
              Beranda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-[#FF0000] transition-colors font-medium relative group"
            >
              Layanan
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-[#FF0000] transition-colors font-medium relative group"
            >
              Testimoni
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-[#FF0000] transition-colors font-medium relative group"
            >
              Kontak
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000] group-hover:w-full transition-all duration-300"></span>
            </button>
            <a
              href="https://wa.me/6287825263379?text=Halo%20Tam's%20AC%2C%20saya%20ingin%20konsultasi%20tentang%20AC%20kendaraan%20saya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 shadow-lg transform hover:scale-102 transition-all">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </nav>

          <button
            className="md:hidden text-gray-700 hover:text-[#FF0000] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col p-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block text-gray-700 hover:text-[#FF0000] transition-colors font-medium w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block text-gray-700 hover:text-[#FF0000] transition-colors font-medium w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block text-gray-700 hover:text-[#FF0000] transition-colors font-medium w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-gray-700 hover:text-[#FF0000] transition-colors font-medium w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Kontak
            </button>
            <a
              href="https://wa.me/6287825263379?text=Halo%20Tam's%20AC%2C%20saya%20ingin%20konsultasi%20tentang%20AC%20kendaraan%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-green-600 hover:bg-green-700 shadow-lg">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
