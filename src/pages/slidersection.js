import styled from "@emotion/styled";
import { Box, display } from "@mui/system";
import Link from "next/link";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";
import Image from "next/image";

const SliderSectionDiv = styled.div`
  width: 100%;
  margin: 50px 0;

  button,
  a,
  h4 {
    position: relative;
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;
  }

  .fix-brackets {
    ::before,
    ::after {
      bottom: 0;
    }
  }

  button {
    background-color: transparent;
    border: none;
    color: #000;
    cursor: pointer;
    display: inline-block;

    font-style: normal;
    font-weight: 500;
    line-height: 1;

    margin: 0 10px 0 0;
    outline: none;
    padding: 0;
    text-transform: uppercase;
    transition: color 0.2s ease-in-out;
    white-space: nowrap;
  }

  .container_ {
    padding: 10px;
  }

  .dynamic-bracket {
    position: relative;

    :hover::before {
      position: absolute;
      content: "[";
      left: -5px;
    }

    :hover::after {
      position: absolute;
      content: "]";
    }
  }

  .top-div {
    padding: 20px 0px 10px 0px;
    display: flex;
    justify-content: space-between;
  }

  .slider-container {
    height: 76vh;

    .sub-swiper-container {
      position: relative;
      height: 100%;
      object-fit: contain;

      img {
        width: 100%;
        height: auto;
      }

      div {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 12px;

        p {
          font-size: 0.75rem;
          font-weight: 500;
          color: #fff;
        }
      }
    }
  }
`;

const SliderSection = () => {
  const sliderTopMiniTxtArr = [
    "Los angeles",
    "EATON CENTRE",
    "SQUARE ONE",
    "RIDEAU CENTRE",
  ];

  return (
    <SliderSectionDiv>
      <div className="container_">
        <div className="top-div">
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "inherit",
              },
            }}
          >
            <div>
              <h4>{sliderTopMiniTxtArr[0]}</h4>
            </div>
          </Box>

          <div>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                },
              }}
            >
              <button>PREV</button>
              <button>NEXT</button>
            </Box>
          </div>

          <div>
            <Box
              sx={{
                display: "flex",
              }}
            ></Box>
          </div>
        </div>

        <div className="slider-container">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="sub-swiper-container">
                <Image
                  src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1200/https://f.shgcdn.com/1a91ecc8-343f-42ad-9117-8618094c5b1a/"
                  alt="swiper-img"
                  width={1200}
                  height={1200}
                />

                <div>
                  <p>Galleria</p>
                  <p>Los angeles, California</p>
                  <p>USA</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="sub-swiper-container">
                <Image
                  src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1200/https://f.shgcdn.com/6f359136-6715-4efe-9487-6e97f0cb7329/"
                  alt="swiper-img"
                  width={1200}
                  height={1200}
                />

                <div>
                  <p>Galleria</p>
                  <p>Los angeles, California</p>
                  <p>USA</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="sub-swiper-container">
                <Image
                  src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1200/https://f.shgcdn.com/c0ff8eac-e5c1-444d-8f79-2962c77e02a7/"
                  alt="swiper-img"
                  width={1200}
                  height={1200}
                />

                <div>
                  <p>Desert</p>
                  <p>Los angeles, California</p>
                  <p>USA</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </SliderSectionDiv>
  );
};

export default SliderSection;
