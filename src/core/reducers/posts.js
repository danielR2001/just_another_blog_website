const reducer = (posts = [], action) => {
  switch (action.type) {
    case "GET_ALL":
      return action.payload;
    case "GET":
      return action.payload;
    default:
      return posts;
  }
};

export default reducer;
