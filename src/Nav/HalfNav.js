import React from 'react'
import { Link } from 'react-router-dom'

export default function HalfNav() {
    return(
      <div className = 'HalfNavBar'>
        <Link to = '/home' style = {{ color: 'red'}}>Home</Link>
        <Link to = '/projects' style = {{ color: 'red'}}>Projects</Link>
        <Link to = '/contact' style = {{ color: 'red'}}>Contact Me</Link>
      </div>
    )
  }

