/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Projects = () => {
  const imagesPerPage = 8;
  const imageUrls = [
    "https://images.pexels.com/photos/28973930/pexels-photo-28973930/free-photo-of-historic-saigon-central-post-office-architecture.jpeg",
    "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg",
    "https://images.pexels.com/photos/208825/pexels-photo-208825.jpeg",
    "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg",
    "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
    "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
    "https://images.pexels.com/photos/217947/pexels-photo-217947.jpeg",
    "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg",
    // Second page images
    "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
    "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
    "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg",
    "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg",
    "https://images.pexels.com/photos/4012369/pexels-photo-4012369.jpeg",
    "https://images.pexels.com/photos/4171739/pexels-photo-4171739.jpeg",
    "https://images.pexels.com/photos/459202/pexels-photo-459202.jpeg",
    "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg",
  ];

  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(imageUrls.length / imagesPerPage);

  const toggleFullscreen = (src?: string | null) =>
    setFullscreenImage(src ?? null);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const currentImages = imageUrls.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  return (
    <div className="w-full pb-28 pt-40">
      <div className="container mx-auto mb-12 px-8">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Something new! (Project {currentPage})
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Managing a small business today is already tough.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentImages.map((url, index) => (
              <div
                key={index}
                className={`h-full w-full rounded-md aspect-square flex justify-between flex-col ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
                onClick={() => toggleFullscreen(url)}
              >
                <img
                  loading="lazy"
                  src={`${url}?auto=compress&cs=tinysrgb&w=800`}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-md cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Component */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i + 1}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(i + 1);
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          {totalPages > 5 && <PaginationEllipsis />}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

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

export default Projects;
