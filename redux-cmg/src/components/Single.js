import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.styl';

class Single extends Component {
  constructor() {
    super();
    this.state={
      title: ''
    }
  }

  render(){
    return(
      <div className='single-photo'>
        Single Photo grid
      </div>
    )
  }

}

export default Single;
