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
    "Certified in Advanced Business Strategy",
    "Professional Project Management Techniques",
    "Modern Architectural Design Principles",
  ];

  const images = [
    "https://images.pexels.com/photos/28973930/pexels-photo-28973930/free-photo-of-historic-saigon-central-post-office-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/28704263/pexels-photo-28704263/free-photo-of-outdoor-book-market-at-saint-sulpice-paris.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/28960478/pexels-photo-28960478/free-photo-of-scenic-lighthouse-on-rocky-coastal-path.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/18164715/pexels-photo-18164715/free-photo-of-person-walking-a-dog-on-a-promenade.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/16630942/pexels-photo-16630942/free-photo-of-close-up-of-plant-with-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/28881039/pexels-photo-28881039/free-photo-of-modern-wave-like-architectural-facade.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/28881039/pexels-photo-28881039/free-photo-of-modern-wave-like-architectural-facade.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/28881039/pexels-photo-28881039/free-photo-of-modern-wave-like-architectural-facade.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
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
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto p-4">
        {/* Title and Description List */}
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl max-w-2xl tracking-tighter font-regular mb-4">
            Certificates
          </h2>
          <CertificateList certificates={certificates} />
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
      </div>

      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
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
