import React from "react";
import DefaultMessage from "../components/DefaultMessage";

function Subscriptions() {
  const defaultmessage =
    "Vous ne vous êtes pas encore abonné à une chaîne YouTube.";

  return <DefaultMessage message={defaultmessage} />;
}

export default Subscriptions;
