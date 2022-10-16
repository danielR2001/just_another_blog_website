import { apiClient } from "../apiClient.js";

export async function getArticles() {
  try {
    const result = await apiClient.get("/articles");
    return result.data;
  } catch (e) {
    console.log(e);
  }
}

export async function getArticle(id) {
  return await apiClient.get(`/articles/${id}`);
}

export async function createArticle(data) {
  return await apiClient.article(`/articles`, JSON.stringify(data));
}

export async function updateArticle(id, data) {
  return await apiClient.put(`/articles/${id}`, JSON.stringify(data));
}

export async function deleteArticle(id) {
  return await apiClient.delete(`/articles/${id}`);
}
