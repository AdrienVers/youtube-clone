import Home from "./pages/Home";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import HamburgerContextProvider from "./context/HamburgerContext";
import Subscriptions from "./pages/Subscriptions";
import Account from "./pages/Account";
import Film from "./pages/Film";
import Explorer from "./pages/Explorer";
import Gaming from "./pages/Gaming";
import Live from "./pages/Live";
import WatchLater from "./pages/WatchLater";
import Favorites from "./pages/Favorites";
import Music from "./pages/Music";
import Western from "./pages/Western";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Report from "./pages/Report";

const AppContainer = styled.div`
  display: flex;
`;

function App() {
  return (
    <HamburgerContextProvider>
      <Navbar />
      <AppContainer>
        <Sidebar />
        <Routes>
          <Route path="/youtube-clone" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/live" element={<Live />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/film" element={<Film />} />
          <Route path="/music" element={<Music />} />
          <Route path="/western" element={<Western />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/report" element={<Report />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </AppContainer>
    </HamburgerContextProvider>
  );
}

export default App;
