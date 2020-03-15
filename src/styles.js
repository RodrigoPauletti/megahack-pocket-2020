import styled, { createGlobalStyle } from "styled-components";

import { fonts, colors } from "./variables.js";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 35px 0 0;
    box-sizing: border-box;
    height: 100%;
  }
  #root {
    height: 100%;
  }
`;

export const Container = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  padding: 20px;
`;

export const Title = styled.p`
  ${fonts.primary};
  color: ${colors.primary};
  margin: 0;
  font-size: 50px;
`;

export const Subtitle = styled.p`
  ${fonts.primary};
  color: ${colors.strongGray};
  margin: 0;
  font-size: 35px;
`;

export const Text = styled.p`
  ${fonts.primary};
  color: ${colors.primary};
  margin: 0;
`;

export const TextSpan = styled.span`
  ${fonts.primary};
  color: ${colors.primary};
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 20px;
`;

const ButtonDefault = styled.button.attrs({
  type: "submit"
})`
  ${fonts.primary};
  padding: 7px 15px;
  font-weight: 700;
  transition: all 0.3s ease;
  text-transform: uppercase;
  outline: none;
  &:hover {
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;

export const Button = styled(ButtonDefault)`
  border: 2px solid transparent;
  background: ${colors.primary};
  color: ${colors.white};
  font-size: 14px;
  border-radius: 3px;
  &:hover {
    border: 2px solid ${colors.primary};
    background: transparent;
    color: ${colors.primary};
  }
`;

export const ButtonRoundedOutline = styled(ButtonDefault)`
  border: 2px solid ${colors.primary};
  background: transparent;
  color: ${colors.primary};
  font-size: 15px;
  border-radius: 20px;
  &:hover {
    border: 2px solid transparent;
    background: ${colors.primary};
    color: ${colors.white};
  }
`;

export const SeparatorLine = styled.div`
  background-color: ${colors.lightGray};
  width: 100%;
  height: 2px;
  margin-top: 50px;
`;
