import React from "react";
import { Link } from "react-router-dom";

import { Container, Section, Subtitle, SeparatorLine } from "../../styles";
import Datatable from "../../components/Datatable";
import {
  Title,
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
          <Link to="/ranking">ver ranking completo</Link>
        </SeeCompletedRanking>
      </Section>
      <SeparatorLine />
    </Container>
  );
}

export default Home;
