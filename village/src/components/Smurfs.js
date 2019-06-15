import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const Heading = styled.h1`
  margin-left: 3rem;
  color: skyblue;
`;

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <Heading>Smurf Village</Heading>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                setUpdateForm={this.props.setUpdateForm}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
