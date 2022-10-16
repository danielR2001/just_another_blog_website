import * as api from "../api";

export const getArticles = () => async (dispatch) => {
  console.log("getting articles");
  try {
    const result = await api.getArticles();
    dispatch({ type: "GET_ALL", payload: result });
  } catch (error) {
    console.log(error);
  }
};

export const getArticle = (id) => async (dispatch) => {
  try {
    const { result } = await api.getArticle(id);
    dispatch({ type: "GET_ONE", payload: result });
  } catch (error) {
    console.log("error");
  }
};

export const createArticle = (data) => async (dispatch) => {
  try {
    const { result } = await api.createArticle(data);
    dispatch({ type: "CREATE_ONE", payload: result });
  } catch (error) {
    console.log("error");
  }
};

export const updateArticle = (id, data) => async (dispatch) => {
  try {
    const { result } = await api.updateArticle(id, data);
    dispatch({ type: "UPDATE_ONE", payload: result });
  } catch (error) {
    console.log("error");
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  try {
    const { result } = await api.deleteArticle(id);
    dispatch({ type: "DELETE_ONE", payload: result });
  } catch (error) {
    console.log("error");
  }
};
