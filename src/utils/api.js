import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export function getPosts() {
  return axios.get(BASE_URL);
}

export function getPost(id) {
  return axios({
    method: 'get',
    url: BASE_URL,
    params: { id },
  })
}

export function postPost({ title, body }) {
  return axios({
    method: 'post',
    url: BASE_URL,
    data: {
      title,
      body,
    }
  })
}
