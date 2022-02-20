import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 100%;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  ${"" /* overflow: hidden; */}
`;

export const FAQContainer = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 75vw;
  margin-top: 3vh;
  margin-bottom: 15vh;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  ${"" /* overflow: hidden; */}
  @media screen and (max-device-width: 480px) and (orientation: portrait){
  width: 100vw;
  justify-content: center;
    }
  @media screen and (max-device-width: 860px) and (orientation: landscape){
  width: 100vw;
  justify-content: center;
    }
`;


export const PopupPanel = styled.button`
  background-color: transparent;
  padding: 5px 15px;
  border-radius: 0px;
  outline: none;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  border-width: 0px;
`;


export const TextTitle = styled.p`
  color: var(--primary-text);
  font-size: 22px;
  font-weight: 500;
  line-height: 1.6;
`;

export const TextSubTitle = styled.p`
  color: var(--primary-text);
  font-size: 18px;
  line-height: 1.6;
`;

export const TextDescription = styled.p`
  color: var(--primary-text);
  font-size: 16px;
  line-height: 1.6;
`;

export const TextFooter = styled.p`
  color: var(--primary);
  font-size: 20px;
  line-height: 1.8;
  display: flex;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;

export const HeaderBox = styled.div`
   {
    position: relative;
    height: 100vh;
    margin: 0 auto;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export const FooterBox = styled.div`
   {
    position: relative;
    height: 30vh;
    margin: 0 auto;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export const BigHeadPara = styled.p`
  color: white;
  font-size: 85px;
  line-height: 1.6;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--newtxt);
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    font-size: 38px;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
    font-size: 38px;
    }
`;

export const HeadPara = styled.p`
  color: white;
  font-size: 53px;
  line-height: 1.6;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--newtxt);
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    font-size: 33px;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
    font-size: 33px;
    }
`;

export const FaqHead = styled.p`
  color: white;
  font-size: 28px;
  line-height: 1.6;
  display: flex;
  justify-content: space-between;
  font-family: marvin;
  padding: 0 2rem;
  color: var(--newtxt);

  @media screen and (max-device-width: 480px) and (orientation: portrait){
    font-size: 30px;
    width: 100%;
    padding: 0 1rem;
    justify-content: center;
    line-height: 1.1;
    word-spacing: 0.3px;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
      font-size: 30px;
      width: 100%;
      padding: 0 2rem;
      justify-content: space-between;
      line-height: 1.1;
      word-spacing: 0.3px;
      }
    }
`;

export const RdHead = styled.p`
  color: white;
  font-size: 31px;
  line-height: 1.6;
  color: var(--newtxt);
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    font-size: 22px;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
    font-size: 22px;
    }
`;

export const TextPara = styled.p`
  color: white;
  font-size: 29px;
  line-height: 1.3;
  word-spacing: 3px;
  max-height: 100%;
  color: var(--newtxt);

  @media screen and (max-device-width: 480px) and (orientation: portrait){
  font-size: 22px;
  }
  @media screen and (max-device-width: 860px) and (orientation: landscape){
  font-size: 22px;
  }
`;

export const SmTextPara = styled.p`
  color: white;
  font-size: 24px;
  line-height: 1.6;
  color: var(--newtxt);
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    font-size: 20px;
    line-height: 1.1;
    word-spacing: 1px;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
    font-size: 20px;
    line-height: 1.1;
    word-spacing: 1px;
    }
`;

export const XsmTextPara = styled.p`
  color: white;
  font-size: 22px;
  line-height: 1.6;
  display: flex;
  justify-content: flex-start;
  color: var(--newtxt);
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    font-size: 20px;
    line-height: 1.1;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
    font-size: 20px;
    line-height: 1.1;
    }
`;


export const TextBox = styled.p`
  max-width: 100%;
  max-height: 100%;
  margin: 5vh;
`;

export const SmDivider = styled.hr`
  border-width: 0px;
  border-top-style: solid;
  color: grey;
  border-top-width: 2px !important;
  border-top-style: solid !important;
  color: #fff !important;
  display: block;
  width: 60vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
  opacity: 0.6;
`;

export const FaqDivider = styled.hr`
  border-width: 0px;
  border-top-style: solid;
  color: grey;
  border-top-width: 2px !important;
  border-top-style: solid !important;
  color: #fff !important;
  display: flex;
  width: 75vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
  justify-content: center;
  opacity: 0.6;

  @media screen and (max-device-width: 480px) and (orientation: portrait){
  width: 90vw;
  margin-top: 6vh;
  margin-bottom: 6vh;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
    width: 90vw;
    margin-top: 10vh;
    margin-bottom: 10vh;

    }
`;

export const NFTDivider = styled.hr`
  border-width: 0px;
  border-top-style: solid;
  color: grey;
  border-top-width: 0.3px !important;
  border-top-style: solid !important;
  color: #fff !important;
  display: block;
  width: 80vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
  opacity: 0.6;
`;


