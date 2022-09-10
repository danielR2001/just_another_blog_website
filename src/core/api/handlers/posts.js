import { apiClient } from "../apiClient.js";

export async function getPosts() {
  try {
    const result = await apiClient.get("/posts");
    return result.data;
  } catch (e) {
    console.log(e);
  }
}

export async function getPost(id) {
  return await apiClient.get(`/posts/${id}`);
}

export async function createPost(data) {
  return await apiClient.post(`/posts`, JSON.stringify(data));
}

export async function updatePost(id, data) {
  return await apiClient.put(`/posts/${id}`, JSON.stringify(data));
}

export async function deletePost(id) {
  return await apiClient.delete(`/posts/${id}`);
}
