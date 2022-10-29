import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";

export const HamburgerContext = createContext();

const HamburgerContextProvider = ({ children }) => {
  const phoneSize = useMediaQuery("(max-width: 600px)");
  let initialState = false;

  phoneSize ? (initialState = true) : (initialState = false);

  const [hamburgerIsClicked, setHamburger] = useState(initialState);

  const toggleHamburger = () => {
    setHamburger(!hamburgerIsClicked);
  };

  return (
    <HamburgerContext.Provider value={{ hamburgerIsClicked, toggleHamburger }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </HamburgerContext.Provider>
  );
};

const theme = {
  tagsbarBehaviour: {
    sidebarIsOpen: "calc(100vw - 220px)",
    sidebarIsHalf: "calc(100vw - 85px)",
    sidebarIsClose: "100vw",
  },
};

export default HamburgerContextProvider;
