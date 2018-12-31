import React, { Component } from 'react';
import Project from './Project';
import '../styles/ProjectStyles.scss';

class ProjectList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { blogs } = this.props;
    return (
      <div className='project_list'>
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
