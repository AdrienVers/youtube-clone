import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import styled from "styled-components";
import VideoList from "../components/VideoList";
import { getMovies } from "../datas/moviesData";

const FilmGlobal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FilmContainer = styled.div`
  width: 100%;
`;

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`;
const API_IMG = "https://image.tmdb.org/t/p/original/";

function Film() {
  const [movies, setMovies] = useState([]);
  const [moviesList, setMoviesList] = useState([]);

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

  useEffect(() => {
    const loadAllMovies = async () => {
      let movies = await getMovies();
      setMoviesList(movies);
    };
    loadAllMovies();
  }, []);

  return (
    <FilmGlobal>
      <FilmContainer>
        <Slider datas={movies} api={true} images={API_IMG} />
      </FilmContainer>
      <br />
      {moviesList.map((item, index) => (
        <VideoList key={index} items={item.films} />
      ))}
    </FilmGlobal>
  );
}

export default Film;
