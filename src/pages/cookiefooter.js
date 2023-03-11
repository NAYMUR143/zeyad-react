import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const CookieFooterDiv = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;

  p {
    font-weight: 500;
    font-size: 0.75rem;
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

  button {
    width: 100%;
    margin-left: auto;
    cursor: pointer;

    background-color: #000;
    color: #fff;
    padding: 4px 10px;
  }
`;

const CookieFooter = () => {
  return (
    <CookieFooterDiv>
      <Grid container spacing={1.3} style={{ padding: "10px" }}>
        <Grid item xs={12} md={10.2}>
          <p>
            This website uses cookies to ensure you get the best experience. For
            more information about how we use cookies, please consult our Cookie
            Policy.
          </p>
        </Grid>

        <Grid item xs={12} md={1.6}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <button>
              <span className="dynamic-bracket">Accept {"&"} Close</span>
            </button>
          </Box>
        </Grid>
      </Grid>
    </CookieFooterDiv>
  );
};

export default CookieFooter;
