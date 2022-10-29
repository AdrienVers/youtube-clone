import React from "react";
import DefaultMessage from "../components/DefaultMessage";

function Favorites() {
  const defaultmessage = "Vous n'avez pas encore aimé de vidéos.";

  return <DefaultMessage message={defaultmessage} />;
}

export default Favorites;
