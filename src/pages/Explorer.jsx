import React from "react";
import Banner from "../components/Banner";
import styled from "styled-components";
import { explorerData } from "../datas/moviesData";

const ExplorerGlobal = styled.div`
  width: 100%;

  .explorer-title {
    padding: 30px;
    font-size: 1.2rem;
    border-bottom: solid 0.3px black;
    box-shadow: 0 8px 12px -5px rgba(0, 0, 0, 0.35);
  }
`;

function Explorer() {
  return (
    <ExplorerGlobal>
      <p className="explorer-title">
        Sélectionnez votre thème préféré pour que nous vous proposions des
        vidéos intéressantes !
      </p>
      {explorerData.map((item, index) => {
        return (
          <Banner
            key={index}
            title={item.title}
            image={item.image}
            info={item.info}
            link={item.link}
          />
        );
      })}
    </ExplorerGlobal>
  );
}

export default Explorer;
