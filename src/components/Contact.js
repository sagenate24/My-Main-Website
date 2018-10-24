import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  handleClick = (url) => {
    window.open(url, '_blank');
  }

  render() {
    if (this.props && this.props.contact) {
      const { email, gmailIcon, linkedinImage, linkedinURL, pIcon } = this.props.contact;

      return (
        <div className='contact'>
          <div className='contact_container' onClick={() => this.handleClick(linkedinURL)}>
            <img
              src={linkedinImage}
              className='icon'
              alt='linkdin'
            />
            <div className='contact_description'>
              <h4>Linkedin:</h4>
              <a href={linkedinURL} target='_blank'>Link to profile</a>
            </div>
          </div>
          <div className='contact_container' onClick={() => this.handleClick('tel:1-360-349-6448')}>
            <img
              src={pIcon}
              className='icon'
              alt='mobile'
            />
            <div className='contact_description'>
              <h4>Mobile Phone:</h4>
              <a href={`tel:1-360-349-6448`}>(360) 349-6448</a>
            </div>
          </div>
          <div className='contact_container' onClick={() => this.handleClick(`mailto:${email}`)}>
            <img
              src={gmailIcon}
              className='icon'
              alt='email'
            />
            <div className='contact_description'>
              <h4>Gmail:</h4>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Contact;
