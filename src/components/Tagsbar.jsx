import React, { useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import { tagsData } from "../datas/tagsData";
import HamburgerContextProvider from "../context/HamburgerContext";
import { HamburgerContext } from "../context/HamburgerContext";

const TagsbarGlobal = styled.div`
  z-index: 10;
  width: ${({ isClicked, theme: { tagsbarBehaviour } }) =>
    isClicked
      ? tagsbarBehaviour.sidebarIsClose
      : tagsbarBehaviour.sidebarIsOpen};

  display: flex;
  text-align: center;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top: solid 0.5px rgb(220, 220, 220);
  border-bottom: solid 0.5px rgb(220, 220, 220);
  position: fixed;
  top: 60px;

  @media (max-width: 900px) {
    width: ${({ isClicked, theme: { tagsbarBehaviour } }) =>
      isClicked
        ? tagsbarBehaviour.sidebarIsClose
        : tagsbarBehaviour.sidebarIsHalf};
  }

  @media (max-width: 600px) {
    width: ${({ theme: { tagsbarBehaviour } }) =>
      tagsbarBehaviour.sidebarIsClose};
  }
`;

const MySwiperItem = styled(SwiperSlide)`
  background-color: rgb(245, 245, 245);
  border-radius: 40px;
  white-space: nowrap;
  overflow: hidden;
  box-shadow: inset 0px 0px 0px 0.3px grey;
  padding: 5px 0px 5px 0px;

  &:hover {
    cursor: pointer;
    background-color: rgb(230, 230, 230);
  }
`;

const MySwiperButton = styled.div`
  cursor: pointer;
  color: grey;
  background-color: white;

  &:nth-child(1) {
    margin-left: 30px;
    margin-right: 20px;
  }

  &:nth-child(3) {
    margin-right: 30px;
    margin-left: 20px;
  }
`;

function Tagsbar() {
  const { hamburgerIsClicked } = useContext(HamburgerContext);
  const swiperRef = useRef();

  const sliderSettings = {
    200: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    800: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1000: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 30,
    },
  };
  return (
    <HamburgerContextProvider>
      <TagsbarGlobal isClicked={hamburgerIsClicked}>
        <MySwiperButton onClick={() => swiperRef.current?.slidePrev()}>
          <i className="fa-solid fa-caret-left"></i>
        </MySwiperButton>

        <Swiper
          breakpoints={sliderSettings}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {tagsData.map((item, index) => {
            return <MySwiperItem key={index}>{item.name}</MySwiperItem>;
          })}
        </Swiper>

        <MySwiperButton onClick={() => swiperRef.current?.slideNext()}>
          <i className="fa-solid fa-caret-right"></i>
        </MySwiperButton>
      </TagsbarGlobal>
    </HamburgerContextProvider>
  );
}

export default Tagsbar;
