import React, { Component } from 'react';
import '../styles/BlogList.css'

import Blog from './Blog';

class BlogList extends Component {
  render() {
    return (
      <div className='blog_list'>
        {this.props && this.props.blogs
          ?
          this.props.blogs.map((blog) => {
            return <Blog key={blog.id} blog={blog} />
          })
          : null
        }
      </div>
    )
  }
}

export default BlogList;