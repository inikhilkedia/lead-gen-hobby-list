import React, { useReducer, useEffect } from "react";
import "./styles.css";
import Form from "./Form.js";
import Table from "./Table.js";

const initialState = {
  formData: { name: "", age: "", hobby: "" },
  tableData: [],
  editing: false,
  editingIndex: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FORM_DATA":
      return { ...state, formData: action.payload };
    case "ADD":
      return { ...state, tableData: [...state.tableData, action.payload] };
    case "EDIT":
      return {
        ...state,
        editingIndex: action.payload.index,
        formData: state.tableData[action.payload.index],
        editing: true,
      };
    case "REMOVE":
      return {
        ...state,
        tableData: state.tableData.filter((_, i) => i !== action.payload),
      };
    case "UPDATE":
      const updatedTableData = [...state.tableData];
      updatedTableData[state.editingIndex] = action.payload;
      return {
        ...state,
        tableData: updatedTableData,
        editing: false,
        editingIndex: null,
        formData: initialState.formData,
      };
    case "RESET_FORM":
      return {
        ...state,
        formData: initialState.formData,
        editing: false,
        editingIndex: null,
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { formData, tableData, editing, editingIndex } = state;

  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  return (
    <div className="App">
      <Form formData={formData} dispatch={dispatch} editing={editing} />
      <Table tableData={tableData} dispatch={dispatch} />
    </div>
  );
}
