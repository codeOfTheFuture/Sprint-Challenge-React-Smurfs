import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 10rem;
  margin-top: 6rem;
  padding: 3rem;
  border: 1px solid skyblue;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: skyblue;
  color: white;
  padding: 0.5rem 3rem;
  border: 1px solid skyblue;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: white;
    color: skyblue;
  }
`;

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.activeSmurf
    };
  }

  componentDidMount() {
    console.log('Update Form Props: ', this.props);
    console.log('Update Form State: ', this.state.smurf);
  }

  updateSmurf = event => {
    event.preventDefault();
    this.props.updateSmurf(this.state.smurf);
  };

  handleInputChange = event => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <Form onSubmit={this.updateSmurf}>
          <input
            type="text"
            style={{
              padding: '0.5rem 0',
              marginBottom: '1rem',
              borderRadius: '5px'
            }}
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            type="number"
            style={{
              padding: '0.5rem 0',
              marginBottom: '1rem',
              borderRadius: '5px'
            }}
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            type="text"
            style={{
              padding: '0.5rem 0',
              marginBottom: '1rem',
              borderRadius: '5px'
            }}
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <Button>Update The Smurf</Button>
        </Form>
      </div>
    );
  }
}

export default UpdateForm;
