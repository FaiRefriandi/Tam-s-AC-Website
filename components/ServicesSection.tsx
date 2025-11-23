"use client";

import { Wrench, Droplet, Wind, Shield, Bus, Clock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Wrench,
    title: "Perbaikan AC",
    description:
      "Diagnosa dan perbaikan masalah AC tidak dingin, bocor freon, kompresor rusak, dan masalah lainnya dengan peralatan modern.",
    color: "bg-[#FF0000]",
  },
  {
    icon: Droplet,
    title: "Penggantian Spare Parts",
    description:
      "Spare parts original dan aftermarket berkualitas: kompresor, kondensor, evaporator, dryer, dan komponen lainnya.",
    color: "bg-cyan-600",
  },
  {
    icon: Wind,
    title: "Cuci & Servis AC",
    description:
      "Pembersihan menyeluruh sistem AC, evaporator, filter kabin, dan desinfektan untuk udara segar dan sehat.",
    color: "bg-teal-600",
  },
  {
    icon: Shield,
    title: "Perawatan Berkala",
    description:
      "Program perawatan preventif untuk menjaga performa AC optimal dan mencegah kerusakan di masa depan.",
    color: "bg-green-600",
  },
  {
    icon: Bus,
    title: "AC Bus & Kendaraan Besar",
    description:
      "Spesialis penanganan AC untuk bus, truk, dan kendaraan komersial dengan sistem AC yang lebih kompleks.",
    color: "bg-orange-600",
  },
  {
    icon: Clock,
    title: "Servis Cepat",
    description:
      "Layanan express untuk kebutuhan mendesak dengan estimasi waktu pengerjaan yang pasti dan transparan.",
    color: "bg-red-600",
  },
];

export default function ServicesSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black mb-4 text-gray-900">
            Layanan Kami
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Solusi lengkap untuk semua kebutuhan AC kendaraan Anda dengan
            teknologi terkini
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index}>
                  <div className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-[#FF0000] transition-all duration-500">
                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm transform group-hover:scale-105 transition-all`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index ? "bg-[#FF0000] w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-lg hover:border-[#FF0000] transition-all duration-500"
            >
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm transform group-hover:scale-105 transition-all`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
