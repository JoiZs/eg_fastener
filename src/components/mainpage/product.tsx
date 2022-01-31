import React, { useEffect } from "react";
import Productcont from "../subcomps/productpg/productcont";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import Eachproduct from "../subcomps/productpg/eachproduct";
import { useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import gsap from "gsap";

interface Props {}

const Product = (props: Props) => {
  let searchparam = useLocation().search.slice(1, 20);
  const preScroll = [
    { param: "coldforging", bar: 2 / 6, slide: -window.innerWidth },
    { param: "cncmachining", bar: 3 / 6, slide: -window.innerWidth * 2 },
    { param: "stamping", bar: 4 / 6, slide: -window.innerWidth * 3 },
    { param: "wireforming", bar: 5 / 6, slide: -window.innerWidth * 4 },
    { param: "tooling", bar: 1, slide: -window.innerWidth * 5 },
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
    <div className="pt-16 h-screen w-screen bg-black max-h-screen overflow-hidden">
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
          <Productcont />
        </SwiperSlide>
        <SwiperSlide>
          <Eachproduct secID="coldforging" />
        </SwiperSlide>
        <SwiperSlide>
          <Eachproduct secID="cncmachining" />
        </SwiperSlide>
        <SwiperSlide>
          <Eachproduct secID="stamping" />
        </SwiperSlide>
        <SwiperSlide>
          <Eachproduct secID="wireforming" />
        </SwiperSlide>
        <SwiperSlide>
          <Eachproduct secID="tooling" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Product;
