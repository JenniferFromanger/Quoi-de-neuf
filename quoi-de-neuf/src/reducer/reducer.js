const store = {
  vegetableToday: false,
  carbohydrateToday: false,
  sweetToday: false,
  exerciceToday: false,
  medicalToday: false,
  smokeToday: false,
  drinkToday: false,
  score: 0,
};

const reducer = (state = { ...store }, action) => {
  switch (action.type) {
    case "ANSWER_VEGETABLE":
      return {
        ...store,
        vegetableToday: action.answer,
        score: state.score + action.points,
      };
    case "ANSWER_CARBOHYDRATE":
      return {
        ...store,
        carbohydrateToday: action.answer,
        score: state.score + action.points,
      };
    case "ANSWER_SWEET":
      return {
        ...store,
        sweetToday: action.answer,
        score: state.score + action.points,
      };
    case "ANSWER_EXERCICE":
      return {
        ...store,
        exerciceToday: action.answer,
        score: state.score + action.points,
      };
    case "ANSWER_MEDICAL":
      return {
        ...store,
        medicalToday: action.answer,
        score: state.score + action.points,
      };
    case "ANSWER_SMOKE":
      return {
        ...store,
        smokeToday: action.answer,
        score: state.score + action.points,
      };
    case "ANSWER_DRINK":
      return {
        ...store,
        drinkToday: action.answer,
        score: state.score + action.points,
      };
    default:
      return state;
  }
};

export default reducer;
