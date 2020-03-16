import React from "react";

import { Accordion, Card } from "react-bootstrap";

import {
  AccordionGlobalStyle,
  AccordionNumber,
  ScoreSteps,
  ScoreStepItem,
  ScoreStepItemText,
  ScoreStepsImageOne,
  ScoreStepsImageTwo,
  ScoreStepsImageThree
} from "./styles";

function CollapseAccordion() {
  return (
    <>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <AccordionNumber>01</AccordionNumber>Como funciona o Ranking
            StartupBase?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ScoreSteps>
                <ScoreStepItem>
                  <ScoreStepsImageOne />
                  <ScoreStepItemText>
                    Mantenha suas informações atualizadas
                  </ScoreStepItemText>
                </ScoreStepItem>
                <ScoreStepItem>
                  <ScoreStepsImageTwo />
                  <ScoreStepItemText>Acumule pontos</ScoreStepItemText>
                </ScoreStepItem>
                <ScoreStepItem>
                  <ScoreStepsImageThree />
                  <ScoreStepItemText>Ganhe prêmios</ScoreStepItemText>
                </ScoreStepItem>
              </ScoreSteps>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <AccordionNumber>02</AccordionNumber>Qual é a veracidade dos dados
            das startups participantes?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Os dados dos participantes do
              <strong> StartupBase Ranking </strong>
              são verificados e confirmados por especialistas, para não haver
              inconsistência de dados ou dados falsos.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <AccordionNumber>03</AccordionNumber>Quais os benefícios de ser uma
            startup ranqueada?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Ao participar do<strong> StartupBase Ranking</strong>, além de uma
              maior visibilidade, os melhores qualificados ganharão prêmios como
              mentorias, ingressos para eventos, créditos em diversos serviços
              (AWS, Google Cloud Platform), entre outros.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <AccordionGlobalStyle />
    </>
  );
}

export default CollapseAccordion;
