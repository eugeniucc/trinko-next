"use client";

import { Container } from "@/app/ui/Container";
import { useEffect, useRef, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const galleryRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "all", name: "All Works" },
    { id: "tattoo", name: "Tattoo" },
    { id: "piercing", name: "Piercing" },
    { id: "design", name: "Design" },
  ];

  const images = [
    {
      src: "/images/home/sections/portfolio/1.png",
      width: 800,
      height: 1200,
      alt: "Tattoo 1",
      category: "tattoo",
    },
    {
      src: "/images/home/sections/portfolio/1.png",
      width: 800,
      height: 1200,
      alt: "Tattoo 2",
      category: "tattoo",
    },
    {
      src: "/images/home/sections/portfolio/1.png",
      width: 800,
      height: 1200,
      alt: "Piercing 1",
      category: "piercing",
    },
    {
      src: "/images/home/sections/portfolio/1.png",
      width: 800,
      height: 1200,
      alt: "Design 1",
      category: "design",
    },
    {
      src: "/images/home/sections/portfolio/1.png",
      width: 800,
      height: 1200,
      alt: "Design 1",
      category: "design",
    },
  ];

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox;

    if (galleryRef.current) {
      lightbox = new PhotoSwipeLightbox({
        gallery: "#portfolio-gallery",
        children: "a",
        pswpModule: () => import("photoswipe"),
      });

      lightbox.init();
    }

    return () => {
      lightbox?.destroy();
      if (
        typeof import.meta !== "undefined" &&
        (import.meta as any).webpackHot
      ) {
        (import.meta as any).webpackHot.decline();
      }
    };
  }, [activeTab]);

  const filteredImages =
    activeTab === "all"
      ? images
      : images.filter((img) => img.category === activeTab);

  return (
    <Container>
      <section className="py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === category.id
                    ? "bg-white shadow text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div
          id="portfolio-gallery"
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredImages.map((image, index) => (
            <a
              key={index}
              href={image.src}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Portfolio;
