import React from "react";
import styled from "styled-components";
import * as s from "styles/globalStyles";

export const SymbolImg = styled.img`
width: 120px;
@media screen and (max-device-width: 480px) and (orientation: portrait){
  width: 70px;}
  @media screen and (max-device-width: 860px) and (orientation: landscape){
  width: 90px;}

`;
export const OSSocialButton = styled.button`
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  background-color: var(--sbtnbg);
  background-image: url("/config/images/BtnOS.png");
  background-image: cover;
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-size: cover;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: 0.4s;
  margin: 2vh;
  marginRight: 0.5vw;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    width: 30px;
    height: 30px;
    margin-left: 2vw;
    margin-right: 2vw;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
    margin-left: 1.5vw;
    margin-right: 1.5vw;
    width: 35px;
    height: 35px;
    }
`;

export const DisSocialButton = styled.button`
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  background-color: var(--sbtnbg);
  background-image: url("/config/images/BtnDis.png");
  background-image: cover;
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-size: cover;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: 0.4s;
  margin: 2vh; 
  marginRight: 0.5vw;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    width: 30px;
    height: 30px;
    margin-left: 2vw;
    margin-right: 2vw;
  }
  @media screen and (max-device-width: 860px) and (orientation: landscape){
    margin-left: 1.5vw;
    margin-right: 1.5vw;
    width: 35px;
    height: 35px;
  }
`;
export const TwitSocialButton = styled.button`
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  background-color: var(--sbtnbg);
  background-image: url("/config/images/BtnTwit.png");
  background-image: cover;
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-size: cover;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: 0.4s;
  margin: 2vh;
  marginRight: 0.5vw;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    margin-left: 2vw;
    margin-right: 2vw;
    width: 30px;
    height: 30px;
  }
  @media screen and (max-device-width: 860px) and (orientation: landscape){
    margin-left: 1.5vw;
    margin-right: 1.5vw;
    width: 35px;
    height: 35px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  @media (min-width: 767px) {
    flex-direction: row;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    ${"" /* gap: 10%; */}
  }
`;

function Footer() {
  return (
    <div style={{width: "100%",}}>
      <FooterContent style={{
         paddingTop: "3rem",
         paddingBottom: "3rem",
        }}>,
        <SymbolImg
          src={"/config/images/bsymbol.png"}
          style={{ width: "110px", marginRight: "0vw", }}
        ></SymbolImg>
        <s.SpacerMedium></s.SpacerMedium>
        {/* <s.TextPara data-wow-offset="100" style={{fontFamily: "marvin",}} >{"Hellionz"}</s.TextPara> */}
        <s.TextFooter>{"© 2022 All Rights Reserved | Hellionz"}</s.TextFooter>
        <s.Container
          flex={1}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            maxWidth: "25vw",
          }}
        >
          <a href="https://opensea.io/collection/hellionz-clone-ticketz" target="_blank">
            <OSSocialButton
              style={{ margin: "1rem", marginRight: "1vw" }}
            ></OSSocialButton>
          </a>
          <a href="https://dsc.gg/hb-hellionz" target="_blank">
            <DisSocialButton
              style={{ margin: "1rem", marginRight: "1vw" }}
            ></DisSocialButton>
          </a>
          <a href="https://twitter.com/hbHellionz/" target="_blank">
            <TwitSocialButton
              style={{ margin: "1rem", marginRight: "1vw" }}
            ></TwitSocialButton>
          </a>
        </s.Container>
      </FooterContent>
    </div>
  );
}

export default Footer;
