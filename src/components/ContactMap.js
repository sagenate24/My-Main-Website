import React, { Component} from 'react';
import Contact from './Contact';

class ContactMap extends Component {
  render() {
    return (
      <div className='contact_list'>
        {this.props && this.props.results
          ?
          this.props.results.map((contact) => {
            return <Contact key={contact.id} contact={contact} />
          })
          : null
        }
      </div>
    );
  }
}

export default ContactMap;
