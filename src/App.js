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

    onChangeHandler = () => {
      let newColor = 'blue';
      if(this.state.color === newColor){
      this.setState({color: this.state.newColor});
      }
    }
    




  render() {
    const styleColor = {
      background: this.state.color
    };
    return(
      <div>
        <div style={styleColor}>{this.state.clickCounter}</div>
            <button onChange={this.onChangeHandler} value={this.state.color} onClick ={this.increment} > click me</button>
      </div>
    );
  }
}

export default App;
