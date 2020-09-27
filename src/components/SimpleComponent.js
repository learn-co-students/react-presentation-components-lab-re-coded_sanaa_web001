// Code SimpleComponent Here
import React, { Component } from 'react';
class SimpleComponent extends Component {
    constructor(props) {
      super(props);
  
      // Initial state here...
      this.state = {
          mood:"happy"
      };
    }
  
    handleClick = () => {
      // Probably do some work to update the state
      const no = this.state.mood == 'happy' ? 'sad' :'happy';
    this.setState({ mood: no });
    }
  
    render() {
       return( <div onClick={this.handleClick}>{this.state.mood}</div>)
      // Return JSX that renders into HTML
    }
  }
  export default SimpleComponent;