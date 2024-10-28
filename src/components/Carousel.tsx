"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import cards from "@/data/brandCards";
import Image from "next/image";
import Link from "next/link";

export default function ImageCarousel() {
  return (
    <div className=" w-full h-[200px] mb-52 flex flex-col justify-center mt-10">
      <div className="">
        <h1 className="text-2xl  ml-20  text-[#EE484A]  ">TRUSTED BY</h1>

        <div className="w-full h-[200px]">
          <Swiper
            spaceBetween={15}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={6000}
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {cards.map((image) => (
              <SwiperSlide key={image.id} className="flex justify-center">
                <Link href={`/${image.title}`}>
                  <Image
                    src={image.img}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-lg transform scale-[40%]"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
