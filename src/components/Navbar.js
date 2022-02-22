import { BtnsImg, StkBtnImg, MintBtnImg, LogoImg,} from "App";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import styled from "styled-components";
import * as s from "styles/globalStyles";
import 'reactjs-popup/dist/index.css';
import {
  DisSocialButton,
  OSSocialButton,
  SymbolImg,
  TwitSocialButton,
} from "./Footer";
import MobileMenu from "./MobileMenu";
import Popup from 'reactjs-popup';
import styles from "../styles/pop.css"
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";


const NavbarContainer = styled.div`
  width: 100%;
  padding: 0 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;
const MobileMenuToggle = styled.div`
  font-size: 3rem;
  color: white;
  cursor: pointer;
  display: none;
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    margin-left: 6px;
    margin-top: 9px;
    display: block;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
      display: block;
      margin-top: 5px;
      margin-left: 20px;
    }
`;




function Navbar(props) {
  const [navOpen, setNavOpen] = React.useState(false);
  return (
    <NavbarContainer>
      {/* <s.Container flex={1} style={{ display: "flex", flexDirection: "row" }}> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      <SymbolImg
        src={"/config/images/symbolb.png"}
        style={{marginRight: "1.5vw"}}
       // style={{ width: "10%" }}
      ></SymbolImg>
      <LogoImg src={"/config/images/logobaseb.png"}
     // style={{ width: "33%", }}
      ></LogoImg>
      </div>
      <div style={{ display: "flex", alignItems: "center", }}>
    { <Popup trigger={<s.PopupPanel>
      <MintBtnImg
        src={"/config/images/mint.png"}
        style={{
          maxHeight: "12vh",
          width: "120px",
          padding: "0 0.5rem",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}>
      </MintBtnImg>
    </s.PopupPanel>}
     position="bottom">
      <div>Mint Clone Ticketz</div>
      

    </Popup> }
      <a href="https://fsdfsfsdfsdfsdfsfsdf" target="_blank">
      <BtnsImg
        src={"/config/images/wtppr.png"}
        style={{
          maxHeight: "12vh",
          width: "220px",
          padding: "0 0.5rem",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      ></BtnsImg>
      </a>
      <a href="https://d14fsdfsfs.com">
      <StkBtnImg
        src={"/config/images/hustlegame.png"}
        style={{
          maxHeight: "12vh",
          width: "181px",
          padding: "0 0.5rem",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      ></StkBtnImg>
      </a>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href="https://fdsfsdfsdfsdfsdfsdfsfsdfsdf" target="_blank">
          <OSSocialButton
            style={{ }}
          ></OSSocialButton>
          </a>
          <a href="https://fsdfsdfsdfsdfsdf" target="_blank">
          <DisSocialButton
            style={{ }}
          ></DisSocialButton>
          </a>
          <a href="https://fsdfsdfsfsfsdfsdfsd" target="_blank">
          <TwitSocialButton
            style={{ }}
          ></TwitSocialButton>
          </a>
      </div>
      <MobileMenuToggle onClick={() => setNavOpen(!navOpen)}>
        <BiMenuAltRight />
      </MobileMenuToggle>
      {/* </s.Container> */}
      {navOpen ? <MobileMenu /> : null}
    </NavbarContainer>
  );
}

export default Navbar; 
