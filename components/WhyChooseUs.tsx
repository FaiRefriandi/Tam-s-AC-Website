"use client";

import { Award, Users, ThumbsUp, BadgeCheck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const features = [
  {
    icon: Award,
    title: "Teknisi Bersertifikat",
    description:
      "Tim teknisi berpengalaman dan terlatih khusus sistem AC otomotif",
    color: "bg-[#FF0000]",
  },
  {
    icon: BadgeCheck,
    title: "Spare Parts Berkualitas",
    description: "Menggunakan komponen original dan aftermarket terpercaya",
    color: "bg-purple-600",
  },
  {
    icon: ThumbsUp,
    title: "Garansi Layanan",
    description: "Jaminan kualitas pekerjaan dan spare parts yang terpasang",
    color: "bg-green-600",
  },
  {
    icon: Users,
    title: "Pelayanan Ramah",
    description: "Konsultasi gratis dan transparansi biaya sebelum pengerjaan",
    color: "bg-orange-600",
  },
];

export default function WhyChooseUs() {
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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black mb-4 text-gray-900">
            Mengapa Pilih Tam's AC?
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Komitmen kami adalah memberikan layanan terbaik untuk kenyamanan
            berkendara Anda
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-16">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index}>
                  <div className="group relative bg-white border-2 border-gray-200 p-8 rounded-3xl hover:border-[#FF0000] transition-all duration-500 text-center">
                    <div className="relative z-10">
                      <div
                        className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transform group-hover:scale-105 transition-all`}
                      >
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, index) => (
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
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 p-8 rounded-3xl hover:shadow-lg hover:border-[#FF0000] transition-all duration-500 text-center"
            >
              <div className="relative z-10">
                <div
                  className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transform group-hover:scale-105 transition-all`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
