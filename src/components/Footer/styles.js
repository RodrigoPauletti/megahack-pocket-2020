import styled from "styled-components";

import footerImage from "../../assets/startupbase_footer.png";

export const FooterContainer = styled.img.attrs({
  src: footerImage
})`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  @media (max-width: 1220px) {
    max-width: auto;
  }
`;
