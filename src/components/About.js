import React, { Component } from 'react';
import { getLanguagesInfo } from '../utils/LangData';
import '../styles/About.css';

class About extends Component {
  state = {
    ready: false,
    langs: [],
  }

  componentDidMount() {
    getLanguagesInfo().then((results) => {
      this.setState({ langs: results });
    }).then(() => {
      this.setState({ ready: true });
    })
  }

  generateID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  render() {
    const { shortDesk, description, frameWorks, gitHubUrl, image, languages } = this.props.result;
    const { langs, ready } = this.state;
    if (ready) {
      return (
        <div className='about'>
          <div className='about_image'>
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
