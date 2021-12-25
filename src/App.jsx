// import './App.scss';

import React, { Component } from 'react';
import Main from './components/Main/Main';
import { HashRouter } from 'react-router-dom'

class App extends Component {
  
  render() {

    return (
          <div className="app">
            <HashRouter>
              <Main/>
            </HashRouter>

        </div>
  
  
    );


  }

}
export default App;
