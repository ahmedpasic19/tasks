import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };
export const taskListSlice = createSlice({
  name: "Task- list",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
        state.value.push(action.payload)
    },
    delTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload.id)
    },
    editTask: (state, action) => {
      
    },
  },
});

export const { addTask, editTask, delTask } = taskListSlice.actions;
export default taskListSlice.reducer;
