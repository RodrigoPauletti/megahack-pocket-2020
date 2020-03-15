import React, { useRef } from "react";

import Datatable from "../../components/Datatable";
import CollapseAccordion from "../../components/Accordion";

import {
  Container,
  Section,
  ButtonRoundedOutline,
  SeparatorLine
} from "../../styles.js";
import {
  Title,
  Subtitle,
  AboutRanking,
  AboutRankingDescription,
  AboutRankingTitle,
  AboutRankingText,
  AboutRankingImage
} from "./styles.js";

function Ranking() {
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

  const aboutRankingRef = useRef(null);
  const executeScroll = () => scrollToRef(aboutRankingRef);

  return (
    <Container>
      <Section>
        <Title>
          Ranking <strong>StartupBase</strong>
        </Title>
        <Subtitle>
          Conheça as <strong>startups</strong> mais engajadas da nossa base de
          dados
        </Subtitle>

        <ButtonRoundedOutline onClick={executeScroll}>
          Sobre o ranking
        </ButtonRoundedOutline>

        <Datatable />
      </Section>

      <SeparatorLine />
      <Section>
        <AboutRanking ref={aboutRankingRef}>
          <AboutRankingDescription>
            <AboutRankingTitle>Sobre o Ranking</AboutRankingTitle>
            <AboutRankingText>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </AboutRankingText>
            <AboutRankingText>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </AboutRankingText>
            <AboutRankingText>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </AboutRankingText>
          </AboutRankingDescription>
          <AboutRankingImage></AboutRankingImage>
        </AboutRanking>

        <CollapseAccordion />
      </Section>

      <SeparatorLine />
    </Container>
  );
}

export default Ranking;
