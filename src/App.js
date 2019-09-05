import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      message : "React App"
    }
  }
  render() {
    return (
      <div className = "App">

        <h1>{this.state.message}</h1>
        <form className = "size">
          <label  htmlFor = "username">USERNAME</label>
          <input class ="u-full-width" type ="text" id = "username" username ="username"/>
          <label  htmlFor = "password">PASSWORD</label>
          <input class ="u-full-width" type ="password" id = "password" password ="password"/>
          <label  htmlFor = "confirmPassword">CONFIRM PASSWORD</label>
          <input class ="u-full-width" type ="text" id = "confirmPassword" confirmPassword ="confirmPassword"/>
          <button className = "button-primary">Sign up</button>
        </form>
          
        </div>
    );
  }
}

export default App;