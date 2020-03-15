import React from "react";

import { Accordion, Card } from "react-bootstrap";

import { AccordionGlobalStyle, AccordionNumber } from "./styles";

function CollapseAccordion() {
  return (
    <>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <AccordionNumber>01</AccordionNumber>Como funciona a lógica de
            pontuação?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <AccordionNumber>02</AccordionNumber>Qual a fonte de dados do
            Ranking?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
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
              Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <AccordionGlobalStyle />
    </>
  );
}

export default CollapseAccordion;
