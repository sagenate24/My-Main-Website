import React, { Component } from 'react';
import '../styles/About.css';

class About extends Component {
  constructor(props) {
    super(props);

    this.parallax = React.createRef();
  }

  componentDidMount() {
      this.loadImage();
  }

  loadImage = () => {
    const image = new Image();
    const node = this.parallax.current;
    image.onload = (() => {
      node.style.filter = 'blur(0)'
    });
    image.src = this.props.aboutMe.image;
  }

  render() {
    if (this.props && this.props.aboutMe) {
      const { shortDesk, description, frameWorks, gitHubUrl } = this.props.aboutMe;
      const { langs } = this.props;

      return (
        <div className='about'>
          <div className='about_image' ref={this.parallax}>
            <div className='about_image_text'>
              <h2>NATHAN SAGE</h2>
              <span>{shortDesk}</span>
            </div>
          </div>
          <button className='about_githubLink' onClick={() => window.open(gitHubUrl, '_blank')}>VIEW GITHUB</button>
          <div className='about_content'>
            <span>{description}</span>
          </div>
          <div className='lang_and_stuff'>
            <h2>Languages</h2>
            <div className='about_lang'>
              {langs.map(item => (
                <div key={item.title} className='lang_container'>
                  <img alt='lang_icons' className='about_icons' src={item.img} />
                  <p className='about_icon_desc'>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='about_frameworks'>
            <h2>Frameworks and Libraries</h2>
            <div className='about_frame'>
              {frameWorks.map((framework) => {
                return (
                  <div className='frames' key={framework.title}>
                    <h4 className='frame_title'>{framework.title}</h4>
                    <p className='frame_name'>{framework.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default About;
