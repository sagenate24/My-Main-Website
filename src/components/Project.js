import React from 'react';
import { IoLogoGithub } from 'react-icons/io'
import '../styles/ProjectStyles.scss';
import '../styles/_Animations.scss';

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

  render() {
    const { datePosted, image, link, name, shortDescripion, gitHubLink, id } = this.props.blog;
    const { modalIsOpen } = this.state;

    return (
      <div className='project' name={name} id={id}>
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
            {
              id !== 'secondStep' && (
                <IoLogoGithub className='github_icon' onClick={() => this.props.openLink(gitHubLink)} />
              )
            }
          </div>
        </div>
        <div className='project_right_container'>
          <img
            src={image}
            className='project_image'
            alt='project image'
          />
        </div>
        {modalIsOpen && (
          <ProjectModal blog={this.props.blog} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

export default Project;
