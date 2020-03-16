import styled from "styled-components";

import { colors, fonts } from "../../variables.js";

import rankingImage from "../../assets/undraw_progress_data_4ebj.svg";

import {
  Title as DefaultTitle,
  Subtitle as DefaultSubtitle
} from "../../styles";

export const Title = styled(DefaultTitle)`
  margin: 40px 0 40px;
`;

export const Subtitle = styled(DefaultSubtitle)`
  margin: 0 0 40px;
`;

export const AboutRanking = styled.div`
  margin: 100px 0 50px;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 30px 0;
  }
`;

export const AboutRankingDescription = styled.div`
  padding-right: 50px;
  @media (max-width: 1024px) {
    padding: 0;
  }
`;

export const AboutRankingTitle = styled.p`
  ${fonts.primary};
  font-size: 40px;
  margin: 0 0 50px;
  color: ${colors.primary};
  font-weight: bold;
  @media (max-width: 769px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
  @media (max-width: 320px) {
    font-size: 23px;
  }
`;

export const AboutRankingText = styled.p`
  ${fonts.primary};
  margin: 0 0 20px;
  font-size: 18px;
  color: ${colors.strongGray};
  @media (max-width: 769px) {
    margin: 0 0 10px;
    font-size: 16px;
  }
`;

export const AboutRankingImage = styled.img.attrs({
  src: rankingImage
})`
  width: 100%;
  max-width: 420px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
