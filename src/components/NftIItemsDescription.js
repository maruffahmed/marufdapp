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
            {"Ipsum. Lorem. Lorem."}
          </s.HeadPara>
            <s.TextPara
              style={{
                marginTop: "5vh",
              }}
              className="wow bounceIn"
              data-wow-offset="100"
            >
              {
                "adfdfasj fsd jflsdj fklasdjdf lkjsdlka fjsdlkf jslka sdf sdkjf lsakdfj lsdjf lkadsjlf ksdjflk ajslkdf jsldkajf kdf asdf sdaf"
              }
            </s.TextPara>
          </div>
        </NFTItem>
        <NFTItem order={2} style={{ display: "flex", justifyContent: "center" }}>
          <LsmallImg
            src={"/config/images/TopPlaceHolder.png"}
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
            src={"/config/images/TopPlaceHolder.png"}
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
            {"What is Lorem?"}
          </s.HeadPara>
            <s.TextPara
              style={{
                marginTop: "5vh",
              }}
              className="wow bounceIn"
              data-wow-offset="100"
            >
              {
                "dfsdfjsdfj lsdkjf lkajsdfl kdjfl asjdlfkjsdlakfjnsldjfnsdljfkjadsnfdjsnfkdksdjnfjsn fklajsndf sdkafnds lknfs alkndfsdajkfn sadnf ldnf lsakdfn ldsnflsadnf ldnfl nasdlkf sd"
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
                "sdfjfksdjflksd lkfjlsdk fajsdlf jsdlkf jsadlkf jsdlkaf jlasdkjfl sjdkf jdsljf lasdkjf kldsjfk sajdlkf jldksjaf lsjdf kldjflk asjdlfk jdlkfj asldkf sdf"
              }
            </s.TextPara>
          </div>
        </NFTItem>
        <NFTItem order={2} style={{display: "flex", justifyContent: "center"}}>
          <RmImg
            src={"/config/images/TopPlaceHolder.png"}
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
