
import React, { useState, useEffect } from "react";
import ImageModal from "./ImageModal";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // Serreta slideshow images
  const serretaImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4067c26299814dfb9c937ee7db64acb6/9c57d8f66c7601bd2e720221e0ac5253410d48f7cd0cabcf02724c6a5024a4b1?placeholderIfAbsent=true",
      alt: "Serreta landscape view 1"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4067c26299814dfb9c937ee7db64acb6/93fe3b808d2394efb68625da2e94ed2387dc083d256b6b6f8dd992b60fac07cf?placeholderIfAbsent=true",
      alt: "Serreta landscape view 2"
    }
  ];

  // Casa da Lapa slideshow images
  const casaDaLapaImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4067c26299814dfb9c937ee7db64acb6/ac7e7d30ebd23f6a6ca749de9b1f7d863f0bab091b0adf49ca56fdf2e8ceeeae?placeholderIfAbsent=true",
      alt: "Casa da Lapa interior view 1"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/4067c26299814dfb9c937ee7db64acb6/3acb8ea99d4e5605ffa786ec39f5f20951fae6b2850a0b3bf1893a41b682a7a1?placeholderIfAbsent=true",
      alt: "Casa da Lapa interior view 2"
    }
  ];

  const [currentSerretaImageIndex, setCurrentSerretaImageIndex] = useState(0);
  const [currentCasaImageIndex, setCurrentCasaImageIndex] = useState(0);

  // Auto slideshow effect for Serreta images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSerretaImageIndex((prevIndex) => 
        prevIndex === serretaImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Auto slideshow effect for Casa da Lapa images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCasaImageIndex((prevIndex) => 
        prevIndex === casaDaLapaImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const openImageModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="flex w-[1072px] max-w-full gap-[66px_17px] text-[50px] text-black font-normal text-center justify-center flex-wrap mt-[87px] max-md:text-[40px] max-md:mt-10">
      <h2 className="grow shrink w-[454px] max-md:max-w-full max-md:text-[40px]">
        Galeria - SERRETA
      </h2>
      
      {/* Serreta slideshow gallery */}
      <div className="w-[845px] min-w-60 flex justify-center items-center gap-4">
        <div className="relative w-full h-[500px] overflow-hidden">
          {serretaImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute top-0 left-0 w-full h-full object-cover cursor-pointer transition-opacity duration-1000 ${
                currentSerretaImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => openImageModal(image.src, image.alt)}
            />
          ))}
          
          {/* Slideshow indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {serretaImages.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSerretaImageIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <h2 className="grow shrink w-[454px] max-md:max-w-full max-md:text-[40px]">
        Galeria - A Casa da Lapa
      </h2>
      
      {/* Casa da Lapa slideshow gallery */}
      <div className="w-[845px] min-w-60 flex justify-center items-center gap-4">
        <div className="relative w-full h-[500px] overflow-hidden">
          {casaDaLapaImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute top-0 left-0 w-full h-full object-cover cursor-pointer transition-opacity duration-1000 ${
                currentCasaImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => openImageModal(image.src, image.alt)}
            />
          ))}
          
          {/* Slideshow indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {casaDaLapaImages.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentCasaImageIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={closeImageModal}
        />
      )}
    </section>
  );
};

export default Gallery;
