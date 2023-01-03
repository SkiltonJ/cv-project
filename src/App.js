import './App.css';
import React, { Component } from 'react';
import Resume from './components/Resume';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
    <div className='container center'>
      <Header />
      <Resume />
    </div>
  )}
}

export default App;
