import React from "react";

export default function Form({ formData, dispatch, editing }) {
  const { name, age, hobby } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_FORM_DATA",
      payload: { ...formData, [name]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      dispatch({ type: "UPDATE", payload: formData });
    } else {
      dispatch({ type: "ADD", payload: formData });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={age} onChange={handleChange} />
      </label>
      <label>
        Hobby:
        <input type="text" name="hobby" value={hobby} onChange={handleChange} />
      </label>
      <button type="submit">{editing ? "Update" : "Submit"}</button>
    </form>
  );
}
