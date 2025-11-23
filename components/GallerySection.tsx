"use client";

import { ImageIcon } from "lucide-react";

export default function GallerySection() {
  const images = [
    {
      url: "https://images.pexels.com/photos/4489743/pexels-photo-4489743.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Bengkel Profesional",
    },
    {
      url: "https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Peralatan Modern",
    },
    {
      url: "https://images.pexels.com/photos/4489771/pexels-photo-4489771.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Teknisi Berpengalaman",
    },
    {
      url: "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Spare Parts Berkualitas",
    },
    {
      url: "https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Diagnosa Akurat",
    },
    {
      url: "https://images.pexels.com/photos/4489741/pexels-photo-4489741.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Hasil Memuaskan",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black mb-4 text-gray-900">
            Galeri Bengkel Kami
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Fasilitas lengkap dan tim profesional untuk layanan terbaik
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl aspect-square shadow-md hover:shadow-lg transition-all duration-500 border-2 border-gray-200 hover:border-[#FF0000]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <ImageIcon className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white font-bold text-lg">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
