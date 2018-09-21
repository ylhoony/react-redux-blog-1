import axios from "axios";
export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_post";
export const FETCH_POST = "fetch_post";
export const DELETE_POST = "delete_post";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchPosts = () => {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  const req = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: req
  };
};

export const createPost = (values, callback) => {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  const req = axios.post(url, values).then(() => callback());

  return {
    type: CREATE_POST,
    payload: req
  };
};

export const fetchPost = id => {
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
  const req = axios.get(url);

  return {
    type: FETCH_POST,
    payload: req
  };
};

export const deletePost = (id, callback) => {
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
  const req = axios.delete(url).then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
};
