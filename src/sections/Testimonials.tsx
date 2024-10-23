"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Abdu K",
    position: "CEO, Mint Corp",
    testimony:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatibus quidem officiis numquam. Mollitia, rerum fugit, quibusdameveniet molestias laudantium harum consequuntur vero temporibus rem nostrum saepe cumque beatae non.",
  },
  {
    name: "Jane Smith",
    position: "Marketing Manager, Tech Solutions",
    testimony:
      "Their attention to detail and commitment to delivering top-notch quality was evident from the start. Every question I had was answered promptly, and they were incredibly patient with all of my requests. The end result was better than I could have ever imagined, and the customer service was impeccable. This is the kind of company you want to work with!",
  },
  {
    name: "Alex Johnson",
    position: "CTO, Digital Dreams",
    testimony:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatibus quidem officiis numquam. Mollitia, rerum fugit, quibusdameveniet molestias laudantium harum consequuntur vero temporibus rem nostrum saepe cumque beatae non.",
  },
  {
    name: "Emily Davis",
    position: "HR Manager, StartUp World",
    testimony:
      "Their attention to detail and commitment to delivering top-notch quality was evident from the start. Every question I had was answered promptly, and they were incredibly patient with all of my requests. The end result was better than I could have ever imagined, and the customer service was impeccable. This is the kind of company you want to work with!",
  },
];

export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - 1);
    }
  };

  return (
    <div className="w-1/2 max-w-3xl mx-auto px-5 py-5">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full h-80 flex flex-col justify-center items-center">
        <p className="italic text-gray-600 text-center mb-6 w-3/4">
          "{testimonials[currentIndex].testimony}"
        </p>

        <div className="flex justify-between items-center w-full ">
          <div className="flex items-center space-x-3">
            <div className="p-20">
              <h3 className="text-lg font-bold text-blue-900">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm text-gray-500">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </div>

          <div className="flex space-x-3 items-center">
            <button
              onClick={prevTestimonial}
              className="text-xl font-bold p-2 rounded-full bg-gray-300 hover:bg-gray-400"
            >
              &lt;
            </button>

            <button
              onClick={nextTestimonial}
              className="text-xl font-bold p-2 rounded-full bg-gray-300 hover:bg-gray-400"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5 space-x-3">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-900" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
