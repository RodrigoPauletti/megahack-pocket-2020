import styled, { createGlobalStyle } from "styled-components";

import { colors, fonts } from "../../variables";

import scoreImageOne from "../../assets/form.svg";
import scoreImageTwo from "../../assets/score.svg";
import scoreImageThree from "../../assets/ranking.svg";

export const AccordionGlobalStyle = createGlobalStyle`
  .accordion {
    width: 100%;
    ${fonts.primary};
    color: ${colors.strongGray};
    font-size: 20px;
    .card {
      margin: 0 0 20px;
      font-weight: 300;
      .card-header {
        background: ${colors.white};
        transition: all .3s ease;
        &:hover {
          cursor: pointer;
        }
      }
      .card-body {
        background-color: ${colors.lightGray};
        padding: 20px;
      }
    }
    @media (max-width: 769px) {
      font-size: 16px;
    }
    // @media (max-width: 320px) {
    //   font-size: 16px;
    // }
  }
`;

export const AccordionNumber = styled.span`
  ${fonts.primary};
  color: ${colors.primary};
  font-weight: bold;
  padding-right: 20px;
`;

export const ScoreSteps = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const ScoreStepItem = styled.div`
  flex: 1;
  text-align: center;
  @media (max-width: 769px) {
    margin-bottom: 20px;
  }
`;

export const ScoreStepItemText = styled.p`
  ${fonts.primary};
  margin: 0;
  padding: 0;
`;

export const ScoreStepsImageOne = styled.img.attrs({
  src: scoreImageOne
})`
  width: 100%;
  max-width: 100px;
`;

export const ScoreStepsImageTwo = styled.img.attrs({
  src: scoreImageTwo
})`
  width: 100%;
  max-width: 100px;
`;

export const ScoreStepsImageThree = styled.img.attrs({
  src: scoreImageThree
})`
  width: 100%;
  max-width: 100px;
`;
