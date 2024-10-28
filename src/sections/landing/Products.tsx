"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import img1 from "../../../public/assets/product1.jpg";
import img2 from "../../../public/assets/product2.jpg";
import img3 from "../../../public/assets/product3.jpg";
import img4 from "../../../public/assets/product4.jpg";
import img5 from "../../../public/assets/product1.jpg";

export default function Products() {
  const images = [
    {
      src: img1,
      title: "Medical Equipment and devices",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: img2,
      title: "Automobiles",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: img3,
      title: "Coffee",
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      src: img4,
      title: "Spice and Herbs",
      description: "Lorem ipsum dolor sit amet...",
    },
    { src: img5, title: "Product 5", description: "This is product 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollRef.current!.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollRef.current!.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full mt-10 px-20">
      <div className="mb-5 item-end justify-end right-2 flex space-x-2">
        <button
          onClick={handlePrev}
          className="border border-gray-900 text-gray-900 px-3 py-1 rounded-full hover:text-black disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="border border-gray-900 text-gray-900 px-3 py-1 rounded-full hover:text-black disabled:opacity-50"
          disabled={currentIndex === images.length - 1}
        >
          →
        </button>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-hide space-x-5"
        style={{ height: "350px" }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`min-w-[300px] h-full snap-center transition-transform duration-700 ease-in-out transform ${
              index === currentIndex ? "scale-100" : "scale-95"
            } ${index === currentIndex ? "animate-fade-in" : ""}`}
          >
            <Image
              src={img.src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-[250px] object-cover rounded-md"
            />
            <div className="mt-2">
              <h3 className="font-bold text-lg">{img.title}</h3>
              <p className="text-gray-500 text-sm">{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(50%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
