import styled from "styled-components";

export const TableContainer = styled.table`
  font-size: 1.6rem;
  margin: 5rem 0;
  width: 100%;
  border: 1px solid gray;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #138750;
  color: #fff;

  tr {
    th {
      padding: 1rem;
      text-align: left;
    }

    th:not(:last-child) {
      border-right: 1px solid #fff;
    }
  }
`;

export const TableBody = styled.tbody`
  tr {
    td {
      padding: 1rem;
      text-align: left;
      border: 1px solid gray;
    }
  }
`;
