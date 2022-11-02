import React from "react";
import styled from "styled-components";
import Tagsbar from "../components/Tagsbar";
import Film from "./Film";

const HomeGlobal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  margin-top: 60px;
`;

const Home = () => {
  return (
    <HomeGlobal>
      <Tagsbar />
      <Film />
    </HomeGlobal>
  );
};

export default Home;
