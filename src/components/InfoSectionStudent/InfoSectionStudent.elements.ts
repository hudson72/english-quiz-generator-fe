import styled, {createGlobalStyle, css, InfoSectionProps} from "styled-components";
import {Props} from "../../types/Props";

export const InfoSec = styled.div<Props>`
  color: #fff;
  padding: 160px 0;
  background: ${({lightBg}) => (lightBg ? "#fff" : "#101522")};
`;

export const InfoRow = styled.div<Props>`
  margin: 0 -15px -15px -15px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')
  };
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  flex-basis: 50%;
  max-width: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-basis: 100%;
    justify-content: center;
  };
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div<Props>`
  color: ${({lightTopLine}) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.div<Props>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')}
`;

export const Subtitle = styled.div<Props>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')}
`;

export const ImgWrapper = styled.div<Props>`
  max-width: 555px;
  display: flex;
  justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;



