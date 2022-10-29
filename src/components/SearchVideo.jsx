import React from "react";
import styled from "styled-components";

const SearchVideoGlobal = styled.div`
  width: 90%;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    padding: 11px 15px 11px 15px;

    color: black;

    :nth-child(2) {
      background-color: rgb(248, 248, 248);
      box-shadow: inset 0px 0px 0px 0.3px grey;
      border-radius: 0px 5px 5px 0px;

      &:hover {
        cursor: pointer;
        background-color: rgb(235, 235, 235);
      }
    }
    :nth-child(3) {
      background-color: white;
      font-size: 1.2rem;

      @media (max-width: 600px) {
        display: none;
      }
    }
  }
`;

const SearchVideoInput = styled.input`
  height: 38px;
  width: 80%;
  font-size: 1rem;
  padding-left: 8px;
  border: solid 1px rgb(200, 200, 200);
`;

function SearchVideo() {
  return (
    <SearchVideoGlobal>
      <SearchVideoInput placeholder="Rechercher"></SearchVideoInput>
      <i className="fa-solid fa-magnifying-glass"></i>
      <i className="fa-solid fa-microphone"></i>
    </SearchVideoGlobal>
  );
}

export default SearchVideo;
