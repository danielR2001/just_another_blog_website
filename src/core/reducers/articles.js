const reducer = (articles = [], action) => {
  switch (action.type) {
    case "GET_ALL":
      return action.payload;
    case "GET_ONE":
      return action.payload;
    case "CREATE_ONE":
      return action.payload;
    case "UPDATE_ONE":
      return action.payload;
    case "DELETE_ONE":
      return action.payload;
    default:
      return articles;
  }
};

export default reducer;
