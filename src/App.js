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
  //creating the increment function.
    increment = () => {
      this.setState({clickCounter: this.state.clickCounter +1});
    };

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
        <div style={styleColor} onClick={this.colorChange}>{this.state.clickCounter}</div>

        <button onClick ={this.increment} > click me</button>
      </div>
    );
  }
}


export default App;
