import React, { Component } from 'react';
import PostForm from './PostForm';
import Posts from './Posts';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <h1>React blog</h1>
        <h2>Create post: </h2>
        <PostForm />
        <h2>Posts: </h2>
        <Posts />
      </Container>
    );
  }
}

export default App;
