import React from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
interface Props {}

const Certislider = (props: Props) => {
  const certificates = [
    {
      alt: "slide1",
      url: "https://slidechef.net/wp-content/uploads/2021/05/PowerPoint-Certificate-Templates-and-Google-Slides-1-1024x576.jpg",
    },
    {
      alt: "slide2",
      url: "https://slidechef.net/wp-content/uploads/2021/05/PowerPoint-Certificate-Templates-and-Google-Slides-1-1024x576.jpg",
    },
    {
      alt: "slide3",
      url: "https://slidechef.net/wp-content/uploads/2021/05/PowerPoint-Certificate-Templates-and-Google-Slides-1-1024x576.jpg",
    },
    {
      alt: "slide4",
      url: "https://slidechef.net/wp-content/uploads/2021/05/PowerPoint-Certificate-Templates-and-Google-Slides-1-1024x576.jpg",
    },
  ];
  return (
    <div>
      <Splide
        options={{
          gap: "1em",
          lazyLoad: true,
          autoplay: true,
          rewind: true,
          // eslint-disable-next-line no-restricted-globals
          perPage: parseInt(`${innerHeight > innerWidth ? "2" : "1"}`),
          slideFocus: true,
          focus: "center",
          wheel: true,
          // eslint-disable-next-line no-restricted-globals
          type: `${innerHeight > innerWidth ? "slide" : "fade"}`,
        }}
        className=""
      >
        {certificates.map((el) => (
          <SplideSlide key={el.alt}>
            <img
              className="rounded-lg filter grayscale invert"
              src={el.url}
              alt={el.alt}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Certislider;
