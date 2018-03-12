import React from 'react';
import s from './style.module.scss';
import {Box} from '../';

class Slide extends React.Component {
  render() {
    if(this.props.pos != this.props.current) return null;
    return (
      <Box>
        {this.props.children}
      </Box>
    )
  }
}

export default Slide
