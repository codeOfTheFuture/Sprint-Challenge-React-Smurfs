import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import './App.css';
import SmurfForm from './components/SmurfForm';
import UpdateForm from './components/UpdateForm';
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
  margin: 3rem auto;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
      activeSmurf: null
    };
  }

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
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
        this.setState({
          smurfs: res.data
        });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  setUpdateForm = (e, smurf) => {
    e.preventDefault();
    this.setState({ activeSmurf: smurf });
    this.props.history.push('/update-form');
  };

  updateSmurf = smurf => {
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  deleteSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${smurf.id}`)
      .then(res => {
        this.setState({ smurfs: res.data });
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
            render={props => (
              <Smurfs
                {...props}
                smurfs={this.state.smurfs}
                setUpdateForm={this.setUpdateForm}
                deleteSmurf={this.deleteSmurf}
              />
            )}
          />
          <Route
            path="/smurf-form"
            render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
          />
          <Route
            path="/update-form"
            render={props => (
              <UpdateForm
                {...props}
                activeSmurf={this.state.activeSmurf}
                updateSmurf={this.updateSmurf}
              />
            )}
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
