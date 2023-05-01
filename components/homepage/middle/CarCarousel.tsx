import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

declare module 'react-slick' {
  interface Settings {
    currentSlide?: number;
  }
}
const CarCarousel = () => {
  const sliderRef = useRef<Slider>(null);

  const handleSwipe = (swipeDirection: string) => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
      const currentSlide = parseInt(sliderRef.current.props.currentSlide);
      sliderRef.current.slickGoTo(currentSlide, true);
      if ((sliderRef.current as any)?.slickSetOption) {
        (sliderRef.current as any)?.slickSetOption("speed", 500);
      }
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: false,
    centerMode: true,
    centerPadding: "0px",
    touchMove: false,
    swipe: false,
    currentSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const images = [
    { src: "/car photos/audiA4.webp", alt: "audiA4" },
    { src: "/car photos/bmw 3 series.jpg", alt: "bmw 3 series" },
    { src: "/car photos/bmw i.png", alt: "bmw i" },
    { src: "/car photos/mercedes E450.png", alt: "mercedes E450" },
    { src: "/car photos/tesla model 3.webp", alt: "tesla model 3" }
  ];



  return (
    <div className="w-1/2 mx-auto">
    <Slider {...settings}
     ref={sliderRef}
    onSwipe={handleSwipe}
    >
    {images.map((image) => (
      <div key={image.src}>
        <Image
          src={image.src}
          alt={image.alt}
          width={200}
          height={200}
        />
      </div>
    ))}
  </Slider>
  </div>
  );
};

export default CarCarousel;