import axios from 'axios'; //used to make api calls. (Used in client side)

const API =axios.create({baseURL: 'http://localhost:5000'});

//This will happen before each request
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization =`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});


export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost)=> API.post('/posts', newPost); 
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`,updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`); //This will send an http delete request to the url with the route having the specified id parameter
export const likePost= (id) => API.patch(`/posts/${id}/likePost`);


export const signIn = (formData) => API.post('/user/signin',formData);
export const signUp = (formData) => API.post('/user/signup',formData);


