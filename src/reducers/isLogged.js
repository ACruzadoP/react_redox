const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SWITCH_SIGN":
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
