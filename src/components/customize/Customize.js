import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import { textAlign } from "@mui/system";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

const CustomizeDiv = styled.div`
  position: relative;
  width: 100%;
  padding-top: 70px;

  .mySwiper {
    width: 100%;
    height: 70vh;
  }

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  p,
  li {
    font-weight: 500;
    font-size: 0.75rem;

    text-transform: uppercase;
  }

  p,
  ul {
    margin: 10px 0;
  }

  li {
    margin-right: 10px;
  }

  ul {
    display: flex;
    list-style: none;

    align-items: flex-start;
    justify-content: flex-start;
  }

  .dynami-img {
    padding: 0 10px;
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

  .gray-clr {
    color: #c4c4c4 !important;
  }
`;

const Customize = ({ itm }) => {
  let { name_, price_, colors_, sizes_, color1_, color2_, color3_, dtImgArr } =
    itm;

  return (
    <CustomizeDiv>
      <div className="dynami-img">
        <Grid container spacing={1.3} style={{ position: "relative" }}>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "inherit",
                },
              }}
            >
              <Grid container spacing={1.3}>
                {dtImgArr.map((imgObj, i) => (
                  <Grid item xs={6} key={i}>
                    <img src={imgObj.src} alt="img" />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box
              sx={{
                display: {
                  xs: "inherit",
                  sm: "none",
                },
              }}
            >
              <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {dtImgArr.map((imgObj, i) => (
                  <SwiperSlide>
                    <img
                      src={imgObj.src}
                      alt="img"
                      style={{ width: "100%", height: "400px" }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Grid
              container
              spacing={1.3}
              style={{
                position: "sticky",
                top: "70px",
                left: 0,
              }}
            >
              <Grid item xs={12} style={{ paddingTop: "70px" }}>
                <Grid container spacing={1.3}>
                  <Grid item xs={12} sm={12} md={4}>
                    <p className="title-name">{name_}</p>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4}>
                    <p className="title-price">{price_}</p>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4}>
                    <p style={{ textAlign: "right" }}>
                      <span className="dynamic-bracket">ADD TO BAG</span>
                    </p>
                  </Grid>
                </Grid>

                <Grid container spacing={1.3}>
                  <Grid item xs={12} sm={12} md={4}>
                    <p className="title-color">COLOUR</p>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <p className="title-color-arr">{colors_}</p>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}></Grid>
                </Grid>

                <Grid container spacing={1.3}>
                  <Grid item xs={12} sm={12} md={4}>
                    <p className="title-size-name">SIZE</p>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <ul className="title-size-arr">
                      {sizes_.map((sz, i) => (
                        <li key={i}>{sz}</li>
                      ))}
                    </ul>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}></Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ margin: "10px 0 36px 0" }}>
                <Grid container spacing={1.3}>
                  <Grid item xs={1.5}>
                    <div
                      style={{
                        backgroundColor: color1_,

                        width: "50px",
                        minHeight: "60px",
                      }}
                    ></div>
                  </Grid>
                  <Grid item xs={1.5}>
                    <div
                      style={{
                        backgroundColor: color2_,
                        width: "50px",
                        minHeight: "60px",
                      }}
                    ></div>
                  </Grid>
                  <Grid item xs={1.5}>
                    <div
                      style={{
                        backgroundColor: color3_,
                        width: "50px",
                        minHeight: "60px",
                      }}
                    ></div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </CustomizeDiv>
  );
};

export default Customize;
