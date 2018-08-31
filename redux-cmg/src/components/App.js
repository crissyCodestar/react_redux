import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.styl';

class App extends Component {
  constructor() {
    super();
    this.state={
      title: ''
    }
  }

  render(){
    return(
      <div>
        <h1>
          <Link to='/'>Reduxatagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }

}

export default App;
