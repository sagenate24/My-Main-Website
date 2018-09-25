import React from 'react';
import '../styles/Blog.css';
import * as Icon from '../Images/GIcon.png';

import BlogInfo from './BlogInfo';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.modal = null;
  }

  state = {
    modalIsOpen: false,
  }

  imageLinkToProject = (url) => {
    window.open(url, '_blank');
  }

  openModal = () => {
    setTimeout(() => {
      this.animateModal('open');
    }, 1);
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    setTimeout(() => {
      this.animateModal('close');
    }, 1);
    this.setState({ modalIsOpen: false });
  }

  animateModal = (status) => {
    const modal = document.getElementsByClassName('Modal');

    const animateModal = () => {
      if (status === 'open') {
        if (increment > 1) {
          clearInterval(id);
        }
        increment += 0.05;
        modal[0].style.opacity = increment;
      } else {
        if (increment < 0) {
          clearInterval(id);
        }
        increment -= 0.05;
        modal[0].style.opacity = increment;
      }
    }
    let increment = 0;
    const id = setInterval(animateModal, 1);
  }

  render() {
    const { datePosted, image, link, name, shortDescripion, gitHubLink } = this.props.blog;
    const { modalIsOpen } = this.state;
    return (
      <div className='blog' name={this.props.blog.id}>
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
                    <button className='view_btn' onClick={() => { this.imageLinkToProject(this.props.blog.links[0].url) }}>Apple Store</button>
                    <button className='view_btn_android' onClick={() => { this.imageLinkToProject(this.props.blog.links[1].url) }}>Android Store</button>
                </div>
                :<button className='view_btn' onClick={() => { this.imageLinkToProject(link) }}>VIEW</button>}
          </div>
          <div className='blog_footer'>
            <span>{datePosted}</span>
            <a href={gitHubLink} target='_blank'><img alt='Github Icon' className='github_icon' src={Icon} /></a>
          </div>
        </div>
        <div className='blog_right_container'>
          <img
            src={image}
            alt='post'
            className='blog_image'
          />
          <button className='more_btn' onClick={this.openModal}>Read More</button>
        </div>
        <div ref={(modalP) => modalP ? this.modal = modalP.children[0] : null}>
          <BlogInfo modalIsOpen={modalIsOpen} blog={this.props.blog} closeModal={this.closeModal} />
        </div>
      </div>
    );
  }
}

export default Blog;
