import React from "react";
import DefaultMessage from "../components/DefaultMessage";

function WatchLater() {
  const defaultmessage =
    "Vous n'avez pas encore coché de video à regarder pour plus tard.";

  return <DefaultMessage message={defaultmessage} />;
}

export default WatchLater;
