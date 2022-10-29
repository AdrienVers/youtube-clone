import { useEffect, useState } from "react";
import styled from "styled-components";

const ContentGlobal = styled.div`
  background-color: rgb(220, 220, 220);
  color: black;
  position: relative;
  width: 100%;
  height: 100%;

  #btn-left,
  #btn-right {
    position: absolute;
    top: 200px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: white;
    border-radius: 50px;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }

  #btn-left {
    left: 10px;
  }

  #btn-right {
    right: 10px;
  }

  .card {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 320px;
    height: 400px;
    z-index: 0;
    opacity: 0;
    transition: 500ms;


    img {
      object-fit: cover;
      cursor: pointer;
      width: 100%;
      height: 100%;
      padding: 30px;
    }
  }

  .card--extrem-extrem-left {
    transform: translateX(-420%);
    z-index: 0;
  }

  .card--extrem-left {
    transform: translateX(-210%);
    opacity: 0.5;
  }

  .card--left {
    transform: translateX(-105%);
    opacity: 0.5;
  }

  .card--active {
    opacity: 1;
  }

  .card--right {
    transform: translateX(105%);
    opacity: 0.5;
  }

  .card--extrem-right {
    transform: translateX(210%);
    opacity: 0.5;
  }

  .card--extrem-extrem-right {
    transform: translateX(420%);
    opacity: 0;
  }
`;

const Carousel = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  user-select: none;
  overflow: hidden;
`;

function Slider({ datas, api, images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = datas.length - 1;
    // If we click too much on previous button, we go to last slide
    if (index < 0) {
      setIndex(lastIndex);
    }
    // If we click too much on next button, we go to first slide
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [datas.length, index]);

  const mod = (n, m) => {
    let result = n % m;
    return result >= 0 ? result : result + m;
  };

  function handleRight() {
    setIndex(index + 1);
  }

  function handleLeft() {
    setIndex(index - 1);
  }

  return (
    <ContentGlobal>
      <Carousel>
        {datas.map((item, i) => {
          const indexLeft = mod(index - 1, datas.length);
          const indexRight = mod(index + 1, datas.length);
          const indexExtremLeft = mod(index - 2, datas.length);
          const indexExtremRight = mod(index + 2, datas.length);
          const indexExtremExtremLeft = mod(index - 3, datas.length);
          const indexExtremExtremRight = mod(index + 3, datas.length);

          let className = "card";

          if (i === index) {
            className = "card card--active";
          } else if (i === indexRight) {
            className = "card card--right";
          } else if (i === indexLeft) {
            className = "card card--left";
          } else if (i === indexExtremRight) {
            className = "card card--extrem-right";
          } else if (i === indexExtremLeft) {
            className = "card card--extrem-left";
          } else if (i === indexExtremExtremRight) {
            className = "card card--extrem-extrem-right";
          } else if (i === indexExtremExtremLeft) {
            className = "card card--extrem-extrem-left";
          } else className = "card";

          return (
            <div key={i} className={className}>
              {api ? (
                <img src={images + item.poster_path} alt="Banner" />
              ) : (
                <img src={item.image} alt="Banner" />
              )}
            </div>
          );
        })}
      </Carousel>
      <div>
        <i
          className="fa-solid fa-angle-left"
          id="btn-left"
          onClick={handleLeft}
        ></i>
      </div>
      <div>
        <i
          className="fa-solid fa-angle-right"
          id="btn-right"
          onClick={handleRight}
        ></i>
      </div>
    </ContentGlobal>
  );
}

export default Slider;
