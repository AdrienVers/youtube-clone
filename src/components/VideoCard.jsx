import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Profile from "../assets/Profile.jpg";

const VideoCardGlobal = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 15px;
  justify-content: space-evenly;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const VideoCardLater = styled.div`
  display: none;
  background-color: rgb(31, 31, 31);
  width: 30px;
  height: 30px;
  text-align: center;
  color: white;
  border-radius: 3px;
  font-size: 1.1rem;
  font-weight: 600;
  opacity: 0.9;
  position: absolute;
  top: 0px;
  right: 0px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const VideoCardContainer = styled.div`
  color: black;
  width: 300px;
  height: 260px;
  display: flex;
  flex-direction: column;
  //box-shadow: inset 0px 0px 0px 1px black;

  &:hover {
    cursor: pointer;

    ${VideoCardLater} {
      display: flex;
    }
  }
`;

const VideoCardImage = styled.div`
  position: relative;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const VideoCardInfo = styled.div`
  height: 40%;
  display: flex;
`;

const VideoCardProfile = styled.div`
  width: 22%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    object-fit: contain;
  }
`;

const VideoCardDetails = styled.div`
  width: 83%;
  display: flex;
  flex-direction: column;
  padding: 8px 5px 8px 8px;

  span:nth-child(1) {
    font-weight: bold;
    font-size: 1rem;
    padding: 2px 0px 2px 0px;
    height: 50%;
    display: flex;
    align-items: center;
  }

  span:nth-child(2) {
    font-size: 0.9rem;
    color: rgb(90, 90, 90);
    font-weight: 500;
    padding: 2px 0px 2px 0px;
    height: 25%;
  }

  span:nth-child(3) {
    font-size: 0.9rem;
    color: rgb(90, 90, 90);
    padding: 2px 0px 2px 0px;
    height: 25%;
  }
`;

const VideoCardDuration = styled.div`
  background-color: rgb(31, 31, 31);
  // width: 40px;
  padding: 0px 5px 0px 5px;
  height: 18px;
  text-align: center;
  color: white;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 600;
  opacity: 0.9;
  position: absolute;
  bottom: -2px;
  right: -5px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3/";

const fetchMovies = async (endpoint) => {
  return await fetch(
    `${API_URL}${endpoint}?language=fr-FR&api_key=${API_KEY}`
  ).then((response) => response.json());
};

const getInfos = async (movieId) => {
  return [
    {
      name: "top-rated",
      film: await fetchMovies(`movie/${movieId}`),
    },
  ];
};

function VideoCard({ id }) {
  const [movieInfos, setMovieInfos] = useState([]);

  useEffect(() => {
    const loadAllMovies = async () => {
      let list = await getInfos(id);
      setMovieInfos(list);
    };
    loadAllMovies();
  }, [id]);

  function truncateString(str, n) {
    if (n >= str.length) {
      return str;
    }
    return str.slice(0, n) + "...";
  }

  function truncateNumber(str) {
    if (str > 1) {
      return Math.trunc(str) + "k vues";
    } else {
      return str + " vues";
    }
  }

  function truncateRunTime(str) {
    const secondsMovie = str * 59;

    let hours = Math.floor(secondsMovie / 3600);
    let minutes = Math.floor(secondsMovie / 60) - hours * 60;
    let seconds = secondsMovie % 60;

    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    if (hours === "00") {
      return `${minutes} : ${seconds}`;
    } else {
      return `${hours} : ${minutes} : ${seconds}`;
    }
  }

  function truncateDate(str) {
    const filmDate = new Date(str);
    const todayDate = new Date(`${new Date().toISOString().slice(0, 10)}`);
    const diffDate = Math.abs(todayDate - filmDate);
    const days = diffDate / (1000 * 3600 * 24);

    function yearDelay(n) {
      return 365 * n < days && days <= 365 * (n + 1);
    }

    for (let i = 0; i < 60; i++) {
      if (yearDelay(i)) {
        return `Il y a ${i} ans.`;
      } else if (yearDelay(0)) {
        return `Il y a moins d'un an.`;
      } else if (yearDelay(1 <= i && i < 2)) {
        return "Il y a 1 an.";
      }
    }
  }

  return (
    <VideoCardGlobal>
      {movieInfos.map((info, key) => (
        <VideoCardContainer key={key}>
          <VideoCardImage>
            <img
              src={`https://image.tmdb.org/t/p/original/${info.film.backdrop_path}`}
              alt="Miniature"
            />
            <VideoCardLater>
              <i className="fa-solid fa-clock"></i>
            </VideoCardLater>
            <VideoCardDuration>
              {truncateRunTime(info.film.runtime)}
            </VideoCardDuration>
          </VideoCardImage>

          <VideoCardInfo>
            <VideoCardProfile>
              {info.film.production_companies
                ?.slice(0, 1)
                .map((item) =>
                  item.logo_path ? (
                    <img
                      key={item.id}
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                      alt="Profil"
                    />
                  ) : (
                    <img key={item.id} src={Profile} alt="Profil" />
                  )
                )}
            </VideoCardProfile>
            <VideoCardDetails>
              <span>{truncateString(`${info.film.title}`, 50)}</span>
              {info.film.production_companies?.slice(0, 1).map((item) => (
                <span key={item.id}>{item.name}</span>
              ))}
              <span>
                {truncateNumber(info.film.popularity)} -{" "}
                {truncateDate(info.film.release_date)}
              </span>
            </VideoCardDetails>
          </VideoCardInfo>
        </VideoCardContainer>
      ))}
    </VideoCardGlobal>
  );
}

export default VideoCard;
