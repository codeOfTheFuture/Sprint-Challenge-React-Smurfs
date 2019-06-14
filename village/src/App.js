import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: skyblue;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Li = styled.li`
  list-style: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  margin: auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  };

  addSmurf = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        console.log(res);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Nav>
          <Ul>
            <Li>
              <NavLink
                to="/"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '1.4rem',
                  padding: '2rem'
                }}
                activeClassName="activeNavButton"
              >
                Home
              </NavLink>
            </Li>
            <Li>
              <NavLink
                to="/smurf-form"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '1.4rem',
                  padding: '2rem'
                }}
                activeClassName="activeNavButton"
              >
                Add Smurf
              </NavLink>
            </Li>
          </Ul>
        </Nav>

        <Container>
          <Route
            exact
            path="/"
            render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
          />
          <Route
            path="/smurf-form"
            render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
          />
        </Container>
      </div>
    );
  }
}

export default App;

// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
// Notice what your map function is looping over and returning inside of Smurfs.
// You'll need to make sure you have the right properties on state and pass them down to props.
