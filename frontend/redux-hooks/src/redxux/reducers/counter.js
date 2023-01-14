const initialState = {
  counter: 50,
};

// reducer
const CounterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default CounterReducer;
