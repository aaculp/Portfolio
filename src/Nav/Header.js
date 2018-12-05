import React, { Component } from 'react';

class Header extends Component {

  componentDidMount() {
    let headerScrollY = 0;
    let header = document.querySelector('.header')


    window.addEventListener('scroll', function(){
      headerScrollY = window.scrollY;
      console.log(headerScrollY)

      if(headerScrollY > 4){
        console.log('down of page')
        header.classList.add('header-small')
        header.classList.add('nav-link')
      } else {
        console.log('top of page')
        header.classList.remove('header-small')
        header.classList.remove('nav-link')
      }
    })
  }

render() {
    return(
      <div className = "header">
      <h1> AAC </h1>
      </div>
      )
  }
}

export default Header
