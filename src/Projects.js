import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './project.css'
import './projectMedia.css'

export default class Projects extends Component {
  render() {
    return(
      <div className = 'projectGrid'>

        <div className = "menu">
            <div className = "bar1"></div>
            <div className = "bar2"></div>
            <div className = "bar3"></div>
          <div className = "dropdown-content">
            <Link to = '/home' style = {{ color: 'red', textDecoration: 'none'}}>Home</Link>
            <Link to = '/about' style = {{ color: 'red', textDecoration: 'none'}}>About Me</Link>
            <Link to = '/contact' style = {{ color: 'red', textDecoration: 'none'}}>Contact Me</Link>
          </div>
        </div>

        <div className = 'projectHeader'>
          <span>A</span>
          <span className = 'spin'>A</span>
          <span>C</span>
        </div>

        <div className = 'RickMorty'>
          <img src = 'https://res.cloudinary.com/aaronculp/image/upload/v1544030088/Portfolio/RickMortyDuo.jpg'
            alt = 'Rick & Morty'
            className = 'image'
          />
          <div className = 'RickMortyOverlay'>
            <div className = 'RickMortyText'>
              <h1> Rick & Morty Space Adventures </h1>
              <h1> Spacebar - Shoot </h1>
              <h1> Left Arrow - Move Rick </h1>
              <h1> Right Arrow - Move Rick </h1>
              <h1> Built In HTML / CSS / JS-DOM </h1>
            </div>
          </div>
        </div>

       {/*img owned by Adult Swim*/}

        <div className = 'DuckHunt'>
          <img src = 'https://res.cloudinary.com/aaronculp/image/upload/v1544027007/Portfolio/DuckHUNT.jpg'
            alt = 'Duck Hunt'
            className = 'image'
          />
          <div className = 'DuckHuntOverlay'>
            <div className = 'DuckHuntText'>
              <h1> Duck Hunt </h1>
              <h1> Click On The Ducks To Shoot Them </h1>
              <h1> Built In HTML / CSS / JS-DOM </h1>
            </div>
          </div>
        </div>

        <div className = 'Remedi'>
          <img src = 'https://res.cloudinary.com/aaronculp/image/upload/v1543970506/Portfolio/RemediMobile.jpg'
            alt = 'Remedi'
            className = 'imageRemedi'
          />
          <div className = 'RemediOverlay'>
            <div className = 'RemediText'>
              <h1> Remedi </h1>
              <h1> Health Care Mobile App </h1>
              <h1> Built In React Native </h1>
              <h1> Designed by UX / UI Designers </h1>
            </div>
          </div>
        </div>

        <div className = 'WhoHasTime'>
          <img src = 'https://res.cloudinary.com/aaronculp/image/upload/v1543979638/Portfolio/WHO.jpg'
            alt = 'Who Has Time'
            className = 'image'
          />
          <div className = 'WhoHasTimeOverlay'>
            <div className = 'WhoHasTimeText'>
              <h1> Who Has Time </h1>
              <h1> React Web Application </h1>
              <h1> Predict Waiting Lines </h1>
              <h1> So You Don't Have To Waste Your Time  </h1>
              <h1> React Native Mobile Coming Soon! </h1>
            </div>
          </div>
        </div>

        <div className = 'projectFooter'>
          <span>A</span>
          <span className = 'spin'>A</span>
          <span>C</span>
        </div>
      </div>
    )
  }
}
