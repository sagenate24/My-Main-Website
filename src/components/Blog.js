import React from 'react';
import '../styles/Blog.css';

class Blog extends React.Component {
  state = {
    dropDown: false
  }

  handleStringLength(str) {
    const length = 350;
    const ending = '...';

    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else { return str; }
  }

  imageLinkToProject = (url) => {
    window.open(url, '_blank');
  }

  renderMoreDescription = () => {
    if (!this.state.dropDown) {
      this.setState({ dropDown: true });
    } else {
      this.setState({ dropDown: false });
    }
  }

  render() {
    const { datePosted, description, image, link, name, techUsed, id } = this.props.blog;
    return (
      <div className='blog'>
        <div className='blog_header'>
          <h1 onClick={() => this.imageLinkToProject(link)}>{name}</h1>
          <p className='blog_date'>Completed: {datePosted}</p>
        </div>
        <br />
        <img
          src={image}
          alt={'post'}
          className='blog_image'
          onClick={() => { this.imageLinkToProject(link) }}
        />
        <div className='blog_description'>
          {this.state.dropDown
            ?
            <div>
              <span>{description}</span>
              <br />
              <p>Technologies Used: {techUsed}</p>
              <p className='read_more' onClick={this.renderMoreDescription}>Read less</p>
            </div>
            :
            <div>
              <span>{this.handleStringLength(description)}</span>
              <br />
              <p className='read_more' onClick={this.renderMoreDescription}>Read more</p>
            </div>
          }
          <br />
          <span>See this in action! <a href={link} target='_blank'>Link to {id}</a></span>
        </div>
      </div>
    );
  }
}

export default Blog;