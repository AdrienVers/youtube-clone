import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "../components/Slider";
import Tagsbar from "../components/Tagsbar";
import VideoCard from "../components/VideoCard";

const HomeGlobal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  margin-top: 60px;
`;

const FilmContainer = styled.div`
  width: 100%;
`;

const FilmList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 15px;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`;
const API_IMG = "https://image.tmdb.org/t/p/original/";


const Home = ({items}) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })

      .then((data) => {
        setMovies(data.results.slice(0, 10));
      })

      .catch((error) => console.log(error));
  }, [movies]);

  return (
    <HomeGlobal>
      <Tagsbar />
      <FilmContainer>
        <Slider datas={movies} api={true} images={API_IMG} />
      </FilmContainer>
      <br />
      <FilmList>
        {items.results.length > 0 &&
          items.results.map((item, key) => {
            return (
              <div key={key}>
                <VideoCard id={item.id} />
              </div>
            );
          })}
      </FilmList>
    </HomeGlobal>
  );
};

export default Home;
