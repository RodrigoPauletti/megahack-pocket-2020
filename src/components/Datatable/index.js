import React from "react";
import { MDBDataTable } from "mdbreact";

import { DatatableGlobalStyle } from "./styles";
import startups from "./startups.json";

const DatatablePage = ({ limit }) => {
  const data = {
    columns: [
      {
        label: "Rank",
        field: "rank",
        width: 50
      },
      {
        label: "Startup",
        field: "startup",
        width: 200
      },
      {
        label: "Descrição",
        field: "description",
        width: 350
      },
      {
        label: "Categoria",
        field: "category",
        width: 100
      },
      {
        label: "Localização",
        field: "location",
        width: 100
      },
      {
        label: "Pontos",
        field: "points",
        width: 100
      }
    ],
    rows: limit ? startups.filter((val, index) => index < limit) : startups
  };

  return (
    <>
      <MDBDataTable
        responsive
        hover
        data={data}
        displayEntries={false}
        searching={false}
        noBottomColumns={true}
        infoLabel={["Exibindo", "até", "de", "resultados"]}
        paginationLabel={["Anterior", "Próximo"]}
        info={false}
        order={["rank", "asc"]}
        entries={20}
        sortable={false}
        paging={false}
      />

      <DatatableGlobalStyle />
    </>
  );
};

export default DatatablePage;
