# kodif-io-lead-gen-hobby-list

![Screenshot](Screenshot.png)

Here is a breakdown of the components and their functionality:

### 1. `App` Component

This is the root component where most of the state and logic reside. It uses the `useReducer` hook to manage application state, which includes form data, table data, and flags for editing state. The `reducer` function handles various actions to update the state appropriately, such as adding a new entry, editing existing entries, and removing entries. The `useEffect` hook logs the current table data whenever it changes.

- **State Structure**: Includes `formData` for the current form inputs, `tableData` for storing all entries, `editing` as a boolean to indicate edit mode, and `editingIndex` to know which entry is being edited.

- **Reducer Actions**:

  - `SET_FORM_DATA`: Updates the form data with user inputs.

  - `ADD`: Adds a new entry to the table.

  - `EDIT`: Prepares form data for editing an existing entry.

  - `REMOVE`: Removes an entry from the table.

  - `UPDATE`: Updates an existing entry and resets edit mode.

  - `RESET_FORM`: Resets the form to its initial state.

### 2. `Form` Component

Handles user inputs for adding or updating entries. It uses controlled components (input fields) to capture user input and dispatch actions to update the state in the `App` component.

- **Event Handlers**:

  - `handleChange`: Updates the state with the current value in the form fields.

  - `handleSubmit`: Dispatches either an `ADD` or `UPDATE` action depending on whether the form is in edit mode.

### 3. `Table` Component

Displays the entries in a table format. It maps over `tableData` from the app state to render a `Row` component for each entry, passing necessary data and functions.

### 4. `Row` Component

Represents a single row in the table. Each row displays data for one entry and includes buttons to edit or remove the entry by dispatching appropriate actions.

- **Event Handlers**:

  - `editEntry`: Sets up the form for editing the current entry.

  - `removeEntry`: Removes the current entry from the table.

Each of these components works together through the `dispatch` function passed around as props, allowing state changes to propagate through the application based on user interactions. This structure provides a clear separation of concerns and reusability of components.
