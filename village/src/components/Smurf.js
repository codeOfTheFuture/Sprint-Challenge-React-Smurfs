import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 10rem;
  margin: 1rem;
  padding: 3rem;
  border: 1px solid skyblue;
  border-radius: 5px;
`;

const Smurf = props => {
  return (
    <Card>
      <div className="Smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        <button onClick={e => props.deleteSmurf(e, props)}>Delete Smurf</button>
      </div>
    </Card>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
