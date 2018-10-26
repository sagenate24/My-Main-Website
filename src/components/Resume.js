import React, { Component } from 'react';
import * as resumePdf from '../Images/Resume/NathanSageResume.pdf'
import { generateConfettiAnimation } from '../utils/confetti';
import '../styles/Resume.css';

class Resume extends Component {
  constructor() {
    super();
    this.icon = React.createRef();
  }

  componentDidMount() {
    const icon = this.icon.current;
    icon.classList.add('logo-animation');
    setTimeout(() => {
      icon.classList.remove('logo-animation');
    }, 1550);
  }

  handleGoToCertifricate = (url) => {
    window.open(url, '_blank');
  }

  animateIcon = () => {
    const app = document.querySelector('.resume');
    generateConfettiAnimation(app);
  
  }

  render() {
    const { education } = this.props;

    return (
      <div className='resume'>
        <div className='download-container'>
          <a onClick={this.animateIcon} href={resumePdf} download='Nathans Resume.pdf'><ion-icon ref={this.icon} name='download'></ion-icon></a>
          <h1>Download Resume in PDF Form</h1>
        </div>
        <div className='item'>
          <div className='item-header'>
            <ion-icon name='book'></ion-icon>
            <h2>Education</h2>
          </div>
          <div className='item-body'>
            <div className='education-container'>
              {
                education.map(item => (
                  <div className='eduaction-item' key={item.name}>
                    <div className='education-info'>
                      <img src={item.imageUrl} alt='educ-logo' />
                      <h3>{item.name}</h3>
                      <p>{item.program}</p>
                      <p>{item.completed}</p>
                    </div>
                    {
                      item.certifricate &&
                      <div
                        className='certifricate-btn'
                        onClick={() => this.handleGoToCertifricate(item.certifricate)}
                      >
                        Certifricate
                        </div>
                    }
                    {
                      item.link &&
                      <div
                        className='spscc-link-btn'
                        onClick={() => this.handleGoToCertifricate(item.link)}
                      >
                        My School
                    </div>
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
