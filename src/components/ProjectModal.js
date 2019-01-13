import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { IoMdOpen, IoMdClose } from 'react-icons/io';
import "../styles/carousel.min.css";
import '../styles/Modal.scss';

class ProjectModal extends Component {
  state = {
    imagesLoaded: {},
    imagesAreLoaded: false
  }

  closeModal = () => {
    document.querySelector('.project_modal').classList.add('fade_out_modal');
    this.props.closeModal();
  }

  openLink = (url) => {
    window.open(url, '_blank');
  }

  handleImageLoad = (id) => {
    const imagesLoaded = { ...this.state.imagesLoaded }
    imagesLoaded[id] = true;

    if (Object.keys(imagesLoaded).length === this.props.blog.images.length) {
      const lazyImages = [].slice.call(document.querySelectorAll(".lazy_image"));
      const image = lazyImages[1];

      let downloadingImage = new Image();
      downloadingImage.onload = () => {
        if (!this.state.imagesAreLoaded && image.src !== image.dataset.src) {
          lazyImages.forEach((entry) => {
            entry.src = entry.dataset.src;
            entry.classList.remove('lazy_image');
          });
          this.setState({ imagesAreLoaded: true });
        }
      };
      if (image) {
        downloadingImage.src = image.dataset.src;
      }
    }

    this.setState({ imagesLoaded });
  }

  render() {
    const { blog } = this.props;

    return (
      <div className='project_modal'>
        <div className='modal_container'>
          <Carousel
            infiniteLoop={true}
            showArrows={this.state.imagesAreLoaded}
            showStatus={false}
            showThumbs={false}
            useKeyboardArrows={this.state.imagesAreLoaded}
            showIndicators={false}
          >
            {blog.images.map(image => (
              <img
                onLoad={() => this.handleImageLoad(image.id)}
                className={image.placeholderImage && 'lazy_image'}
                key={image.id}
                data-src={image.imageUrl}
                src={image.placeholderImage ? image.placeholderImage : image.imageUrl}
                alt={image.alt}
              />
            ))}
          </Carousel>
          <div className='modal_footer'>
            <div className='modal_footer_header'>
              <h2>{blog.name}</h2>
              <span>{blog.type}.</span>
            </div>
            <p>{blog.description}</p>
            <div className='modal_footer_bottom'>
              {blog.links ? (
                <div className='modal_mobile_buttons'>
                  <div className='modal_view_button apple_button' onClick={() => { this.openLink(blog.links[0].url) }}>
                    <span>App Store</span>
                  </div>
                  <div className='modal_view_button google_button' onClick={() => { this.openLink(blog.links[0].url) }}>
                    <span>Play Store</span>
                  </div>
                </div>
              ) : (
                  <div className='modal_view_button modal_regular_button' onClick={() => { this.openLink(blog.link) }}>
                    <IoMdOpen className='modal_open_icon' />
                    <span>VIEW</span>
                  </div>
                )}
              <IoMdClose className='modal_close_icon' onClick={this.closeModal} />
            </div>
          </div>
        </div>
        <div className='modal_overlay' onClick={this.closeModal} />
      </div>
    )
  }
}

export default ProjectModal;