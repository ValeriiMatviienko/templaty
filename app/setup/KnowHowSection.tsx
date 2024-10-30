/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export const KnowHowSection = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const toggleFullscreen = (src?: string | null) =>
    setFullscreenImage(src ?? null);

  const imageUrl =
    "https://images.pexels.com/photos/28973930/pexels-photo-28973930/free-photo-of-historic-saigon-central-post-office-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="w-full py-28">
      <div className="container mx-auto px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
          <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
            <img
              src={imageUrl}
              alt="Feature Image"
              className="w-full h-full object-cover rounded-md cursor-pointer"
              onClick={() => toggleFullscreen(imageUrl)}
            />
          </div>
          <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
            <div>
              <Badge>Know-How</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl  md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                This is the start of something new
              </h2>
              <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
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
            src={fullscreenImage}
            alt="Fullscreen Image"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
};
