import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  console.log("getting posts");
  try {
    const result = await api.getPosts();
    dispatch({ type: "GET_ALL", payload: result });
  } catch (error) {
    console.log(error);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const { result } = await api.getPost(id);
    dispatch({ type: "GET_ONE", payload: result });
  } catch (error) {
    console.log("error");
  }
};

export const createPost = (data) => async (dispatch) => {
  try {
    const { result } = await api.createPost(data);
    dispatch({ type: "CREATE_ONE", payload: result });
  } catch (error) {
    console.log("error");
  }
};

export const updatePost = (id, data) => async (dispatch) => {
  try {
    const { result } = await api.updatePost(id, data);
    dispatch({ type: "UPDATE_ONE", payload: result });
  } catch (error) {
    console.log("error");
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { result } = await api.deletePost(id);
    dispatch({ type: "DELETE_ONE", payload: result });
  } catch (error) {
    console.log("error");
  }
};
