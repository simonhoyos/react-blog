import React, { Component } from 'react';
import PostForm from './PostForm';
import Posts from './Posts';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Hero from '../components/Hero'
import NavBar from '../components/NavBar';

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Hero header="React Blog" />
        <BrowserRouter>
        <div>
          <NavBar />
          <Container>
            <Switch>
              <Route
                path="/"
                exact
                component={Posts}
              />
              <Route
                path="/create"
                exact
                component={PostForm}
              />
              <Redirect to="/" />
            </Switch>
          </Container>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
