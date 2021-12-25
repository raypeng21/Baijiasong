import React, { Component } from 'react';
import Topbar from '../topbar/Topbar';
import Home from '../home/Home';
import About from '../about/About';
import News from '../news/News';
import Projects from '../project/Projects';
import Service from '../service/Service';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import { HashRouter, Route, Redirect,withRouter } from 'react-router-dom';
class Main extends Component {



  render() {

    return (
      <div>
        
        <Topbar />

        <div>
        <HashRouter>
                  <Route path='/home' component={() => <Home/>} />
                  <Route path='/about' component={() => <About/>} />
                  <Route path='/news' component={() => <News/>} />
                  <Route path='/projects' component={() => <Projects/>} />
                  <Route path='/service' component={() => <Service/>} />
                  <Route path='/contact' component={() => <Contact/>} />
                  <Redirect to="/home" />
        </HashRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);