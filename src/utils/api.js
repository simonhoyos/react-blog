import axios from 'axios';

export function getPosts() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}

export function postPost({ title, body }) {
  return axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: {
      title,
      body,
    }
  })
}
