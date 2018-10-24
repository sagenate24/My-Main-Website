import React, { Component } from 'react';
import Blog from './Blog';

class BlogList extends Component {
  render() {
    const { blogs } = this.props;
    return (
      <div className='blog_list'>
        {this.props && this.props.blogs
          ?
          blogs.map((blog) => {
            return (
                <Blog key={blog.id} blog={blog} id={blog.id} />
              );
          })
          : null
        }
      </div>
    );
  }
}

export default BlogList;
