import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './project.css'

export default class Projects extends Component {
  render() {
    return(
      <div class = 'projectGrid'>
          <div className = "menu">
          <div className = "bar1"></div>
          <div className = "bar2"></div>
          <div className = "bar3"></div>
          <div className = "dropdown-content">
            <Link to = '/home' style = {{ color: 'red'}}>Home</Link>
            <Link to = '/projects' style = {{ color: 'red'}}>Projects</Link>
            <Link to = '/contact' style = {{ color: 'red'}}>Contact Me</Link>
          </div>
        </div>

        <div className = 'projectHeader'>
          <span>A</span>
          <span className = 'spin'>A</span>
          <span>C</span>
        </div>

        <div className = 'RickMorty'>
          <img src = 'https://res.cloudinary.com/aaronculp/image/upload/v1543943983/Portfolio/Run-the-Jewels-Rick-and-Morty.jpg' alt = 'Rick & Morty' className = 'image' />
          <div className = 'RickMortyOverlay'>
            <div className = 'RickMortyText'>
              <h1> Rick & Morty Space Adventures </h1>
              <h1> Spacebar - Shoot </h1>
              <h1> Left/Right Arrows - Move Rick </h1>
            </div>
          </div>
        </div>

       {/*img owned by Adult Swim*/}

        <div className = 'DuckHunt'>
          <img src = 'https://res.cloudinary.com/aaronculp/image/upload/v1543951115/Portfolio/duck-hunt-part-2.png' alt = 'Duck Hunt' className = 'image' />
          <div className = 'DuckHuntOverlay'>
            <div className = 'DuckHuntText'>
              <h1> Duck Hunt </h1>
              <h1> Click On The Ducks To Shoot Them </h1>
            </div>
          </div>
        </div>

        <div className = 'Remedi'>
          <img src = 'https://res.cloudinary.com/aaronculp/image/upload/v1543970506/Portfolio/RemediMobile.jpg' alt = 'Remedi' className = 'imageRemedi' />
          <div className = 'RemediOverlay'>
            <div className = 'RemediText'>
              <h1> Rick and Morty Space Adventures </h1>
              <h1> Spacebar - Shoot </h1>
              <h1> Left/Right Arrows - Move Rick </h1>
            </div>
          </div>
        </div>

        <div className = 'WhoHasTime'>
          <img src = 'https://res.cloudinary.com/aaronculp/image/upload/v1543979638/Portfolio/WHO.jpg' alt = 'Who Has Time' className = 'image' />
          <div className = 'WhoHasTimeOverlay'>
            <div className = 'WhoHasTimeText'>
              <h1> Rick and Morty Space Adventures </h1>
              <h1> Spacebar - Shoot </h1>
              <h1> Left/Right Arrows - Move Rick </h1>
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
