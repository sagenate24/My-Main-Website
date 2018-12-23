import React, { Component } from 'react';
import { SectionTitle } from './shared/SectionTitle'
import Blog from './Blog';
import '../styles/BlogList.css';

class BlogList extends Component {
  render() {
    const { blogs } = this.props;
    return (
      <div className='blog_list'>
      {/* <SectionTitle color='#fff'>Projects</SectionTitle> */}
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
