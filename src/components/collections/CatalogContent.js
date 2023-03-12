import styled from "@emotion/styled";
import PrintOneImgBox from "./PrintOneImgBox";
import { Grid } from "@mui/material";
import { Box, display } from "@mui/system";
import { useEffect, useState } from "react";

const CatalogContentDiv = styled.div`
  width: 100%;

  h4 {
    position: relative;
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;

    .fixed-bracket {
      position: relative;
      margin-left: 10px;

      ::before {
        position: absolute;
        content: "[";
        left: -5px;
      }
      ::after {
        position: absolute;
        content: "]";
      }
    }
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
    padding: 20px 10px 10px 10px;
    display: flex;
    justify-content: space-between;
  }

  .img-arr-container {
    width: 100%;
  }
`;

const CatalogContent = () => {
  let [imgDataArr, setImgDataArr] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch("/api/collections/data");
      let data = await res.json();

      setImgDataArr(data);
    })();
  }, []);

  return (
    <CatalogContentDiv>
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
            <h4>
              home <span>{">"}</span> all
            </h4>
          </div>
        </Box>

        <div>
          <h4 className="dynamic-bracket">FILTER</h4>
        </div>

        <div>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "inherit",
              },
            }}
          >
            <h4>
              4 <span className="fixed-bracket">6</span>
            </h4>
          </Box>
          <Box
            sx={{
              display: {
                sm: "inherit",
                md: "none",
              },
            }}
          >
            2 <span className="fixed-bracket">3</span>
          </Box>
        </div>

        <div>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "inherit",
              },
            }}
          >
            <h4 className="dynamic-bracket">need help?</h4>
          </Box>
        </div>
      </div>

      <div className="img-arr-container">
        <Grid
          container
          spacing={1.3}
          style={{
            padding: "10px",
          }}
        >
          {imgDataArr &&
            imgDataArr.map((obj, i) => (
              <Grid item sm={4} md={2} key={i}>
                <div className="single-img-container">
                  <PrintOneImgBox obj={obj} />
                </div>
              </Grid>
            ))}
        </Grid>
      </div>
    </CatalogContentDiv>
  );
};

export default CatalogContent;
