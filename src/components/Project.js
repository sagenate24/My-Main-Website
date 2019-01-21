import React from 'react';
import { IoLogoGithub } from 'react-icons/io'
import '../styles/ProjectStyles.scss';
import '../styles/_Animations.scss';
import { Element } from 'react-scroll'

import ProjectModal from './ProjectModal';

class Project extends React.Component {
  state = {
    modalIsOpen: false,
  }

  openModal = () => {
    const body = document.body;
    const html = document.querySelector('html');
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';

    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    const body = document.body;
    const html = document.querySelector('html');
    body.style.overflow = 'auto';
    html.style.overflow = 'auto';

    setTimeout(() => {
      this.setState({ modalIsOpen: false });
    }, 300);
  }

  render() {
    const { blog, openLink, handleImageLoad } = this.props;
    const { modalIsOpen } = this.state;

    return (
      <Element className='project' name={blog.id} id={blog.id}>
        <div className='project_left_container'>
          <h1>{blog.name}</h1>
          <p>{blog.shortDescripion}</p>
          {this.props.blog && this.props.blog.links
            ? <div className='btns_container'>
              <button className='view_btn' onClick={() => { openLink(blog.links[0].url) }}>App Store</button>
              <button className='view_btn_android' onClick={() => { openLink(blog.links[1].url) }}>Google Play</button>
              <button className='learn_more_btn' onClick={this.openModal}>Learn More</button>
            </div>
            : <div className='btns_container'>
              <button className='view_btn' onClick={() => { openLink(blog.link) }}>View</button>
              <button className='learn_more_btn' onClick={this.openModal}>Learn More</button>
            </div>}
          <div className='project_footer'>
            <span>{blog.datePosted}</span>
            {blog.id !== 'secondStep' && (
              <IoLogoGithub className='github_icon' onClick={() => openLink(blog.gitHubLink)} />
            )}
          </div>
        </div>
        <div className='project_right_container'>
          <img
            src={window.innerWidth < 600
              ? blog.smallImage
              : blog.image}
            title={blog.name}
            onClick={this.openModal}
            className='project_image'
            onLoad={() => handleImageLoad(blog.id)}
            alt={blog.alt}
          />
        </div>
        {modalIsOpen && (
          <ProjectModal
            blog={blog}
            closeModal={this.closeModal}
            openLink={(href) => openLink(href)}
          />
        )}
      </Element>
    );
  }
}

export default Project;
