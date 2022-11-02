import React, { useContext } from "react";
import styled from "styled-components";
import YoutubeLogo from "../assets/YouTubeLogo.png";
import YoutubeMiniLogo from "../assets/YouTubeMini.png";
import SearchVideo from "./SearchVideo";
import ConnexionImg from "../assets/Connection.png";
import { HamburgerContext } from "../context/HamburgerContext";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

const NavbarGlobal = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  // box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.4);
  padding: 0 0.5rem;
  height: 60px;
  z-index: 2;
`;

const NavbarTopLeft = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  i {
    padding: 0px 20px 0px 25px;
    font-size: 1.5rem;
    color: black;

    &:hover {
      cursor: pointer;
    }
  }

  img {
    height: 8vmin;
    max-height: 22px;
    padding-left: 5px;
    margin-top: 6px;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 1000px) {
    width: 30%;
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
    width: 30%;

    i {
      padding: 0px 18px 0px 18px;
    }
  }
`;

const NavbarTopCenter = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 40%;
  }

  @media (max-width: 600px) {
    justify-content: center;
    width: 50%;
  }
`;

const NavbarTopRight = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    height: 10vmin;
    max-height: 38px;
    border-radius: 50px;
    margin: 2px 30px 0px 20px;

    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 3px 2px #ccc;
    }
  }

  i {
    margin: 0px 12px 0px 12px;
    font-size: 1.2rem;
    color: black;

    &:hover {
      cursor: pointer;
    }

    @media (max-width: 600px) {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    width: 30%;
  }

  @media (max-width: 600px) {
    justify-content: center;
    width: 20%;
  }
`;

function Navbar() {
  const { toggleHamburger } = useContext(HamburgerContext);
  const { hamburgerIsClicked } = useContext(HamburgerContext);
  const phoneSize = useMediaQuery("(max-width: 600px)");

  return (
    <NavbarGlobal>
      <NavbarTopLeft>
        {phoneSize ? (
          <>
            {hamburgerIsClicked ? (
              <i onClick={toggleHamburger} className="fa-solid fa-bars"></i>
            ) : (
              <i onClick={toggleHamburger} className="fa-solid fa-xmark"></i>
            )}
          </>
        ) : (
          <i onClick={toggleHamburger} className="fa-solid fa-bars"></i>
        )}
        <Link to="/youtube-clone">
          {phoneSize ? (
            <img src={YoutubeMiniLogo} alt="YoutubeMiniLogo" />
          ) : (
            <img src={YoutubeLogo} alt="YoutubeLogo" />
          )}
        </Link>
      </NavbarTopLeft>
      <NavbarTopCenter>
        <SearchVideo />
      </NavbarTopCenter>
      <NavbarTopRight>
        <i className="fa-solid fa-video"></i>
        <i className="fa-solid fa-bell"></i>
        <Link to="/account">
          <img src={ConnexionImg} alt="ProfilImg" />
        </Link>
      </NavbarTopRight>
    </NavbarGlobal>
  );
}

export default Navbar;
