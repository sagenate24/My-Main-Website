import React from 'react';
import { IoMdPhonePortrait, IoMdMail, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import * as pdfAndIcon from '../../Images/pdfAndIcon.png';
import * as resumePdf from '../../Images/Resume/NathanSageResume.pdf'
import '../../styles/Footer.scss';

export const Footer = props => (
  <div className='footer_container'>
    <div className='footer_left'>
      <h2>Nathan Sage</h2>
      <p>Front End Developer</p>
      <img
        className='footer_resume_image'
        onClick={() => props.openLink(resumePdf)}
        src={pdfAndIcon}
        alt='resume pdf and icon' />
      <p onClick={() => props.openLink(resumePdf)} className='footer_resume_text'>Nathan's Resume (PDF)</p>
    </div>
    <div className='footer_right'>
      <p className='footer_outro_text'>As a developer, I have a passion for creating new and exciting experiences.<br /> Let's get together!</p>
      <div className='footer_right_body'>
        <div className='footer_rb_content'>
          <p>Let's Connect</p>
          <a href='tel:1-360-349-6448'>+1 (360) 349-6448</a>
          <a href='mailto:sagenate24@gmail.com'>sagenate24@gmail.com</a>
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
          <NavLink onClick={() => window.scrollTo(0, 0)} to='/' exact className='quick_links'>Projects</NavLink>
          <NavLink onClick={() => window.scrollTo(0, 0)} to='/about' exact className='quick_links'>About Me</NavLink>
          <NavLink onClick={() => window.scrollTo(0, 0)} to='/contact' exact className='quick_links'>Contact</NavLink>
        </div>
        <div className='footer_rb_content'>
          <div className='footer_rb_content_links'>
            <IoLogoLinkedin className='footer_icon' onClick={() => props.openLink('https://www.linkedin.com/in/nathan-sage-689296163/')} />
            <NavLink onClick={() => window.scrollTo(0, 0)} to='/contact' aria-label='Go To Contact Page' exact>
              <IoMdMail className='footer_icon' />
            </NavLink>
            <IoLogoGithub className='footer_icon' onClick={() => props.openLink('https://github.com/sagenate24')} />
            <a aria-label='Call My Cell' href='tel:1-360-349-6448'>
              <IoMdPhonePortrait className='footer_icon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
