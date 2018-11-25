import React, { Component } from 'react'
import './Nav/nav.css'
import FullNav from './Nav/FullNav'



export default class About extends Component {
  render() {
    return(
      <div>
        <FullNav />
        <div className='NameContainer'>
          <span className='Aaron'>Aaron</span>
          <span className='Culp'>Culp</span>
        </div>
        <div className='AboutContainer'>
          <p className='AboutText'>Hey, I'm Aaron Culp, A Web Developer Who Believes That Engaging And Interactive Design Is The foundation To A Positive User Experience. As A former US Marine Corps Veteran, I Understand That The Success Or Failure Of Any Project Or mission Comes Down To Meticulous Attention To Detail. As A culturally Adept, Versatile Leader Who Has Served In Over 15 Countries, I Thrive In Unfamiliar Situations Working With People From All Backgrounds And Perspectives.</p>
        </div>
      </div>
      )
  }
}
