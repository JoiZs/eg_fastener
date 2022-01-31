import React, { useEffect } from "react";
import { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Eachindus from "../subcomps/industrypg/eachindus";
import Industrycont from "../subcomps/industrypg/industrycont";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

interface Props {}

const Industry = (props: Props) => {
  let searchparam = useLocation().search.slice(1, 20);
  const preScroll = [
    { param: "automotive", bar: 2 / 5, slide: -window.innerWidth },
    { param: "construction", bar: 3 / 5, slide: -window.innerWidth * 2 },
    { param: "electronics", bar: 4 / 5, slide: -window.innerWidth * 3 },
    { param: "others", bar: 5 / 5, slide: -window.innerWidth * 4 },
  ];
  useEffect(() => {
    for (var i = 0; i < preScroll.length; i++) {
      if (searchparam === preScroll[i].param) {
        gsap.to(".swiper-pagination-progressbar-fill", {
          scaleX: preScroll[i].bar,
        });
        gsap.to(".swiper-wrapper", { translateX: preScroll[i].slide });
      }
    }
  });
  const progressbar = (progressbarFillClass: any) => {
    return (
      '<span  style="background: #3730a3; opacity:0.8" class=" ' +
      progressbarFillClass +
      '"></span>'
    );
  };
  return (
    <div className="pt-16 h-screen w-screen bg-black  max-h-screen overflow-hidden">
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        mousewheel={true}
        pagination={{
          dynamicBullets: true,
          type: "progressbar",
          renderProgressbar: progressbar,
        }}
        effect="fade"
        modules={[Mousewheel, Pagination]}
      >
        <SwiperSlide>
          <Industrycont />
        </SwiperSlide>
        <SwiperSlide>
          <Eachindus secID="automotive" />
        </SwiperSlide>
        <SwiperSlide>
          <Eachindus secID="construction" />
        </SwiperSlide>
        <SwiperSlide>
          <Eachindus secID="electronic" />
        </SwiperSlide>
        <SwiperSlide>
          <Eachindus secID="others" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Industry;
