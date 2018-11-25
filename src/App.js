import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Portfolio} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
