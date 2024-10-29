/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export const WelcomeSection = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const toggleFullscreen = (src?: string | null) =>
    setFullscreenImage(src ?? null);

  const imageUrl =
    "https://images.pexels.com/photos/28973930/pexels-photo-28973930/free-photo-of-historic-saigon-central-post-office-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                This is the start of something!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square">
            <img
              loading="lazy"
              src={imageUrl}
              alt="Welcome Section Image"
              className="rounded-md w-full h-full object-cover cursor-pointer"
              onClick={() => toggleFullscreen(imageUrl)}
            />
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
          onClick={() => toggleFullscreen()}
        >
          <img
            loading="lazy"
            src={fullscreenImage}
            alt="Fullscreen Image"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};
