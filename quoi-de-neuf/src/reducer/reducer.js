const store = {
  vegetablesToday: false,
  score: 0,
};

const reducer = (state = { ...store }, action) => {
  switch (action.type) {
    case "ANSWER_VEGETABLE":
      return {
        ...store,
        vegetablesToday: action.answer,
        score: state.score + action.points,
      };

    default:
      return state;
  }
};

export default reducer;
