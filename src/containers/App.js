import React, { Component } from 'react';
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
        <Posts />
      </Container>
    );
  }
}

export default App;
