import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { IoMdOpen, IoMdClose } from 'react-icons/io';
import "../styles/carousel.min.css";
<<<<<<< HEAD
import '../styles/Modal.scss';

class ProjectModal extends Component {
  closeModal = () => {
    document.querySelector('.modal_overlay').classList.add('fade_out_modal');
    this.props.closeModal();
  }

=======
import '../styles/modal.css';


// TODO: make css animation for model open and close

class ProjectModal extends Component {
  closeModal = () => {
    document.querySelector('.modal_container').classList.add('fade_out_modal');
    this.props.closeModal();
  }
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282
  render() {
    const { blog } = this.props;

    return (
<<<<<<< HEAD
      <div className='modal_overlay'>
        <div className='modal_container'>
=======
      <div className='modal_container'>
        <div className='modal_main'>
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282
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
<<<<<<< HEAD
          <div className='modal_footer'>
            <div className='modal_footer_header'>
              <h2>{blog.name}</h2>
              <span>{blog.type}.</span>
            </div>
            <p>{blog.description}</p>
            <div className='modal_footer_bottom'>
              {blog.links ? (
                <div className='modal_mobile_buttons'>
                  <div className='modal_view_button apple_button' onClick={() => { }}>
                    <span>App Store</span>
                  </div>
                  <div className='modal_view_button google_button' onClick={() => { }}>
                    <span>Play Store</span>
                  </div>
                </div>
              ) : (
                  <div className='modal_view_button modal_regular_button' onClick={() => { }}>
                    <IoMdOpen className='modal_open_icon' />
                    <span>VIEW</span>
                  </div>
                )}
              <IoMdClose className='modal_close_icon' onClick={this.closeModal} />
=======
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
>>>>>>> bd3285eaf8a64d2a1f9e5f4eba3d1c5320b81282
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectModal;
