import styled from "styled-components";

import { colors, fonts } from "../../variables.js";

import logoStartupBase from "../../assets/logo_startupbase.png";

export const Menu = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  font-size: 1rem;
  margin: 0 auto;
  max-width: 1920px;
  min-height: 3.75rem;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.06);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1040;
`;

export const Logo = styled.img.attrs({
  src: logoStartupBase
})`
  max-height: 1.75rem;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: auto;
  align-items: center;
`;

export const MenuListItem = styled.li`
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  a {
    ${fonts.primary};
    color: ${colors.strongGray};
    position: relative;
    &.active {
      font-weight: 700;
    }
    &.active,
    &:hover {
      color: ${colors.primary};
    }
    &.new {
      ::after {
        content: "Novo";
        display: inline-block;
        position: absolute;
        margin: 0;
        padding: 0.1rem 0.25rem;
        text-align: center;
        white-space: nowrap;
        line-height: 1;
        background: #00d1b2;
        color: #fff;
        z-index: 99;
        font-size: 0.7rem;
        border-radius: 20px;
        top: -15px;
        right: -20px;
      }
    }
  }
`;

export const MenuListItemSeparator = styled.div`
  width: 2px;
  background: red;
  height: 100%;
  display: block;
`;
