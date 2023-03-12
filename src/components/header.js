import * as React from "react";
import styled from "@emotion/styled";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, Fragment, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Grid } from "@mui/material";

const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;
  background-color: #fff;

  width: 100%;
  display: flex;
  justify-content: center;

  border-bottom: 1px solid #ededed;
  .logo {
    width: 100px;
    height: 50px;
    img {
      width: 100%;
      object-fit: contain;
      height: 100%;
    }
  }
  a,
  p {
    position: relative;
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;

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

  .header-container {
    padding: 10px;

    width: 100%;
    display: flex;

    justify-content: space-between;

    .catalog-container {
      display: flex;
      align-items: center;
    }
  }

  img {
    cursor: pointer;
  }

  .dynamic-bracket {
    position: relative;

    :hover::before {
      position: absolute;
      content: "[";
      left: -5px;
      bottom: 0;
    }

    :hover::after {
      position: absolute;
      content: "]";
      bottom: 0;
    }
  }
`;
const DrawerContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #fff;

  p {
    position: relative;
    font-weight: 500;
    font-size: 0.75rem;
    text-transform: uppercase;

    margin: 16px 0;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Header = () => {
  const rootImgLink = "https://exp-img.netlify.app";
  const navigate = useNavigate();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    //let paddingTop_ = document.querySelector(".header-container").offsetHeight;
    //document.querySelector("#__next").style.paddingTop = `${paddingTop_}px`;
  }, []);

  return (
    <HeaderDiv>
      <>
        <div className="header-container">
          <div className="catalog-container">
            <Link to="/collections/all">24k catalog</Link>
          </div>

          <div
            className="logo"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="/img/logo.png" alt="main-logo" />
          </div>

          <div className="catalog-container">
            {["right"].map((anchor) => (
              <Fragment key={anchor}>
                <p
                  href="#"
                  className="dynamic-bracket"
                  onClick={toggleDrawer(anchor, true)}
                >
                  BAG
                </p>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <DrawerContainer>
                    <ListItem>
                      <p>BAG</p>
                    </ListItem>
                    <Divider></Divider>
                    <ListItem>
                      <p>YOUR CART IS EMPTY</p>
                    </ListItem>
                    <Divider></Divider>
                    <ListItem>
                      <Grid container spacing={1.3}>
                        <Grid item xs={6}>
                          <img
                            src={`${rootImgLink}/img/topProductImage/01Product_home.jpg`}
                            alt="img"
                          />
                          <p>Classic mafia tee</p>
                        </Grid>
                        <Grid item xs={6}>
                          <img
                            src={`${rootImgLink}/img/bottomProductImage/04BottomProduct_home.jpg`}
                            alt="img"
                          />
                          <p>Classic mafia hoodie</p>
                        </Grid>
                      </Grid>
                    </ListItem>
                  </DrawerContainer>
                </Drawer>
              </Fragment>
            ))}
          </div>
        </div>
      </>
    </HeaderDiv>
  );
};

export default Header;
