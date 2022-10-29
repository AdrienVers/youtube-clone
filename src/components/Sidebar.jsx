import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { sidebarData } from "../datas/sidebarData";
import styled from "styled-components";
import { HamburgerContext } from "../context/HamburgerContext";

const SidebarGlobal = styled.aside`
  flex-shrink: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 220px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  top: 60px;
  left: 0;
  padding-top: 1rem;
  justify-content: stretch;
  transition: width 200ms ease-to-out;
  position: sticky;

  &::-webkit-scrollbar {
    width: 9px !important;
    border-radius: 50% !important;
    background-color: white;
  }

  &:hover::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #d62929; !important;

    @media (max-width: 600px) {
      display : none;
    }
  }

  @media (max-width: 900px) {
    width: 75px;
    text-align: center;
    padding-left : 5px;
  }

  /*
  @media (max-width: 600px) {
    display: none;
  }
  */
`;

const SidebarNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  //justify-content: center;
  align-items: center;
  color: black;
  padding: 8px 10px 8px 20px;
  gap: 25px;
  transition: all 0.5s;
  font-size: 1rem;

  @media (max-width: 900px) {
    padding: 8px 10px 8px 10px;
  }

  &:hover {
    background: rgb(230, 230, 230);
    color: #000;
    transition: all 0.5s;
  }

  &.active {
    background: rgb(240, 240, 240);
    color: rgb(195, 0, 0);
    font-size: 1.1rem;

    @media (max-width: 900px) {
      padding-left: 9px;
    }
  }

  i {
    padding: 6px 15px 6px 10px;
    width: 15px;
  }

  span {
    white-space: nowrap;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const SidebarDrop = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;
  padding: 8px 10px 8px 20px;
  gap: 25px;
  transition: all 0.5s;
  font-size: 1rem;

  @media (max-width: 900px) {
    padding: 8px 10px 8px 10px;
  }

  &:hover {
    background: rgb(230, 230, 230);
    color: #000;
    transition: all 0.5s;
    cursor: pointer;
  }

  i {
    padding: 6px 15px 6px 10px;
    width: 15px;
  }

  span {
    white-space: nowrap;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const SidebarFirstPart = styled.div`
  box-shadow: inset 0px -1px 0px 0px rgb(215, 215, 215);
  padding-bottom: 10px;
`;

const SidebarSecondPart = styled.div`
  box-shadow: inset 0px -1px 0px 0px rgb(215, 215, 215);
  padding: 10px 0px;
`;

const SidebarThirdPart = styled.div`
  box-shadow: inset 0px -1px 0px 0px rgb(215, 215, 215);
  padding: 10px 0px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px 22px;

  @media (max-width: 900px) {
    display: none;
  }

  p {
    padding-bottom: 15px;
  }
`;

const LinkButton = styled(Link)`
  border: 1px solid black;
  background-color: rgb(240, 240, 240);
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
`;

const SidebarFourthPart = styled.div`
  box-shadow: inset 0px -1px 0px 0px rgb(215, 215, 215);
  padding: 10px 0px;
`;

function Sidebar({ children }) {
  const { hamburgerIsClicked } = useContext(HamburgerContext);
  const [subnav, setSubnav] = useState(false);
  function showSubnav() {
    setSubnav(!subnav);
    // console.log(subnav);
  }

  return (
    <SidebarGlobal style={{ display: hamburgerIsClicked ? "none" : "" }}>
      <SidebarFirstPart>
        {sidebarData.slice(0, 3).map((item, index) => {
          return (
            <SidebarNavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <i className={item.icon} />
              <span>{item.name}</span>
            </SidebarNavLink>
          );
        })}
      </SidebarFirstPart>
      <SidebarSecondPart>
        {sidebarData.slice(3, 8).map((item, index) => {
          return (
            <SidebarNavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <i className={item.icon} />
              <span>{item.name}</span>
            </SidebarNavLink>
          );
        })}
        {subnav
          ? sidebarData.slice(9, 12).map((item, index) => {
              return index === 0 ? (
                <SidebarDrop
                  style={{ backgroundColor: "rgb(240, 240, 240)" }}
                  key={index}
                  onClick={() => showSubnav()}
                >
                  <i className={item.icon} />
                  <span>{item.name}</span>
                </SidebarDrop>
              ) : (
                <SidebarNavLink
                  key={index}
                  to={item.path}
                  className="link"
                  activeclassname="active"
                >
                  <i className={item.icon} />
                  <span>{item.name}</span>
                </SidebarNavLink>
              );
            })
          : sidebarData.slice(8, 9).map((item, index) => {
              return (
                <SidebarDrop key={index} onClick={() => showSubnav()}>
                  <i className={item.icon} />
                  <span>{item.name}</span>
                </SidebarDrop>
              );
            })}
      </SidebarSecondPart>
      <SidebarThirdPart>
        <p>
          Connectez-vous pour aimer ou commenter une vidéo, vous abonner à une
          chaîne, ou bien pour poster vos propres vidéos sur YouTube !
        </p>
        <LinkButton to="/account">Se connecter</LinkButton>
      </SidebarThirdPart>
      <SidebarFourthPart>
        {sidebarData.slice(12, 15).map((item, index) => {
          return (
            <SidebarNavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <i className={item.icon} />
              <span>{item.name}</span>
            </SidebarNavLink>
          );
        })}
      </SidebarFourthPart>
    </SidebarGlobal>
  );
}

export default Sidebar;
