import React from 'react';
import '../styles/Bolg.css'

class Blog extends React.Component {

  render() {
    console.log(this.props)
    const { datePosted, description, image, link, name } = this.props.blog;
    return (
      <div className='blog'>
        <div className='blog_header'>
          <h1>{name}</h1>
          <p>{datePosted}</p>
        </div>
        <br />
        <img
          src={image}
          alt={'post'}
          className='blog_image'
          />
          <div className='blog_description'>
            <span>{description}</span>
            <a href={link}>Check out this web app in action!</a>
          </div>
      </div>
    );
  }
}

export default Blog;