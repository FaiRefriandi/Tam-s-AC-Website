"use client";

import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Service AC Basic",
    price: "Mulai 150K",
    description: "Perawatan dasar untuk menjaga AC tetap bersih",
    features: [
      "Pembersihan evaporator",
      "Ganti filter kabin",
      "Cek tekanan freon",
      "Desinfektan ruang kabin",
    ],
    popular: false,
    color: "text-blue-600",
    bgColor: "bg-blue-600",
  },
  {
    name: "Servis AC Lengkap",
    price: "Mulai 350K",
    description: "Paket paling populer untuk perawatan menyeluruh",
    features: [
      "Semua fitur Basic",
      "Isi freon (jika perlu)",
      "Cek sistem kelistrikan",
      "Pembersihan kondensor",
      "Cek kompresor",
      "Garansi",
    ],
    popular: true,
    color: "text-purple-600",
    bgColor: "bg-purple-600",
  },
  {
    name: "Perbaikan & Spare Parts",
    price: "Sesuai Kebutuhan",
    description: "Untuk penggantian komponen yang rusak",
    features: [
      "Diagnosa masalah gratis",
      "Spare parts berkualitas",
      "Garansi spare parts",
      "Konsultasi teknisi ahli",
      "Estimasi biaya transparan",
    ],
    popular: false,
    color: "text-green-600",
    bgColor: "bg-green-600",
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-black mb-4 text-gray-900">
            Paket Layanan & Estimasi Harga
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Harga kompetitif dengan kualitas terjamin. Konsultasi gratis untuk
            estimasi biaya yang lebih akurat
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative bg-white border-2 rounded-3xl p-8 hover:shadow-lg transition-all duration-500 ${
                pkg.popular
                  ? "border-purple-600 scale-105 shadow-md mt-8 md:mt-0"
                  : "border-gray-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-max">
                  <div className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Paling Populer</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 ${pkg.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-3">
                  <span
                    className={`text-2xl md:text-4xl font-black ${pkg.color}`}
                  >
                    {pkg.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div
                      className={`w-6 h-6 ${pkg.bgColor} rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5`}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm md:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
