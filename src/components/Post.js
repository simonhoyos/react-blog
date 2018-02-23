import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid #333;
  box-sizing: border-box;
  flex-grow: 1;
  margin: 10px;
  min-width: 280px;
  padding: 0 20px;
  width: 30%;
  background-color: #fff;
`;

const Post = ({ title, body, id }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{body}</p>
      <Link to={`/post/${id}`}>More</Link>
    </Container>
  );
};

export default Post;
