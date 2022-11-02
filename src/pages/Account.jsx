import React, { useState } from "react";
import styled from "styled-components";
import YoutubeLogo from "../assets/YouTubeLogo.png";

function Account({ submission }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AccountGlobal>
      <AccountForm
        onSubmit={(e) => {
          e.preventDefault();
          submission({ email, password });
        }}
      >
        <AccountFirstPart>
          <img src={YoutubeLogo} alt="YoutubeLogo" />
          <h2>Connexion</h2>
          <h4>Accéder à YouTube</h4>
        </AccountFirstPart>
        <AccountSecondPart>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Adresse e-mail oubliée ?</p>
          <br />
          <label htmlFor="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Mot de passe oublié ?</p>
        </AccountSecondPart>
        <AccountThirdPart>
          <button type="submit">Se connecter</button>
        </AccountThirdPart>
      </AccountForm>
    </AccountGlobal>
  );
}

const AccountGlobal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 240, 240);
  width: 100vw;
  height: 92vh;
`;

const AccountForm = styled.form`
  height: 530px;
  width: 500px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 0px 1px grey;
  flex-direction: column;
`;

const AccountFirstPart = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 10px;
`;

const AccountSecondPart = styled.div`
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    padding : 4px;
  }

  input {
    padding: 5px;
    width: 250px;
    height: 40px;
  }

  p {
    font-size: 0.8rem;
    padding: 4px;
  }
`;

const AccountThirdPart = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    cursor: pointer;
    padding: 5px;
  }
`;

export default Account;
