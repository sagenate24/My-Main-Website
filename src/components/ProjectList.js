import React, { Component } from 'react';
import Project from './Project';
import '../styles/ProjectStyles.scss';
import { scrollToElement } from '../utils/scroller';

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

      if (imagesLoaded[projectId] === true) {
        scrollToElement(projectId, -80);
      }
    }

    this.setState({ imagesLoaded })
  }

  render() {
    const { blogs } = this.props;
    return (
      <div className='project_list' name='project_list'>
        {this.props && this.props.blogs
          ?
          blogs.map((blog) => {
            return (
              <Project handleImageLoad={(id) => this.handleImageLoad(id)} key={blog.id} blog={blog} id={blog.id} />
            );
          })
          : null
        }
      </div>
    );
  }
}

export default ProjectList;
