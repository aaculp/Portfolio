import React from 'react'

export default function Head(){
  return(
    <div className = 'Header'>
      <a href = 'https://www.instagram.com/thebrownsanda/'>
      <img
        src = 'https://res.cloudinary.com/aaronculp/image/upload/v1544120246/Portfolio/iconmonstr-instagram-11.svg'
        className = 'igIcon'
        alt = 'Instagram'/>
      </a>
      <a href = 'https://github.com/aaculp'>
      <img
        src = 'https://res.cloudinary.com/aaronculp/image/upload/v1544120476/Portfolio/iconmonstr-github-5.svg'
        className = 'gitIcon'
        alt = 'github'/>
      </a>
    </div>
  )
}
