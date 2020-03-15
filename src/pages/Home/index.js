import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import { Container, Section, SeparatorLine } from "../../styles";
import Datatable from "../../components/Datatable";
import {
  Title,
  Subtitle,
  SearchField,
  SearchWithFilters,
  SeeCompletedRanking
} from "./styles";

function Home() {
  return (
    <Container>
      <Section>
        <Title>Encontre todas as Startups do Brasil</Title>
        <Subtitle>
          A maior e mais completa base de dados do ecossistema brasileiro de
          startups
        </Subtitle>

        <SearchField />
        <SearchWithFilters>Pesquisar com filtros</SearchWithFilters>

        <Datatable limit={5} />
        <SeeCompletedRanking>
          <Link to="/ranking">
            Ver ranking completo <FontAwesomeIcon icon={faArrowCircleRight} />
          </Link>
        </SeeCompletedRanking>
      </Section>
      <SeparatorLine />
    </Container>
  );
}

export default Home;
