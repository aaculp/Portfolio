import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav/nav.css'
import Head from './Nav/Head'
import AboutNav from './Nav/AboutNav'
import ContactNav from './Nav/ContactNav'
import ProjectsNav from './Nav/ProjectsNav'
import IMG from './Nav/IMG'

export default class Home extends Component {
  render() {
    return(
      <div className='homepage'>
        <Link to='/about'><AboutNav /></Link>
        <Link to='/contact'><ContactNav /></Link>
        <Link to='/projects'><ProjectsNav /></Link>
        <Head />
        <span className='welcome'>WELCOME TO</span>
        <span className='the'>THE</span>
        <span className='portfolio-of'>PORTFOLIO OF</span>
        <IMG />
        <img  src='https://res.cloudinary.com/aaronculp/image/upload/v1542405550/Portfolio/IMG_4199.jpg' className='home-img'/>
        <span className='name'>AARON CULP</span>
        <span className='front-end'>FRONT - END </span>
        <span className='web-dev'>WEB DEVELOPER</span>
      </div>
    )
  }
}
