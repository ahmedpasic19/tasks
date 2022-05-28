import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./ListOfTasks";

const persistConfig = {
  key: "tasks",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const reducer = combineReducers({
  task: persistedReducer,
})

const store = configureStore({reducer})
const persistor =persistStore(store)
export default store
export {persistor}