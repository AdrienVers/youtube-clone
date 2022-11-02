import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BannerGlobal = styled.div`
  width: 100%;
  height: 200px;
`;

const BannerContainer = styled.div`
  display: flex;
  height: 100%;
  border-bottom: solid 0.1px black;
  box-shadow: 0 8px 8px -5px rgba(0, 0, 0, 0.2);

  .BannerImg {
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 110px;
      height: 110px;
      object-fit: cover;
    }
  }

  .BannerInfo {
    width: 65%;
    // box-shadow: inset 0px 0px 0px 0.3px black;
    padding-left: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    button {
      width: 80px;
      padding: 2px;
      cursor: pointer;
    }
  }
`;

function Banner({ image, title, info, link }) {
  return (
    <BannerGlobal>
      <BannerContainer>
        <div className="BannerImg">
          <img src={image} alt="profile" />
        </div>
        <div className="BannerInfo">
          <h3>{title}</h3>
          <br />
          <p>{info}</p>
          <br />
          <Link to={link}>
            <button>Découvrir</button>
          </Link>
        </div>
      </BannerContainer>
    </BannerGlobal>
  );
}

export default Banner;
