/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import CertificateList from "./CertificateList";

const Certificates = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const certificates = [
    "Certificato ISO 21500 Attestato FER",
    "Certificato ISO 37001",
    "Certificato ISO 50001",
    "Certificato ISO 21502",
    "Certificato ISO 14.000 Certificato ISO SA 8000 Certificato ISO 45001",
    "Cat. OG 1 titolo V euro 5.165.000,00 Cat. OG 10 titolo V euro 5.165.000,00 Cat. OG 11 titolo V euro 5.165.000,00",
    "Certificato ISO 9001 gia’ trasformato in Vision 2000 n. 1157 Certificato EQUNET 9110",
    "Antincendio rischio medio",
    "Primo Soccorso",
    "Lavori in quota",
    "Montaggio, Smontaggio, Trasformazione ponteggi",
    "PES PAV",
    "Covid Manager",
    "Patentino FGAS",
  ];

  const images = [
    "/certs/cert4.webp",
    "/certs/cert3.webp",
    "/certs/cert5.webp",
    "/certs/cert1.webp",
    "/certs/cert2.webp",
    "/certs/cert6.webp",
    "/certs/cert7.webp",
    "/certs/cert8.webp",
    "/certs/cert9.webp",
    "/certs/cert10.webp",
  ];

  const openImage = (url: string) => {
    setFullscreenImage(url);
  };

  const handleSetApi = (api?: CarouselApi) => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  };

  return (
    <div className="w-full py-24 lg:py-40">
      <div className="container mx-auto p-4">
        {/* Title and Description List */}
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl max-w-2xl tracking-tighter font-regular mb-4">
            Certificates
          </h2>
        </div>

        {/* Carousel for small screens */}
        <div className="block sm:hidden">
          <Carousel setApi={handleSetApi} className="w-full">
            <CarouselContent>
              {images.map((url, index) => (
                <CarouselItem key={index}>
                  <div className="h-full rounded-md aspect-square p-6 flex justify-center items-center">
                    <img
                      src={url}
                      loading="lazy"
                      alt={`Certificate ${index + 1}`}
                      className="w-full h-full rounded-md object-cover cursor-pointer"
                      onClick={() => openImage(url)}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            Slide {current} of {count}
          </div>
        </div>

        {/* Grid for larger screens */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {images.map((url, index) => (
            <div
              key={index}
              className="h-full rounded-md aspect-square p-6 flex justify-center items-center"
            >
              <img
                loading="lazy"
                src={url}
                alt={`Certificate ${index + 1}`}
                className="w-full h-full rounded-md object-cover cursor-pointer"
                onClick={() => openImage(url)}
              />
            </div>
          ))}
        </div>
        <CertificateList certificates={certificates} />
      </div>

      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            loading="lazy"
            src={fullscreenImage}
            alt="Fullscreen Image"
            className="max-w-full max-h-full rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default Certificates;
