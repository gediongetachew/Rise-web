import { StaticImageData } from "next/image";
import brand from "../../public/assets/mastercard.png";

interface brandCards {
  id: number;
  title: string;
  img: StaticImageData;
  url: string;
  alt: string;
}

const cards: brandCards[] = [
  { id: 1, title: "brand1", img: brand, url: "/brand", alt: "bran-img" },
  {
    id: 2,
    title: "brand1",
    img: brand,
    url: "/brand",
    alt: "bran-img",
  },
  {
    id: 3,
    title: "brand1",
    img: brand,
    url: "/brand",
    alt: "bran-img",
  },
  {
    id: 4,
    title: "brand1",
    img: brand,
    url: "/brand",
    alt: "bran-img",
  },
  {
    id: 5,
    title: "brand1",
    img: brand,
    url: "/brand",
    alt: "bran-img",
  },
  {
    id: 6,
    title: "brand1",
    img: brand,
    url: "/brand",
    alt: "bran-img",
  },
];

export default cards;
