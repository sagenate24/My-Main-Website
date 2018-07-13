import React, { Component } from 'react';
import About from './About';

class AboutList extends Component {
  render() {
    return (
      <div className='about_list'>
        {this.props && this.props.meData
          ?
          this.props.meData.map((result) => {
            return <About key={result.id} result={result} />
          })
          : null
        }
      </div>
    );
  }
}

export default AboutList;