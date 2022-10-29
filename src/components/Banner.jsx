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
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  border-bottom: solid 0.3px black;

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
