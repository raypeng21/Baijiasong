import React, { Component } from 'react';
import Topbar from '../topbar/Topbar';
import Home from '../home/Home';
import About from '../about/About';
import News from '../news/News';
import Projects from '../project/Projects';
import Service from '../service/Service';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import { HashRouter as Router , Route, Redirect,withRouter } from 'react-router-dom';
class Main extends Component {



  render() {

    return (
      <div>
        
        <Topbar />

        <div>
        <Router >
                  <Route exact = {true} path='/home' component={Home} />
                  <Route exact = {true}  path='/about' component={About} />
                  <Route exact = {true}  path='/news' component={News} />
                  <Route exact path='/projects' component={Projects} />
                  <Route exact path='/service' component={Service} />
                  <Route exact path='/contact' component={Contact} />
                  <Redirect to="/home" />
        </Router >
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);