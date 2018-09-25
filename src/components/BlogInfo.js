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
            </div>
            <div className='blogInfo_content'>
              <p className='blogInfo_desc'>{blog.description}</p>
              <br />
              <p><b>Technologies Used: </b>{blog.techUsed}</p>
              <div className='blogInfo_footer'>
                <span
                  className='blogInfo_close'
                  onClick={closeModal}
                >CLOSE</span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default BlogInfo;
