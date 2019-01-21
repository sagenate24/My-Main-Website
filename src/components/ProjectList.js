import React, { Component } from 'react';
import Project from './Project';
import '../styles/ProjectStyles.scss';
import { scrollToElement } from '../utils/helpers';

class ProjectList extends Component {
  state = {
    imagesLoaded: {
      'secondStep': false,
      'flashCards': false,
      'wouldYouRather': false,
      'myReads': false,
      'jamming': false,
      'devour': false
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleImageLoad = (id) => {
    const imagesLoaded = { ...this.state.imagesLoaded }
    imagesLoaded[id] = true;

    if (window.location.hash.length) {
      const projectId = window.location.hash.replace('#', '');

      setTimeout(() => {
        if (imagesLoaded['devour']) {
          scrollToElement(projectId, -80);
        }
      }, 450)
    }

    this.setState({ imagesLoaded })
  }

  render() {
    const { blogs, openLink } = this.props;
    return (
      <div className='project_list' name='project_list'>
        {this.props && this.props.blogs
          ?
          blogs.map((blog) => {
            return (
              <Project
                key={blog.id}
                id={blog.id}
                blog={blog}
                openLink={(href) => openLink(href)}
                handleImageLoad={(id) => this.handleImageLoad(id)}
              />
            );
          })
          : null
        }
      </div>
    );
  }
}

export default ProjectList;
