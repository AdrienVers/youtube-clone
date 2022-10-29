import React from "react";
import styled from "styled-components";

const DefaultGlobal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 240, 240);
  width: 100%;
  height: 92vh;
  padding: 50px;

  p {
    font-size: 1.8rem;
  }
`;

function DefaultMessage({ message }) {
  return (
    <DefaultGlobal>
      <p>{message}</p>
    </DefaultGlobal>
  );
}

export default DefaultMessage;
