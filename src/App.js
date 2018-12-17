import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
