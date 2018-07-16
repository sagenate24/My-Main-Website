import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  render() {
    const { email, gmailIcon, linkedinImage, linkedinURL, pIcon, pNumber } = this.props.contact;
    return (
      <div className='contact'>
        <div className='contact_container'>
          <img
            src={linkedinImage}
            className='icon'
            alt='linkdin'
          />
          <div className='contact_description'>
            <h4>Linkedin:</h4>
            <a href={linkedinURL} target='_blank'>Link to my profile!</a>
          </div>
        </div>
        <div className='contact_container'>
          <img
            src={pIcon}
            className='icon'
            alt='mobile'
          />
          <div className='contact_description'>
            <h4>Mobile Phone:</h4>
            <a href={`tel:1-360-349-6448`}>{pNumber}</a>
          </div>
        </div>
        <div className='contact_container'>
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
}

export default Contact;
