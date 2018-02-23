import React, { Component } from 'react';
import { getPost } from '../utils/api';
import { Link } from 'react-router-dom';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      title: '',
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getPost(id)
      .then((res) => {
        const { title, body } = res.data[0];

        this.setState({
          body,
          title,
          loading: false,
        });
      })
      .catch((err) => console.log(err))
  }

  render() {
    const { title, body, loading } = this.state

    return (
      loading ?
      'loading...'
      :
      <div>
        <Link to='/'>Back</Link>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
