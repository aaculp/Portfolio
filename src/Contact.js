import React, { Component } from 'react'


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
      <form
        className='ContactForm'
        onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type='text'
          name='name'
          value={this.state.name}
          placeholder='Name'
          className='formInput'
          onChange={(e) =>this.handleChange(e)}
        />
        <input
          type='email'
          name='email'
          value={this.state.email}
          placeholder='Email'
          className='formInput'
          onChange={(e) =>this.handleChange(e)}
        />
        <input
          type='submit'
          value="Let's Do Some Work!"
          />
        </form>
      )
  }
}
