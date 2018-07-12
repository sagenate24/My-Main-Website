import React, { Component } from 'react';
import Blog from './Blog';
import '../styles/BlogList.css'

class BlogList extends Component {
  render() {
    return (
      <div className='blog_list'>
        {this.props && this.props.blogs
        ?
          this.props.blogs.map((blog) => {
            return <Blog key={blog.id} blog={blog}/>
          })
        : null
        }
      </div>
    )
  }
}

export default BlogList;