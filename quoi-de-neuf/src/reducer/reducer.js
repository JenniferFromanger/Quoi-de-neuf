const store = {
  counter: 0,
};

const reducer = (temporaryStore = { ...store }, action) => {
  switch (action.type) {
    case "INCREMENT50":
      return { ...temporaryStore, counter: temporaryStore.counter + 50 };
    case "DECREMENT10":
      return { ...temporaryStore, counter: temporaryStore.counter - 10 };
    default:
      return temporaryStore;
  }
};

export default reducer;
