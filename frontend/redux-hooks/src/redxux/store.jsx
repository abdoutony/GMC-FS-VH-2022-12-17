import { createStore, combineReducers } from "redux";
import CounterReducer from "./reducers/counter";
import TitleReducer from "./reducers/titke";
// const initialState = {
//   counter: 50,
//   title: "Hello world",
// };

// // reducer
// const reducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case "INCREMENT":
//       return { ...state, counter: state.counter + 1 };
//     case "DECREMENT":
//       return { ...state, counter: state.counter - 1 };
//     default:
//       return state;
//   }
// };

const reducers = {
  CounterReducer,
  TitleReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);
export default store;
