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
      this.setState({color: this.state.color='blue'})
    };

    
render() {

      const styleColor = {
      background: this.state.color
    };
      return(
      <div>
        <div style={styleColor} onChange={this.colorChange}>{this.state.clickCounter}</div>
        <button value={this.state.color} onClick ={this.increment} > click me</button>
      </div>
    );
  }
}


export default App;
