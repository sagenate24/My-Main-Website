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
          <div className='contact_container'>
            <ion-icon name="logo-linkedin" onClick={() => this.handleClick(linkedinURL)}></ion-icon>
            <h3>LinkedIn</h3>
            <a href={linkedinURL}>{linkedinURL}</a>
          </div>
          <div className='contact_container'>
            <ion-icon name="phone-portrait" onClick={() => this.handleClick('tel:1-360-349-6448')}></ion-icon>
            <h3>Phone</h3>
            <a href={`tel:1-360-349-6448`}>(360) 349-6448</a>
          </div>
          <div className='contact_container'>
            <ion-icon name="mail" onClick={() => this.handleClick(`mailto:${email}`)}></ion-icon>
            <h3>Gmail</h3>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Contact;
