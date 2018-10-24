import React, { Component } from 'react';
import Modal from 'react-modal';
import '../styles/Blog.css';

Modal.setAppElement('#root');

class BlogInfo extends Component {
  render() {
    const { blog, modalIsOpen, closeModal } = this.props;

    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          closeTimeoutMS={100}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
          className="Modal"
        >
          <div className='blogInfo'>
            <div className='blogInfo_header'>
              <h2>{blog.name}</h2>
              <span onClick={closeModal}>✕</span>
            </div>
            <div className='blogInfo_content'>
              <h3>Description</h3>
              <p className='blogInfo_desc'>{blog.description}</p>
              <h3>Technologies Used</h3>
              <p className='blogInfo_tech'>{blog.techUsed}</p>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default BlogInfo;
