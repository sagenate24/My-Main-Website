import React from 'react';
import '../../styles/Loader.scss'

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
