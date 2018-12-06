import React, { Component } from 'react'
import './contact.css'

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('hitting')
  }

  handleChange(e) {
    let name = e.target.name
    let value = e.target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div className= 'contact'>
        <a href = 'https://www.instagram.com/thebrownsanda/'>
          <img
            src = 'https://res.cloudinary.com/aaronculp/image/upload/v1544120246/Portfolio/iconmonstr-instagram-11.svg'
            height = '50'
            width = '50'
            alt = 'Instagram'
            className = 'Instagram'
          />
        </a>

        <a href = 'https://www.linkedin.com/in/aaron-culp/'>
          <img
            src = 'https://res.cloudinary.com/aaronculp/image/upload/v1544120474/Portfolio/iconmonstr-linkedin-5.svg'
            height = '50'
            width = '50'
            alt = 'LinkedIn'
            className = 'LinkedIn'
          />
        </a>

        <a href = 'https://github.com/aaculp'>
          <img
            src = 'https://res.cloudinary.com/aaronculp/image/upload/v1544120476/Portfolio/iconmonstr-github-5.svg'
            height = '50'
            width = '50'
            alt = 'GitHub'
            className = 'GitHub'
          />
        </a>

        <div className = 'flagContainer'>
          <div className = 'flagStripes'>
            <div className = 'redTop'></div>
            <div className = 'whiteTop'></div>
            <div className = 'redTop'></div>
            <div className = 'whiteTop'></div>
            <div className = 'redTop'></div>
            <div className = 'whiteTop'></div>
            <div className = 'redTop'></div>
            <div className = 'whiteBottom'></div>
            <div className = 'redBottom'></div>
            <div className = 'whiteBottom'></div>
            <div className = 'redBottom'></div>
            <div className = 'whiteBottom'></div>
            <div className = 'redBottom'></div>
          </div>
        </div>

      <div className = 'contactDisplay'>

{/*        <div className = 'contactForm'>
          <ContactForm />
        </div>*/}

        <div className = 'contactLogo'>
          <span>A</span>
          <span className = 'spin'>A</span>
          <span>C</span>
        </div>

{/*        <div className = 'contactBio'>
          <p>AARON</p>
          <p>CULP</p>
          <p>FRONT</p>
          <p>END</p>
          <p>DEVELOPER</p>
        </div>*/}

      </div>

    </div>
    )
  }
}
