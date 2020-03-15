import styled, { createGlobalStyle } from "styled-components";

import { colors, fonts } from "../../variables";

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
  }
`;

export const AccordionNumber = styled.span`
  ${fonts.primary};
  color: ${colors.primary};
  font-weight: bold;
  padding-right: 20px;
`;
