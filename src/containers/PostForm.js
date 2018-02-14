import React, { Component } from 'react';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import Form from '../components/Form';
import { postPost } from '../utils/api';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    postPost(this.state)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    const { title, body } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="title"
          onChange={this.handleChange}
          placeholder="title"
          value={title}
        />
        <TextArea
          name="body"
          onChange={this.handleChange}
          placeholder="body"
          value={body}
        />
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default PostForm;
