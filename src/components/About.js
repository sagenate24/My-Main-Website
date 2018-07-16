import React, { Component } from 'react';
import '../styles/About.css';

class About extends Component {

  generateID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  render() {
    const { description, frameWorks, gitHubUrl, image, languages } = this.props.result;
    return (
      <div className='about'>
        <div className='me_header'>
          <h1>About Me</h1>
        </div>
        <br />
        <img
          src={image}
          alt={'post'}
          className='me_image'
        />
        <div className='me_description'>
          <h3>Background:</h3>
          <span>{description}</span>
        </div>
        <div className='me_description'>
          <h3>Languages:</h3>
          <span>{languages}</span>
        </div>
        <div className='me_description'>
          <h3>FrameWorks And Libraries: </h3>
          <ul>
            {frameWorks.map((framework) => {
              return (
                <li key={this.generateID()}>
                  {framework}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='me_description'>
          <span>GitHub: <a href={gitHubUrl}>{gitHubUrl}</a></span>
        </div>
      </div>
    );
  }
}

export default About;
