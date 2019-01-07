import React, { Component } from 'react';
import Loader from './shared/loader'
import ContactModal from './ContactModal'
import '../styles/Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      loading: false,
      modalIsOpen: false,
      emailInvalid: false
    }

    this.button = React.createRef();
    this.emailInput = React.createRef();
  }

  componentDidMount() {
    document.querySelector('.nav_container').style.position = 'fixed';
    document.querySelector('.nav_container').style.background = '#1D252E';
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
    const button = this.button.current;

    button.classList.remove('show_button');
    button.classList.add('remove_button');

    this.setState({ loading: true });

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })

      const status = await response.json();

      if (status === 'success') {
        document.querySelector('.loader').classList.replace('loader', 'checkmark');
        setTimeout(() => { this.openModal() }, 500);
      } else if (status === 'error') {
        alert('Sorry, your message did not go through ☹️. Please try again!')
        this.resetElements(true)
      }
    }

    catch (err) {
      alert('Sorry, your message did not go through ☹️. Please try again!')
      this.resetElements(true)
      console.log(err);
    }
  }

  checkEmail = (e) => {
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      this.setState({ emailInvalid: false })
    } else {
      if (!this.state.emailInvalid) {
        this.setState({ emailInvalid: true })
      }
    }
  }

  openModal = () => {
    const body = document.body;
    body.style.overflow = 'hidden';

    this.setState({ modalIsOpen: true });

    setTimeout(() => {
      this.closeModal();
    }, 2500)
  }

  closeModal = () => {
    const body = document.body;
    body.style.overflow = 'auto';
    this.resetElements();
  }

  resetElements = (err) => {
    this.button.current.classList.remove('remove_button');
    this.button.current.classList.add('show_button');
    if (!err) document.querySelector('.checkmark').classList.replace('checkmark', 'loader')

    this.setState({
      name: '',
      email: '',
      message: '',
      loading: false,
      modalIsOpen: false,
    })
  }

  render() {
    const { name, email, emailInvalid, message, modalIsOpen, loading } = this.state;

    return (
      <div className='contact'>
        <div className='contact_title_container'>
          <h1 className='contact_title' >Contact Me</h1>
          <div className='contact_title_underline' />
        </div>
        <h2>Leave your name, email and a message and I will get back to you as soon as I can <span role='img' aria-label='happy emoji'>😄</span></h2>
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
            ref={this.button}
            disabled={name === '' || email === '' || message === '' || loading === true}
          >Send</button>
          <Loader loading={this.state.loading} />
        </form>
        {modalIsOpen && (
          <ContactModal />
        )}
      </div>
    );
  }
}

export default Contact;