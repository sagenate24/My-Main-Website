import React from 'react';
import '../styles/Blog.css';

class Blog extends React.Component {
  state = {
    readMore: false,
    dropDownProject: false,
    btnClassName: 'drop_down_project',
    h1ClassName: 'h1_not_active'
  }

  handleStringLength(str, str2) {
    const length = 350;
    const ending = '....';

    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else { return str; }
  }

  imageLinkToProject = (url) => {
    window.open(url, '_blank');
  }

  handleDropDownProject = () => {
    if (!this.state.dropDownProject) {
      this.setState({ dropDownProject: true });
    } else {
      this.setState({ dropDownProject: false });
    }
  }

  renderMoreDescription = () => {
    if (!this.state.readMore) {
      this.setState({ readMore: true });
    } else {
      this.setState({ readMore: false });
    }
  }

  handleMouseEnter = () => {
    this.setState({ btnClassName: 'drop_down_project_with_h1' })
  }

  handleMouseLeave = () => {
    this.setState({ btnClassName: 'drop_down_project' });
  }

  render() {
    const { datePosted, description, image, link, name, techUsed, id, gitHubLink } = this.props.blog;
    const { dropDownProject, h1ClassName, btnClassName, readMore } = this.state;
    return (
      <div className='blog'>
        {dropDownProject
          ?
          <div>
            <div className='blog_header'>
              <h1
                className={h1ClassName}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onClick={() => {
                  this.setState({ h1ClassName: 'h1_not_active' })
                  this.handleDropDownProject()
                }}
              >{name}<button
                className={btnClassName}
                onClick={this.handleDropDownProject}
              ></button></h1>
              <p className='blog_date'>Completed: {datePosted}</p>
            </div>
            <div>
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
                <span>See this in action! <a href={link} target='_blank'>Link to {id}</a></span>
                <br />
              </div>
            </div>
          </div>
          :
          <div className='blog_header'>
            <h1
              className={h1ClassName}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              onClick={() => {
                this.setState({ h1ClassName: 'h1_active' })
                this.handleDropDownProject()
              }}
            >{name}<button
              className={btnClassName}
              onClick={this.handleDropDownProject}
            ></button></h1>
            <p className='blog_date'>Completed: {datePosted}</p>
          </div>
        }
      </div>
    );
  }
}

export default Blog;
