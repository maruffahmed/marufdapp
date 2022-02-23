import { BtnsImg, LogoImg } from "App";
import React from "react";
import { BiSad } from "react-icons/bi";
import styled from "styled-components";
import * as s from "styles/globalStyles";

const MobileNavbarContainer = styled.div`
  background-color: var(--bgnew);
  position: absolute;
  width: 100%;
  min-height: 30vh;
  padding: 1rem 4rem;
  top: 100%;
  box-shadow: 0px 15px 20px 0px #0f0f0f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 1268px) {
    display: none;
  }

  @media screen and (max-device-width: 860px) and (orientation: landscape){
   min-height: 40vh;
    }
`;

function MobileMenu(props) {
  return (
    <MobileNavbarContainer style={{ }}>
      {/* <s.TextPara
        style={{
          marginTop: "5vh",
        }}
        className="wow bounceIn"
        data-wow-offset="100"
      >
        {"Something"}
      </s.TextPara> */}
       <a href="https:dfsdfsdfsdf sd" target="_blank">
      <LogoImg
        src={"/config/images/wtppr.png"}
        style={{ display: "block",}}
      ></LogoImg>
      </a>
      {/* <LogoImg
        src={"/config/images/hustlegame.png"}
        style={{ display: "block",}}
      ></LogoImg> */}
    </MobileNavbarContainer>
  );
}

export default MobileMenu;
