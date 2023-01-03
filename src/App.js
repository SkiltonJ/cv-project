import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
    <div className='container'>
      <Header />
    </div>
  )}
}

export default App;
