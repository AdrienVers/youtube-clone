import React from "react";
import DefaultMessage from "../components/DefaultMessage";

function Live() {
  const defaultmessage = "Il n'y pas de direct en ce moment.";

  return <DefaultMessage message={defaultmessage} />;
}

export default Live;
