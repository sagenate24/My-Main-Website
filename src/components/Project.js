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

  imageLinkToProject = (url) => {
    window.open(url, '_blank');
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
    const { alt, datePosted, image, smallImage, link, name, shortDescripion, gitHubLink, id } = this.props.blog;
    const { modalIsOpen } = this.state;

    return (
      <Element className='project' name={id} id={id}>
        <div className='project_left_container'>
          <h1>{name}</h1>
          <p>{shortDescripion}</p>
          {this.props.blog && this.props.blog.links
            ? <div className='btns_container'>
              <button className='view_btn' onClick={() => { this.imageLinkToProject(this.props.blog.links[0].url) }}>App Store</button>
              <button className='view_btn_android' onClick={() => { this.imageLinkToProject(this.props.blog.links[1].url) }}>Google Play</button>
              <button className='learn_more_btn' onClick={this.openModal}>Learn More</button>
            </div>
            : <div className='btns_container'>
              <button className='view_btn' onClick={() => { this.imageLinkToProject(link) }}>View</button>
              <button className='learn_more_btn' onClick={this.openModal}>Learn More</button>
            </div>}
          <div className='project_footer'>
            <span>{datePosted}</span>
            {id !== 'secondStep' && (
              <IoLogoGithub className='github_icon' onClick={() => this.imageLinkToProject(gitHubLink)} />
            )}
          </div>
        </div>
        <div className='project_right_container'>
          {window.innerWidth < 600 ? (
            <img
              src={smallImage}
              title={name}
              onClick={this.openModal}
              className='project_image'
              onLoad={() => this.props.handleImageLoad(id)}
              alt={alt}
            />
          ) : (
              <img
                src={image}
                title={name}
                onClick={this.openModal}
                className='project_image'
                onLoad={() => this.props.handleImageLoad(id)}
                alt={alt}
              />
            )}

        </div>
        {modalIsOpen && (
          <ProjectModal
            blog={this.props.blog}
            closeModal={this.closeModal}
          />
        )}
      </Element>
    );
  }
}

export default Project;