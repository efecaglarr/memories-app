import axios from 'axios' /** It is a JavaScript library that allows us
to easily perform HTTP operations in client side applications. */

const API = axios.create({ baseURL: 'http://localhost:4444'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const fetchPosts = () => API.get('/posts'); 
export const createPost = (newPost) => API.post('/posts', newPost); 
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`/*, updatedPost*/);

export const signin = (formData) => API.post(`/user/signin`, formData)
export const signup = (formData) => API.post(`/user/signup`, formData)

// const url = 'https://memories-app-pclg.onrender.com/posts'

// export const fetchPosts = () => axios.get(url); 
// export const createPost = (newPost) => axios.post(url, newPost); 
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`/*, updatedPost*/);
