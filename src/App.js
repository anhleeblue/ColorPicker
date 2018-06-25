import React, { Component } from 'react';

import Picker from './components/picker';
import Size from './components/size';
import Display from './components/display';
import Reset from './components/reset';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container" >
      <h1 className="text-center">Color Picker App</h1>
        <div className="row p-4 mt-2">

              <Picker/>
              <Size/>

        </div>
              
        <Display/>
        <Reset/>




      </div>
    );
  }
}

export default App;
