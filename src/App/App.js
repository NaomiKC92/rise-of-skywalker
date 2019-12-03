import React, { Component } from 'react';
import { getAllMoviesData } from '../apiCalls';
import LoginForm from '../LoginForm/LoginForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMoviesData: []
    };
  }

  componentDidMount() {
    getAllMoviesData().then(data => this.setState({ allMoviesData: data }));
  }

  render() {
    return (
      <div>
        <h1>Rise of Skywalker Star Wars API</h1>
        <LoginForm />
      </div>
    );
  }
}

export default App;