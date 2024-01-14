import axios from 'axios' /** It is a JavaScript library that allows us
to easily perform HTTP operations in client side applications. */

const url = 'https://memories-app-api.vercel.app'

export const fetchPosts = () => axios.get(url); 
export const createPost = (newPost) => axios.post(url, newPost); 
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`/*, updatedPost*/);