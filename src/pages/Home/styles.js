import styled from "styled-components";

import { colors, fonts } from "../../variables";

import { Title as DefaultTitle } from "../../styles";

export const Title = styled(DefaultTitle)`
  font-weight: bold;
  font-size: 40px;
  margin: 50px 0 20px;
`;

export const SearchField = styled.input.attrs({
  placeholder: "Busque por fintech, São Paulo, educação..."
})`
  ${fonts.primary};
  color: ${colors.strongGray};
  width: 100%;
  margin: 45px 0 0;
  height: 3rem;
  font-size: 18px;
  border: 1px solid #dbdbdb;
  padding: calc(0.375em - 1px) 2.5em;
  border-radius: 30px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
  outline: none;
`;

export const SearchWithFilters = styled.div`
  ${fonts.primary};
  color: ${colors.primary};
  width: 100%;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  margin: 50px 0 30px;
`;

export const SeeCompletedRanking = styled.div`
  ${fonts.primary};
  color: ${colors.primary};
  width: 100%;
  font-size: 18px;
  text-align: right;
  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`;
