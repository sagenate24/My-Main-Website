import React from 'react';
import '../styles/Blog.css';

class Blog extends React.Component {
  state = {
    readMore: false,
  }

  handleStringLength(str) {
    const length = 350;
    const ending = '....';

    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else { return str; }
  }

  imageLinkToProject = (url) => {
    window.open(url, '_blank');
  }

  renderMoreDescription = () => {
    if (!this.state.readMore) {
      this.setState({ readMore: true });
    } else {
      this.setState({ readMore: false });
    }
  }

  render() {
    const { datePosted, description, image, link, name, techUsed, gitHubLink } = this.props.blog;
    const { readMore } = this.state;
    return (
      <div className='blog' id={this.props.blog.id}>
        <div className='blog_header'>
          <h1
            className={'blogh1'}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >{name}</h1>
          <p className='blog_date'>Completed: {datePosted}</p>
        </div>
        <img
          src={image}
          alt={'post'}
          className='blog_image'
          onClick={() => { this.imageLinkToProject(link) }}
        />
        <div className='blog_description'>
          {readMore
            ?
            <div>
              <p><b>Technologies Used: </b>{techUsed}</p>
              <p><b>Github Repository: </b><a href={gitHubLink}>{gitHubLink}</a></p>
              <span>{description}</span>
              <p className='read_more' onClick={this.renderMoreDescription}>Read less</p>
            </div>
            :
            <div>
              <p><b>Technologies Used: </b>{techUsed}</p>
              <p><b>Github Repository: </b><a href={gitHubLink}>{gitHubLink}</a></p>
              <span>{this.handleStringLength(description)}</span>
              <br />
              <p className='read_more' onClick={this.renderMoreDescription}>Read more</p>
            </div>
          }
          <br />
          <span>See this in action! <a href={link} target='_blank'>Link to {this.props.blog.id}</a></span>
          <br />
        </div>
      </div>
    );
  }
}

export default Blog;
