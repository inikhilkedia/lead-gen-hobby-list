import React from "react";
import Row from "./Row.js";

export default function Table({ tableData, dispatch }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Hobby</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <Row key={index} tableData={data} index={index} dispatch={dispatch} />
        ))}
      </tbody>
    </table>
  );
}
