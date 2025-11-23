"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Berhasil!",
          description:
            "Permintaan Anda telah diterima. Kami akan segera menghubungi Anda.",
        });
        setFormData({ name: "", phone: "", service: "" });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Gagal",
        description:
          "Terjadi kesalahan. Silakan coba lagi atau hubungi via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-black mb-4 text-gray-900">
            Hubungi Kami
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Konsultasi gratis untuk kebutuhan AC kendaraan Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-3xl shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Nama Lengkap
                  </label>
                  <Input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full bg-white border-gray-300 focus:border-[#FF0000] rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Nomor Telepon / WhatsApp
                  </label>
                  <Input
                    type="tel"
                    placeholder="08xx xxxx xxxx"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="w-full bg-white border-gray-300 focus:border-[#FF0000] rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Layanan yang Dibutuhkan
                  </label>
                  <Textarea
                    placeholder="Contoh: AC tidak dingin, perlu cuci AC, ganti kompresor, dll."
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    required
                    rows={4}
                    className="w-full bg-white border-gray-300 focus:border-[#FF0000] rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#FF0000] hover:bg-[#cc0000] rounded-xl shadow-md transform hover:scale-102 transition-all py-6 text-base md:text-lg"
                  disabled={loading}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {loading ? "Mengirim..." : "Kirim Permintaan"}
                </Button>
              </form>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl shadow-md p-6 md:p-8 space-y-6 md:space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FF0000] rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-base md:text-lg">
                    Alamat Bengkel
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Jl. Gatot Subroto No.201
                    <br />
                    Bandung, Jawa Barat
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-base md:text-lg">
                    Jam Operasional
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Senin - Sabtu: 08.00 - 17.00 WIB
                    <br />
                    Minggu: Tutup
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-base md:text-lg">
                    Telepon / WhatsApp
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">
                    +62 878-2526-3379
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 md:mb-2 text-base md:text-lg">
                    Email
                  </h3>
                  <p className="text-sm md:text-base text-gray-700">
                    tamsirac999@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-lg h-80 border-4 border-white">
              <iframe
                src="https://maps.google.com/maps?q=Tam's+AC+Mobil+Bandung&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
