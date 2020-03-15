import { createGlobalStyle } from "styled-components";

import { colors, fonts } from "../../variables";

export const DatatableGlobalStyle = createGlobalStyle`
  .dt-bootstrap4 {
    margin-top: 50px;
    width: 100%;
    ${fonts.primary};
    .table {
      border: 1px solid ${colors.lightGray};
      thead {
        background: ${colors.primary};
        color: ${colors.white};
        th {
          border: none;
        }
      }
      tbody {
        tr {
          td {
            border-color: ${colors.lightGray};
          }
        }
      }
    }
    .pagination .page-item.active .page-link {
      background: ${colors.primary};
    }
  }
`;
