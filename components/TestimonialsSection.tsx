"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik Toyota Avanza",
    content:
      "AC mobil saya yang tadinya tidak dingin sekarang seperti baru lagi! Pelayanan cepat dan harga sangat reasonable. Teknisinya juga ramah dan menjelaskan masalahnya dengan detail.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Siti Nurhaliza",
    role: "Pemilik Honda Jazz",
    content:
      "Sudah langganan di Tam's AC sejak 3 tahun lalu. Selalu puas dengan hasilnya. AC mobil selalu dingin dan bersih. Recommended banget untuk service AC berkala!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Agus Priyanto",
    role: "Owner Bus Pariwisata",
    content:
      "Sebagai pemilik armada bus, saya percayakan perawatan AC bus ke Tam's AC. Mereka ahli dalam menangani AC kendaraan besar. Garansi juga memuaskan!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Dewi Lestari",
    role: "Pemilik Mitsubishi Xpander",
    content:
      "Pelayanannya profesional, harga transparan, dan hasil kerja memuaskan. AC yang bocor freon diperbaiki dengan tuntas. Bengkel yang bisa dipercaya!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Rudi Hermawan",
    role: "Pemilik Daihatsu Xenia",
    content:
      "Kompresor AC saya rusak dan diganti di sini. Hasilnya sangat memuaskan dan harganya jauh lebih murah dari dealer. Sangat recommended!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Linda Wijaya",
    role: "Pemilik Suzuki Ertiga",
    content:
      "Cuci AC dan ganti filter kabin di sini. Prosesnya cepat, udara di mobil jadi segar dan bebas bau. Pelayanannya juga sangat ramah. Terima kasih Tam's AC!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const TestimonialCard = ({
  testimonial,
  small = false,
}: {
  testimonial: (typeof testimonials)[0];
  small?: boolean;
}) => (
  <div
    className={`group relative bg-white border-2 border-gray-200 rounded-3xl ${
      small ? "p-4" : "p-8"
    } hover:shadow-lg hover:border-[#FF0000] transition-all duration-500 flex-shrink-0 ${
      small ? "w-72" : "w-full"
    }`}
  >
    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
      <Quote className={`${small ? "w-8 h-8" : "w-12 h-12"} text-[#FF0000]`} />
    </div>

    <div
      className={`flex items-center ${small ? "mb-3" : "mb-6"} relative z-10`}
    >
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className={`${
          small ? "w-12 h-12" : "w-16 h-16"
        } rounded-full object-cover border-2 border-gray-200 shadow-lg`}
      />
      <div className="ml-4">
        <h4
          className={`font-bold text-gray-900 ${
            small ? "text-sm" : "text-base md:text-lg"
          }`}
        >
          {testimonial.name}
        </h4>
        <p className={`${small ? "text-xs" : "text-sm"} text-gray-600`}>
          {testimonial.role}
        </p>
      </div>
    </div>

    <div className={`flex ${small ? "mb-2" : "mb-4"}`}>
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star
          key={i}
          className={`${
            small ? "w-4 h-4" : "w-5 h-5"
          } fill-yellow-400 text-yellow-400`}
        />
      ))}
    </div>

    <p
      className={`text-gray-700 leading-relaxed relative z-10 ${
        small ? "text-sm" : ""
      }`}
    >
      {testimonial.content}
    </p>
  </div>
);

export default function TestimonialsSection() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3, 6);

  return (
    <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black mb-4 text-gray-900">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        {/* Mobile Marquee */}
        <div className="md:hidden space-y-6">
          {/* Row 1 - Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-marquee-left w-max">
              {[...row1, ...row1, ...row1, ...row1].map(
                (testimonial, index) => (
                  <TestimonialCard
                    key={`row1-${index}`}
                    testimonial={testimonial}
                    small
                  />
                )
              )}
            </div>
          </div>

          {/* Row 2 - Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-marquee-right w-max">
              {[...row2, ...row2, ...row2, ...row2].map(
                (testimonial, index) => (
                  <TestimonialCard
                    key={`row2-${index}`}
                    testimonial={testimonial}
                    small
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 15s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
