import React, { Component } from 'react';
// import FadeIn from 'react-fade-in';
import '../styles/BlogList.css';

import Blog from './Blog';

class BlogList extends Component {
  render() {
    return (
      <div className='blog_list'>
        {this.props && this.props.blogs
          ?
          this.props.blogs.map((blog) => {
            return (
              // <FadeIn>
                <Blog key={blog.id} blog={blog} id={blog.id} />
              // </FadeIn>
              );
          })
          : null
        }
      </div>
    );
  }
}

export default BlogList;
