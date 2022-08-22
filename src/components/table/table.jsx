import React from "react";
import TableRow from "../table-row/table-row";
import { TableContainer, TableHeader, TableBody } from "./table.styles";

const Table = ({ data }) => (
  <TableContainer>
    <TableHeader>
      <tr>
        <th>States</th>
        <th>Confirmed Cases</th>
        <th>No. of Cases(on Admission)</th>
        <th>No. of Discharged</th>
        <th>No. of Deaths</th>
      </tr>
    </TableHeader>
    <TableBody>
      {data?.states.map((elem) => (
        <TableRow key={elem._id} rowData={elem} />
      ))}
    </TableBody>
  </TableContainer>
);

export default Table;
