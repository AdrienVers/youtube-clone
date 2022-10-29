import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import VideoCard from "../components/VideoCard";
import styled from "styled-components";

const FilmGlobal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

function Film({ items }) {
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
    <FilmGlobal>
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
    </FilmGlobal>
  );
}

export default Film;
