import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const StickyCollectionDiv = styled.div`
  width: 100%;
  margin-top: 120px;

  .view-collection-link {
    margin-top: 10px;
  }

  h3 {
    font-weight: 500;
  }

  p {
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;
  }

  .main {
    padding: 10px;
  }

  .grid-container {
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

  .right-large-img-container {
    position: relative;
    height: 100%;

    .absolute-links {
      position: absolute;

      font-size: 0.75rem;
      font-weight: 500;
      background-color: #fff;
      padding: 2px;
    }

    .absolute-link-1 {
      top: 160px;
      left: 56px;
    }

    .absolute-link-2 {
      top: 278px;
      right: 10px;
    }

    .absolute-link-3 {
      bottom: 190px;
      left: 75px;
    }
  }
`;

const MiniImgContainer = styled.div`
  img {
    width: 100%;
    height: auto;
  }

  p {
    visibility: hidden;
  }

  :hover {
    p {
      visibility: visible;
    }
  }
`;

const StickyCollection = () => {
  return (
    <StickyCollectionDiv>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "inherit",
          },
        }}
      >
        <div className="grid-container">
          <Grid container spacing={1.3}>
            <Grid item xs={6}>
              <Grid container spacing={1.3} style={{ height: "100%" }}>
                <Grid
                  item
                  xs={12}
                  style={{
                    alignSelf: "flex-end",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={5.6}>
                      <h3>24KFOREVER</h3>
                      <p>
                        “NATURES FIRST GREEN IS GOLD” ©2023 — STAYGOLDSTUDIOS
                      </p>
                      <p></p>
                    </Grid>

                    <Grid item xs={6.4}></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <RightImg />
            </Grid>
          </Grid>
        </div>
      </Box>
    </StickyCollectionDiv>
  );
};

function RightImg() {
  return (
    <div className="right-large-img-container">
      <Image
        style={{
          width: "100%",
          height: "auto",
          paddingTop: "50px",
        }}
        src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/de577ffd-90b1-498b-bede-1eb1528f9d91/"
        alt="img-alt"
        width={1200}
        height={1200}
      />

      <Link
        href="#"
        className="absolute-links absolute-link-1"
        style={{ textTransform: "uppercase" }}
      >
        {"[1]"} classic mafia long sleave
      </Link>

      <Link
        href="#"
        className="absolute-links absolute-link-2"
        style={{ textTransform: "uppercase" }}
      >
        {"[2]"} classic 24k long sleave
      </Link>
    </div>
  );
}

export default StickyCollection;
