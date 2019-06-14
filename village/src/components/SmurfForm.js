import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 6rem;
  padding: 3rem;
  border: 1px solid skyblue;
  border-radius: 5px;
`;

const Input = styled.input`
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: skyblue;
  color: white;
  padding: 0.5rem 3rem;
  border: 1px solid skyblue;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    background: white;
    color: skyblue;
  }
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state);
    // add code to create the smurf using the api

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <Form onSubmit={this.addSmurf}>
          <Input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <Button type="submit">Add to the village</Button>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
