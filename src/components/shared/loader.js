import React from 'react';
import '../../styles/loader.css'

class Loader extends React.Component {
  render() {
    const { loading } = this.props;

    return (
      loading ?
        <div className='loader_container'>
          <div className='loader' />
        </div>
        : null
    )
  }
}

export default Loader;
