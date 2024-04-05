import React from "react";

export default function Row({ tableData, index, dispatch }) {
  const editEntry = () => {
    dispatch({ type: "EDIT", payload: { index } });
  };

  const removeEntry = () => {
    dispatch({ type: "REMOVE", payload: index });
  };

  return (
    <tr>
      <td>{tableData.name}</td>
      <td>{tableData.age}</td>
      <td>{tableData.hobby}</td>
      <td>
        <button onClick={editEntry}>Edit</button>
        <button onClick={removeEntry}>Remove</button>
      </td>
    </tr>
  );
}
