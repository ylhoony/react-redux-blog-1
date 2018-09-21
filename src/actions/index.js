import axios from "axios";
export const FETCH_POSTS = "fetch_posts";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";

export const fetchPosts = () => {
  const url = `${ROOT_URL}/posts${process.env.REACT_APP_API_KEY}`;
  const req = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: req
  };
};
