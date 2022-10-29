import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import YoutubeLogo from "../assets/YouTubeLogo.png";
import { login } from "../redux/actions/auth.action";

const AccountGlobal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 240, 240);
  width: 100vw;
  height: 92vh;
`;

const AccountContainer = styled.div`
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
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const AccountSecondPart = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    padding: 5px;
    width: 250px;
    height: 40px;
  }

  p {
    font-size: 0.8rem;
    padding-top: 2px;
  }
`;

const AccountThirdPart = styled.div`
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    cursor: pointer;
    padding: 5px;
  }
`;

const AccountFourthPart = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    padding-right: 10px;
  }

  button {
    padding: 5px;
    cursor: pointer;
  }

  div {
    display: flex;
    padding: 5px;
  }
`;

function Account() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <AccountGlobal>
      <AccountContainer>
        <AccountFirstPart>
          <img src={YoutubeLogo} alt="YoutubeLogo" />
          <h2>Connexion</h2>
          <h4>Accéder à YouTube</h4>
        </AccountFirstPart>
        <AccountSecondPart>
          <input placeholder="Adresse mail" />
          <p>Adresse e-mail oubliée ?</p>
          <br />
          <input placeholder="Mot de passe" />
          <p>Mot de passe oublié ?</p>
        </AccountSecondPart>
        <AccountThirdPart>
          <button>Se connecter</button>
        </AccountThirdPart>
        <AccountFourthPart>
          <div>
            <p>Pas encore de compte ?</p>
            <button>S'inscrire</button>
          </div>
          <div>
            <p>Google ?</p>
            <button onClick={handleLogin}>Se connecter avec Google</button>
          </div>
        </AccountFourthPart>
      </AccountContainer>
    </AccountGlobal>
  );
}

export default Account;
