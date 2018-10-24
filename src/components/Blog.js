import React from 'react';
import * as gitImg from '../Images/github.png';
import '../styles/Blog.css';

import BlogInfo from './BlogInfo';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.modalOpacity = 0;
  }
  state = {
    modalIsOpen: false,
    screenWidth: 0,
    
  }

  componentDidMount() {
    this.updateScreenWidth();
    window.addEventListener('resize', this.updateScreenWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateScreenWidth);
  }

  updateScreenWidth = () => {
    this.setState({ screenWidth: window.innerWidth });
  }

  imageLinkToProject = (url) => {
    window.open(url, '_blank');
  }

  openModal = () => {
    const app = document.querySelector('.blog_list');
    app.style.overflowY = 'hidden';
    setTimeout(() => {
      this.animateModal('open');
    }, 1);
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    setTimeout(() => {
      this.animateModal('close');
    }, 1);
    setTimeout(() => {
      this.setState({ modalIsOpen: false });
    }, 300);
  }

  animateModal = (status) => {
    const modal = document.getElementsByClassName('Modal');

    const animateModal = () => {
      if (status === 'open') {
        if (this.modalOpacity < 1) {
          this.modalOpacity += 0.2;
          modal[0].style.opacity = this.modalOpacity;
          window.requestAnimationFrame(animateModal);
        }
      } else {
        if (this.modalOpacity > 0) {
          this.modalOpacity -= 0.2;
          modal[0].style.opacity = this.modalOpacity;
          window.requestAnimationFrame(animateModal);
        }
      }
    }
    // let increment = 0;
    // const id = setInterval(animateModal, 1);
    window.requestAnimationFrame(animateModal);
  }

  render() {
    const { datePosted, image, smallImage, link, name, shortDescripion, gitHubLink, id } = this.props.blog;
    const { modalIsOpen, screenWidth } = this.state;

    return (
      <div className='blog' name={id}>
        <div className='blog_left_container'>
          <h2
            className='blogh1'
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >{name}</h2>
          <p className='blog_short_desc'>{shortDescripion}</p>
          <div className='btns_container'>
            {this.props.blog && this.props.blog.links
              ? <div>
                <button className='view_btn' onClick={() => { this.imageLinkToProject(this.props.blog.links[0].url) }}>App Store</button>
                <button className='view_btn_android' onClick={() => { this.imageLinkToProject(this.props.blog.links[1].url) }}>Google Play</button>
              </div>
              : <button className='view_btn' onClick={() => { this.imageLinkToProject(link) }}>VIEW</button>}
          </div>
          <div className='blog_footer'>
            <span className='date_posted'>{datePosted}</span>
            <a href={gitHubLink} target='_blank'><img alt='Github Icon' className='github_icon' src={gitImg} /></a>
          </div>
        </div>
        <div className='blog_right_container'>
          <img src={screenWidth <= 609 ? smallImage : image} alt='project_image' className='blog_image'/>
          <button className='more_btn' onClick={this.openModal}>Read More</button>
        </div>
          <BlogInfo modalIsOpen={modalIsOpen} blog={this.props.blog} closeModal={this.closeModal} />
      </div>
    );
  }
}

export default Blog;
