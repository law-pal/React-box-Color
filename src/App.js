import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    //Setting state properties.
    this.state = {
      color: 'orange',
      clickCounter: 0
    };
}
  // increment function.
    increment = () => {
      this.setState({clickCounter: this.state.clickCounter +1});
    };

    //Function to change color.
    colorChange = () => {
      let red = Math.floor(Math.random()*255)
      let green = Math.floor(Math.random()*255)
      let blue = Math.floor(Math.random()*255)

      this.setState({color: `rgb(${red},${green},${blue})`})
    };
    
render() {

      const styleColor = {
      background: this.state.color

    };

    return(
      <div>
        <div className='container' style={styleColor} onClick={() => {this.increment();this.colorChange();}}>
          <h1>{this.state.clickCounter}</h1>
          <h1>Click me</h1>
        </div>
      </div>
    );
  }
}


export default App;
