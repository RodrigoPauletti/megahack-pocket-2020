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
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 100);

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
            <AboutRankingTitle>Sobre o Ranking StartupBase</AboutRankingTitle>
            <AboutRankingText>
              O<strong> Ranking StartupBase </strong>funciona em razão de exibir
              as startups mais ativas e engajadas na rede social. Quanto mais a
              startup utilizar a rede social, mais pontos ela ganha.
            </AboutRankingText>
            <AboutRankingText>
              Os melhores colocados receberão prêmios como mentorias, ingressos
              para eventos, créditos em diversos serviços (como a AWS, Google
              Cloud Platform, entre outros).
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
