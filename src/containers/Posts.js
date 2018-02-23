import React, { Component } from 'react';
import Post from '../components/Post';
import styled from 'styled-components';
import { getPosts } from '../utils/api';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background-color: #eee;
`;

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentDidMount() {
    getPosts()
      .then((res) => {
        this.setState({
          posts: res.data,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  renderPosts = () => {
    const { posts } = this.state;

    return posts.map(post => {
      const { title, body, id } = post;

      return (
        <Post
          key={id}
          id={id}
          title={title}
          body={body}
        />
      );
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <Container>
        {loading ? 'loading...' : this.renderPosts()}
      </Container>
    );
  }
}

export default Posts;
