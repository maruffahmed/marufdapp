import React from "react";
import styled from "styled-components";
import * as s from "styles/globalStyles";
import { HeaderImg, RdImg } from "App";

export const NFTItems = styled.div`
  width: 100%;
  display: flex;
  padding: 0 10vw;
  flex-direction: column;
  ${"" /* grid-template-columns: auto; */}
  @media (min-width: 767px) {
    ${"" /* grid-template-columns: ; */}
    flex-direction:row;
    gap: 10rem;
  }
`;

const NFTItem = styled.div`
  order: ${(props) => props.order};
  @media (min-width: 767px) {
    order: 1;
  }
`;

export const SmallImg = styled.img`
  ${"" /* height: "50%"; */}
  width: 30vw;
  @media screen and (max-device-width: 480px) and (orientation: portrait){
  display: flex;
  width: 75vw;
  margin-top: 10vh;
  }
  @media screen and (max-device-width: 860px) and (orientation: landscape){
  display: flex;
  width: 60vw;
  margin-top: 10vh;
  }
  &:hover {
    transform: rotate(0deg) scale(1.06);
  }
  transition: all 0.3s;
`;


  

export const LsmallImg = styled.img`
  ${"" /* height: "50%"; */}
  width: 30vw;
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    display: flex;
    width: 75vw;
    margin-top: 10vh;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
    display: flex;
    width: 60vw;
    margin-top: 10vh;
    }
    &:hover {
      transform: rotate(0deg) scale(1.06);
    }
  transition: all 0.3s;
`;


export const RmImg = styled.img`
  ${"" /* height: "50%"; */}
  width: 30vw;
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    display: flex;
    width: 75vw;
    margin-top: 10vh;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
    display: flex;
    width: 60vw;
    margin-top: 10vh;
    }
    &:hover {
      transform: rotate(0deg) scale(1.02);
    }
  transition: all 0.3s;
`;

function NftIItemsDescription(props) {
  return (
    <>
      <NFTItems>
        <NFTItem order={1}>
          <div style={{ marginTop: "4vh", width: "100%" }}>
          <s.HeadPara style={{ justifyContent: "flex-start", fontFamily: "marvin",}}
          className="wow bounceIn"
          data-wow-offset="100"
          >
            {"Hustle. Earn. Play."}
          </s.HeadPara>
            <s.TextPara
              style={{
                marginTop: "5vh",
              }}
              className="wow bounceIn"
              data-wow-offset="100"
            >
              {
                "Friends, welcome to Mt. Helena. After losing his casino to BowlHead and FlaskMan, the Devil is building a mountain metropolis where strategy, risk, and sacrifice are needed to get ahead. To speed things up, he has cloned an entire workforce from his closest followers. They are the Hellionz. Today, many projects have been finished and some Hellionz find themselves out of a job. Would you like to hire one?"
              }
            </s.TextPara>
          </div>
        </NFTItem>
        <NFTItem order={2} style={{ display: "flex", justifyContent: "center" }}>
          <LsmallImg
            src={"/config/images/Story.png"}
            style={{
              marginTop: "14vh",
            }}
          ></LsmallImg>
        </NFTItem>
      </NFTItems>
      <s.SpacerLarge></s.SpacerLarge>
      <div style={{ display: "flex", marginTop: "4vh", width: "100%", justifyContent: "center", }}>
      <s.NFTDivider></s.NFTDivider>
      </div>
      <NFTItems style={{ marginTop: "1rem" }}>
        {/* <s.Container
          flex={1}
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
          }}
        > */}
        <NFTItem order={2} style={{ display: "flex", justifyContent: "center" }}>
          <SmallImg
            src={"/config/images/news.png"}
            style={{ marginTop: "14vh", }}
          ></SmallImg>
        </NFTItem>
        {/* </s.Container> */}
        <NFTItem order={1}>
          <div style={{ marginTop: "4vh", width: "100%" }}>
          <s.HeadPara style={{ justifyContent: "flex-start", fontFamily: "marvin",}}
          className="wow bounceIn"
          data-wow-offset="100"
          >
            {"What are Hellionz?"}
          </s.HeadPara>
            <s.TextPara
              style={{
                marginTop: "5vh",
              }}
              className="wow bounceIn"
              data-wow-offset="100"
            >
              {
                "Hellionz is a dynamic P2E ecosystem summoned to the Polygon Network. Stake your Hellionz NFTs on Hustle Street to yield $HellBux every 24 hours. Each Hellionz character has a unique role on Hustle Street, with different methods to yield precious 'Bux. $HellBux is our flagship ERC-20 token, giving holders access to future Hellionz drops, raffle tickets for prizes, games at the Smoky Poker, and more."
              }
            </s.TextPara>
          </div>
        </NFTItem>
      </NFTItems>
      <s.SpacerLarge></s.SpacerLarge>
      <div style={{ display: "flex", marginTop: "4vh", width: "100%", justifyContent: "center", }}>
      <s.NFTDivider></s.NFTDivider>
      </div>
      <NFTItems>
        <NFTItem order={1}>
          <div style={{ marginTop: "10vh", width: "100%"}}>
          <s.BigHeadPara style={{justifyContent: "center", fontFamily: "marvin",}}
          className="wow bounceIn"
          data-wow-offset="100"
          >
            {"ROADMAP"}
          </s.BigHeadPara>
            <s.TextPara
              style={{
                marginTop: "5vh",
              }}
              className="wow bounceIn"
              data-wow-offset="100"
            >
              {
                "Hellionz is more than just another yield farm. It is a thriving community where Hellionz climb the corporate ladder for $HellBux, only to wager it all on wild gambles at the Smokey Poker. As the Hellionz ecosystem develops, more risk and strategy will be needed to get the most out of your Hellionz. Currently, the Devil is leading all Hellionz towards the launch of our Genesis collection in early Q2. After that, our community will take control and vote on our next direction."
              }
            </s.TextPara>
          </div>
        </NFTItem>
        <NFTItem order={2} style={{display: "flex", justifyContent: "center"}}>
          <RmImg
            src={"/config/images/roadmap.png"}
            style={{
              marginTop: "14vh",
            }}
          ></RmImg>
        </NFTItem>
      </NFTItems>

      
    </>
  );
}

export default NftIItemsDescription;
