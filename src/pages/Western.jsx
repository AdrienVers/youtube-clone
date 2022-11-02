import styled from "styled-components";
import VideoList from "../components/VideoList";
import { useEffect, useState } from "react";
import { getWestern } from "../datas/moviesData";

const WesternGlobal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function Western() {
  const [westernList, setWesternList] = useState([]);

  useEffect(() => {
    const loadAllMovies = async () => {
      let westerns = await getWestern();
      setWesternList(westerns);
    };
    loadAllMovies();
  }, []);
  return (
    <WesternGlobal>
      {westernList.map((item, index) => (
        <VideoList key={index} items={item.films} />
      ))}
    </WesternGlobal>
  );
}

export default Western;
