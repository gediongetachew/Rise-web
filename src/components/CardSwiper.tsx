// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Image from "next/image";
// import medical2 from "../../assets/medical2.png";
// import automobile3 from "../../assets/automobile3.png";
// import coffe from "../../assets/coffe.png";
// import spices from "../../assets/spices.png";

// // Import Swiper styles in your component or _app.js
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const CardSwiper = () => {
//   const cardData = [
//     {
//       image: medical2,
//       title: "Medical Innovations",
//       description: "Bringing cutting-edge technology to healthcare.",
//     },
//     {
//       image: automobile3,
//       title: "Automobile Services",
//       description: "We provide premium vehicle maintenance solutions.",
//     },
//     {
//       image: coffe,
//       title: "Import & Export",
//       description: "Connecting global markets with seamless operations.",
//     },
//     {
//       image: spices,
//       title: "Import & Export",
//       description: "Connecting global markets with seamless operations.",
//     },
//   ];

//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       spaceBetween={30}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 3000, disableOnInteraction: false }}
//       className="w-full h-[600px] px-5"
//     >
//       {cardData.map((card, index) => (
//         <SwiperSlide key={index}>
//           <div className="flex flex-col items-center justify-center h-full bg-white shadow-lg rounded-lg p-5">
//             <Image
//               src={card.image}
//               alt={card.title}
//               className="rounded-lg object-cover"
//               height={300}
//               width={500}
//             />
//             <h2 className="mt-5 text-2xl font-bold">{card.title}</h2>
//             <p className="mt-3 text-gray-600 text-center">{card.description}</p>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default CardSwiper;