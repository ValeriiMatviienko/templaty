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
import { ImageUrls } from "./ImageUrls";

const Projects = () => {
  const imagesPerPage = 8;
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(ImageUrls.length / imagesPerPage);

  const toggleFullscreen = (src?: string | null) =>
    setFullscreenImage(src ?? null);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const currentImages = ImageUrls.slice(
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
