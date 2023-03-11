import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import heroimg1 from "../../components/images/heroimg01.JPG";
import heroimg2 from "../../components/images/heroimg02.JPG";
const AfterHeaderDiv = styled.div`
  width: 100%;

  .img-container {
    padding: 10px;
  }

  p {
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;
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

  picture {
    position: relative;
  }

  picture::after {
    position: absolute;
    content: "OCTOBER'S VERY OWN CLASSIC COLLECTION";
    bottom: -16px;
    left: 0;

    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

const AfterHeader = () => {
  return (
    <AfterHeaderDiv>
      <div className="img-container">
        <Grid container spacing={1.3}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                },
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <picture>
                <Image
                  style={{ width: "auto", maxHeight: "70vh" }}
                  src={heroimg1}
                  alt="img"
                  width={1200}
                  height={1200}
                />
              </picture>
            </Box>

            <Box
              sx={{
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "none",
                },
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <picture>
                <Image
                  style={{ width: "100%", height: "auto" }}
                  src={heroimg1}
                  alt="img"
                  width={1200}
                  height={1200}
                />
              </picture>
            </Box>
          </Grid>

          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>

          <Grid item xs={12}>
            <p className="dynamic-bracket">Atlanta (24ºc)</p>
          </Grid>

          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>
    </AfterHeaderDiv>
  );
};

export default AfterHeader;
