import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { IoMdOpen, IoMdClose } from 'react-icons/io';
import "../styles/carousel.min.css";
import '../styles/modal.css';


// TODO: make css animation for model open and close

class ProjectModal extends Component {
  closeModal = () => {
    document.querySelector('.modal_container').classList.add('fade_out_modal');
    this.props.closeModal();
  }
  render() {
    const { blog } = this.props;

    return (
      <div className='modal_container'>
        <div className='modal_main'>
          <Carousel
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            useKeyboardArrows={true}
          >
            {blog.images.map(image => (
              <img key={image.id} className='carousel_image' src={image.imageUrl} alt={image.alt} />
            ))}
          </Carousel>
          <div className='modal_bottom_container'>
            <div className='modal_bottom_header'>
              <h2>{blog.name}</h2>
              <span>{blog.type}.</span>
            </div>
            {/* <p>{blog.description}</p> */}
            <div className='modal_bottom_bottom_content'>
            <div className='modal_view_button'>
              <IoMdOpen className='modal_open_icon'/>
              <span>VIEW</span>
            </div>
            <IoMdClose className='modal_close_icon' onClick={this.closeModal}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectModal;
