import styled from "styled-components";

import { colors, fonts } from "../../variables.js";

import rankingImage from "../../assets/undraw_progress_data_4ebj.svg";
// import rankingImage from "../../assets/undraw_faq_rjoy.svg";

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
`;

export const AboutRankingDescription = styled.div`
  padding-right: 50px;
`;

export const AboutRankingTitle = styled.p`
  ${fonts.primary};
  font-size: 40px;
  margin: 0 0 50px;
  color: ${colors.primary};
  font-weight: bold;
`;

export const AboutRankingText = styled.p`
  ${fonts.primary};
  margin: 0 0 20px;
`;

export const AboutRankingImage = styled.img.attrs({
  src: rankingImage
})`
  width: 100%;
  max-width: 420px;
`;
