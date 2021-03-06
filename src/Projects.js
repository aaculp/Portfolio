import React from 'react'
import { Link } from 'react-router-dom'
import './project.css'
import './projectMedia.css'

export default function Projects() {
  return(
    <div className = 'projectGrid'>

      <div className = "menu">
          <div className = "bar1"></div>
          <div className = "bar2"></div>
          <div className = "bar3"></div>
        <div className = "dropdown-content">
          <Link to = '/home' style = {{ color: '#FD6EFB', textDecoration: 'none'}}>Home</Link>
          <Link to = '/about' style = {{ color: '#01BAFF', textDecoration: 'none'}}>About Me</Link>
          <Link to = '/contact' style = {{ color: '#9B39FC', textDecoration: 'none'}}>Contact Me</Link>
        </div>
      </div>

      <div className = 'projectHeader'>
        <span>A</span>
        <span className = 'spin'>A</span>
        <span>C</span>
      </div>

      <div className = 'RickMorty'>
        <a href = 'https://aaculp.github.io/Rick-Morty-Space-Invaders/'>
          <img src = 'https://res.cloudinary.com/aaronculp/image/upload/v1544030088/Portfolio/RickMortyDuo.jpg'
            alt = 'Rick & Morty'
            className = 'image'
          />
          </a>
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
        <a href = 'https://aaculp.github.io/DuckHunt/'>
          <img src = 'https://res.cloudinary.com/aaronculp/image/upload/v1544027007/Portfolio/DuckHUNT.jpg'
            alt = 'Duck Hunt'
            className = 'image'
          />
          </a>
        <div className = 'DuckHuntOverlay'>
          <div className = 'DuckHuntText'>
            <h1> Duck Hunt </h1>
            <h1> Click On The Ducks To Shoot Them </h1>
            <h1> Built In HTML / CSS / JS-DOM </h1>
          </div>
        </div>
      </div>

      <div className = 'Remedi'>
        <a href = 'https://expo.io/@aaronculp/Remedi'>
          <img src = 'https://res.cloudinary.com/aaronculp/image/upload/v1543970506/Portfolio/RemediMobile.jpg'
            alt = 'Remedi'
            className = 'imageRemedi'
          />
        </a>
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
        <a href = 'https://group-project-deploy.herokuapp.com/'>
          <img src = 'https://res.cloudinary.com/aaronculp/image/upload/v1543979638/Portfolio/WHO.jpg'
            alt = 'Who Has Time'
            className = 'image'
          />
        </a>
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
