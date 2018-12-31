import React, { Component } from 'react';
import { IoMdPhonePortrait, IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { NavLink, withRouter } from 'react-router-dom';
import * as pdfAndIcon from '../../Images/pdfAndIcon.png';
import * as resumePdf from '../../Images/Resume/NathanSageResume.pdf'
import '../../styles/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className='footer_container'>
        <div className='footer_left'>
          <h2>Nathan Sage</h2>
          <p>Front End Developer.</p>
          <img
            className='footer_resume_image'
            onClick={() => this.props.openLink(resumePdf)}
            src={pdfAndIcon}
            alt='resume pdf and icon' />
          <p className='footer_resume_text'>Nathans Resume (PDF)</p>
        </div>
        <div className='footer_right'>
          <p className='footer_outro_text'>As a developer, I have a passion for creating new and exciting experiences.<br /> Lets get together!</p>
          <div className='footer_right_body'>
            <div className='footer_rb_content'>
              <p>Let's Connect</p>
              <a onClick={() => this.props.openLink('tel:1-360-349-6448')}>+1 (360) 349-6448</a>
              <a onClick={() => this.props.openLink('tel:1-360-349-6448')}>sagenate24@gmail.com</a>
            </div>
            <div className='footer_rb_content'>
              <p>Recent Projects</p>
              <a href='http://secondstep.org' rel="noopener noreferrer" target='_blank'>Second Step</a>
              <a href='https://itunes.apple.com/us/app/flashcards-study-more/id1436666696?ls=1&mt=8' rel="noopener noreferrer" target='_blank'>FlashCards</a>
              <a href='http://wouldyourathergame.s3-website.us-east-2.amazonaws.com/#/' rel="noopener noreferrer" target='_blank'>Would You Rather</a>
              <a href='http://www.myreadswebsite.com1.s3-us-west-2.amazonaws.com/index.html#/' rel="noopener noreferrer" target='_blank'>My Reads</a>
              <a href='http://jamming.nathansageprojects.com.s3-website.us-east-2.amazonaws.com/#/' rel="noopener noreferrer" target='_blank'>Jamming</a>
              <a href='http://devour.nathansageprojects.com.s3-website.us-east-2.amazonaws.com/' rel="noopener noreferrer" target='_blank'>devour</a>
            </div>
            <div className='footer_rb_content'>
              <p>Quick Links</p>
              <NavLink to='/' exact className='quick_links'>Projects</NavLink>
              <NavLink to='/about' exact className='quick_links'>About Me</NavLink>
              <NavLink to='/contact' exact className='quick_links'>Contact</NavLink>
            </div>
            <div className='footer_rb_content'>
              <div className='footer_rb_content_links'>
                <IoLogoLinkedin className='footer_icon' onClick={() => this.props.openLink('https://www.linkedin.com/in/nathan-sage-689296163/')} />
                <IoMdMail className='footer_icon' onClick={() => this.props.openLink('mailto:sagenate24@gmail.com')} />
                <IoLogoGithub className='footer_icon' onClick={() => this.props.openLink('https://github.com/sagenate24')} />
                <IoMdPhonePortrait className='footer_icon' onClick={() => this.props.openLink('tel:1-360-349-6448')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default withRouter(Footer);
