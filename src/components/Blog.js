import React from 'react';
import { IoLogoGithub } from 'react-icons/io'
import '../styles/Blog.css';

import ProjectModal from './projectModal';

class Blog extends React.Component {
  constructor(props) {
    super(props);

  }
  state = {
    modalIsOpen: false,
  }

  imageLinkToProject = (url) => {
    window.open(url, '_blank');
  }

  openModal = () => {
    const body = document.body;
    body.style.overflow = 'hidden';

    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    const body = document.body;
    body.style.overflow = 'auto';

    setTimeout(() => {
      this.setState({ modalIsOpen: false });
    }, 300);
  }

  animateModal = (status) => {
    const modal = document.querySelector('.Modal');

    if (status === 'open') {
      modal.classList.remove('fadeOut');
      modal.classList.add('fadein');
    } else {
      modal.classList.remove('fadein');
      modal.classList.add('fadeOut');
    }
  }

  render() {
    const { datePosted, image, link, name, shortDescripion, gitHubLink, id } = this.props.blog;
    const { modalIsOpen } = this.state;

    return (
      <div className='blog' name={id}>
        <div className='blog_left_container'>
          <h1>{name}</h1>
          <p className='blog_short_desc'>{shortDescripion}</p>
          <p>{}</p>
          <div className='btns_container'>
            {this.props.blog && this.props.blog.links
              ? <div>
                <button className='view_btn' onClick={() => { this.imageLinkToProject(this.props.blog.links[0].url) }}>App Store</button>
                <button className='view_btn_android' onClick={() => { this.imageLinkToProject(this.props.blog.links[1].url) }}>Google Play</button>
                <button className='learn_more_button' onClick={this.openModal}>Learn More</button>
              </div>
              : <div>
                <button className='view_btn' onClick={() => { this.imageLinkToProject(link) }}>View</button>
                <button className='learn_more_button' onClick={this.openModal}>Learn More</button>
              </div>}
          </div>
          <div className='blog_footer'>
            <span>{datePosted}</span>
            <IoLogoGithub className='github_icon' onClick={() => this.props.openLink(gitHubLink)} />
          </div>
        </div>
        <div className='blog_right_container'>
          <img 
            src={image}
            className='project_image'
            alt='project_image'
            />
        </div>
        {modalIsOpen && (
          <ProjectModal blog={this.props.blog} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default Blog;
