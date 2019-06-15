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

const UpdateButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background-color: skyblue;
  color: white;
  border: 1px solid skyblue;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: skyblue;
  }
`;

const DeleteButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  color: skyblue;
  border: 1px solid skyblue;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: skyblue;
    color: white;
  }
`;

const Smurf = props => {
  return (
    <Card>
      <div className="Smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>

        <UpdateButton onClick={e => props.setUpdateForm(e, props)}>
          Update Smurf
        </UpdateButton>

        <DeleteButton onClick={e => props.deleteSmurf(e, props)}>
          Delete Smurf
        </DeleteButton>
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
