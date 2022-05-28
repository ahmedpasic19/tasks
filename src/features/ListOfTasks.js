import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [{name: "Ahmed", num: 5, text: "Hello"}] };
export const taskListSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
    delTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload.id);
    },
    editTask: (state, action) => {
      state.value.forEach((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
        } 
      });
    },
  },
});

export const { addTask, editTask, delTask } = taskListSlice.actions;
export default taskListSlice.reducer;
