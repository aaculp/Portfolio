import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './project.css'

export default class Projects extends Component {
  render() {
    return(
      <div class = 'projectGrid'>
          <div class="menu">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <div class="dropdown-content">
            <Link to = '/home' style = {{ color: 'red'}}>Home</Link>
            <Link to = '/projects' style = {{ color: 'red'}}>Projects</Link>
            <Link to = '/contact' style = {{ color: 'red'}}>Contact Me</Link>
          </div>
        </div>

        <div class = 'projectHeader'>
          <span>A</span>
          <span class = 'spin'>A</span>
          <span>C</span>
        </div>

        <div class = 'project1'>
          <div className = 'text'>
            <h1> Rick and Morty Space Adventures </h1>
            <h1> Spacebar - Shoot </h1>
            <h1> Left/Right Arrows - Move Rick </h1>
          </div>
        </div>

        <div class = 'project2'>
          <h1> Rick and Morty Space Adventures </h1>
          <h1> Spacebar - Shoot </h1>
          <h1> Left/Right Arrows - Move Rick </h1>
        </div>

        <div class = 'project3'>
          <h1> Rick and Morty Space Adventures </h1>
          <h1> Spacebar - Shoot </h1>
          <h1> Left/Right Arrows - Move Rick </h1>
        </div>

        <div class = 'project4'>
          <h1> Rick and Morty Space Adventures </h1>
          <h1> Spacebar - Shoot </h1>
          <h1> Left/Right Arrows - Move Rick </h1>
        </div>

        <div class = 'projectFooter'>
          <span>A</span>
          <span class = 'spin'>A</span>
          <span>C</span>
        </div>
      </div>
    )
  }
}
