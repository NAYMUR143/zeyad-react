import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import logo from "../../components/images/logo.png";
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
  a {
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

    .catalog-container {
      width: 48.75%;
      display: flex;
      align-items: center;
    }
  }

  img {
    cursor: pointer;
  }
`;

const Header = () => {
  const router = useRouter();

  useEffect(() => {
    let paddingTop_ = document.querySelector(".header-container").offsetHeight;
    document.querySelector("#__next").style.paddingTop = `${paddingTop_}px`;
  }, []);

  return (
    <HeaderDiv>
      <div className="header-container">
        <div className="catalog-container">
          <Link href="/collections/all">24k catalog</Link>
        </div>

        <div
          className="logo"
          onClick={() => {
            router.push("/");
          }}
        >
          <Image src={logo} alt="main-logo" />
        </div>
      </div>
    </HeaderDiv>
  );
};

export default Header;
