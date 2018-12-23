import React, { Component } from 'react';
import { SectionTitle } from './shared/SectionTitle'
import '../styles/Contact.css';
import axios from 'axios'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      emailInvalid: false,
      message: ''
    }

    this.emailInput = React.createRef();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    if (this.state.emailInvalid) {
      this.checkEmail(e);
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, message } = this.state;

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })

    // this.setState({
    //   name: '',
    //   email: '',
    //   message: '',
    // })
  }

  checkEmail = (e) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      this.setState({ emailInvalid: false })
    } else {
      if (!this.state.emailInvalid) {
        this.setState({ emailInvalid: true })
      }
    }
  }

  render() {
    const { name, email, emailInvalid, message } = this.state;

    return (
      <div className='contact'>
        <SectionTitle padding='60px 0 20px' color='#f8f8f8'>CONTACT</SectionTitle>
        <h2>Leave your name, email and a message and i will get back to you as soon as I can 😄.</h2>
        <form className='contact_form' onSubmit={this.handleSubmit}>
          <input
            value={name}
            type='text'
            name='name'
            placeholder='Name'
            className='contact_input_fields'
            onChange={this.handleChange}
          />
          <input
            value={email}
            type='email'
            name='email'
            ref={this.emailInput}
            onBlur={this.checkEmail}
            placeholder='Email'
            className='contact_input_fields'
            onChange={this.handleChange}
          />
          {emailInvalid && (
            <label className='error_label'>The email address you supplied is invalid.</label>
          )}
          <textarea
            value={message}
            name='message'
            placeholder='Message'
            className='contact_textarea'
            onChange={this.handleChange}
          />
          <button
            type='submit'
            className='send_button'
            disabled={name === '' || email === '' || message === ''}
          >SEND</button>
        </form>
      </div>
    );
  }
}

export default Contact;
