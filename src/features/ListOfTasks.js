import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };
export const taskListSlice = createSlice({
  name: "Task- list",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
        state.value = action.payload
    },
    editTask: (state, action) => {},
    delTask: (state, action) => {},
  },
});

export const { addTask, editTask, delTask } = taskListSlice.actions;
export default taskListSlice.reducer;
