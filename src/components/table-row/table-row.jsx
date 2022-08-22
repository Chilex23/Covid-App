import React from "react";
import { formatNumber } from "../../utils/formatNumber";

const TableRow = ({ rowData }) => (
  <>
    <tr>
      <td>{rowData?.state}</td>
      <td>{formatNumber(rowData?.confirmedCases)}</td>
      <td>{formatNumber(rowData?.casesOnAdmission)}</td>
      <td>{formatNumber(rowData?.discharged)}</td>
      <td>{formatNumber(rowData?.death)}</td>
    </tr>
  </>
);

export default TableRow;
