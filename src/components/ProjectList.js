import React, { Component } from 'react';
import Project from './Project';
import '../styles/ProjectStyles.scss';
import { scrollToElement } from '../utils/scroller';

class ProjectList extends Component {
  componentDidMount() {
    if (window.location.hash.length) {
      const projectId = window.location.hash.replace('#', '');

      setTimeout(() => {
        scrollToElement(projectId, -80);
      }, 300)
    }
  }

  render() {
    const { blogs } = this.props;
    return (
      <div className='project_list' name='project_list'>
        {this.props && this.props.blogs
          ?
          blogs.map((blog) => {
            return (
              <Project key={blog.id} blog={blog} id={blog.id} />
            );
          })
          : null
        }
      </div>
    );
  }
}

export default ProjectList;
