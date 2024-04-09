"use client";
import { ImageGallery } from "react-image-grid-gallery";
import gymnast from './0.png';
import image from '../thumbs/1.jpg';

const imagesArray = [
  {
    alt: "Image1's alt text",
    caption: "Image1's description",
    src: {gymnast}
  },
  {
    alt: "Image2's alt text",
    caption: "Image2's description",
    src: {gymnast}
  },
  {
    alt: "Image3's alt text",
    caption: "Image3's description",
    src: {image}
  }
];

export default function App() {
  return (
    <ImageGallery
      imagesInfoArray={imagesArray}
      columnWidth={230}
      gapSize={24}
    />
  );
}