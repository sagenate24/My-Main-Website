import React, { Component } from 'react';
import * as party from '../Images/partypopper.png'
import '../styles/ContactModal.css'

class ContactModal extends Component {
  state = {
    modalClass: 'contact_modal',
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        modalClass: 'close_contact_modal'
      })
    }, 2000)
  }

  componentWillUnmount() {
    this.setState({
      modalClass: 'contact_modal'
    })
  }

  render() {
    return (
      <div className={this.state.modalClass}>
        <div className='contact_modal_main'>
          <div>
            <h2>Looking forward to speaking with you! <span role='img' aria-label='happy and thumb emoji'>👍😁</span></h2>
            <div className='party_popper_container'>
              <img className='party_popper' src={party} alt='party popper' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactModal;
