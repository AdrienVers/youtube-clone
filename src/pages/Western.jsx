import VideoCard from "../components/VideoCard";
import styled from "styled-components";

const FilmGlobal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

function Western({ items }) {
  return (
    <FilmGlobal>
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

export default Western;
