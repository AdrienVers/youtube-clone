import FilmIcon from "../assets/filmicon.png";
import GamingIcon from "../assets/gamingicon.png";
import MusicIcon from "../assets/musicicon.png";
import WesternIcon from "../assets/westernicon.png";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_URL = "https://api.themoviedb.org/3/";

const fetchMovies = async (endpoint) => {
  return await fetch(
    `${API_URL}${endpoint}?language=fr-FR&api_key=${API_KEY}`
  ).then((response) => response.json());
};

const fetchWestern = async (endpoint) => {
  return await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&with_genres=37`
  ).then((response) => response.json());
};

export const getMovies = async () => {
  return [
    {
      name: "top-rated",
      films: await fetchMovies("movie/top_rated"),
    },
  ];
};

export const getWestern = async () => {
  return [
    {
      name: "western",
      films: await fetchWestern("discover/movie"),
    },
  ];
};

export const explorerData = [
  {
    title: "Films & TV",
    info: "Découvrez les dernières sorties et les meilleurs films.",
    image: FilmIcon,
    link: "/film",
  },
  {
    title: "Gaming",
    info: "Découvrez les meilleurs jeux et les nouveautés.",
    image: GamingIcon,
    link: "/gaming",
  },
  {
    title: "Music",
    info: "Découvrez les musiques du moment et les meilleurs playlists.",
    image: MusicIcon,
    link: "/music",
  },
  {
    title: "Western",
    info: "Revivez les moments fort des années 1930 à 1950 avec une sélection de Western.",
    image: WesternIcon,
    link: "/western",
  },
];
