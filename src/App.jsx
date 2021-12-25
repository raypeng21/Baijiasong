// import './App.scss';

import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main/Main';

class App extends Component {
  
  render() {

    return (
      <BrowserRouter>
          <div className="app">
          <Main/>
        </div>
      </BrowserRouter>
  
  
    );


  }

}
export default App;
