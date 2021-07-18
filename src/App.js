import React, { Component } from 'react';
import './App.css';
import Person from './Components/Peron';
import Counter from './Components/Conteur'

class App extends Component {
  state = { show: false, }
  handleShowPerson = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleShowPerson}>{this.state.show ? "Hide Profil" : "Show Profil"}</button>
        {this.state.show ? <div><Person /><br /> Time :  <Counter /></div> : ""}
      </div>
    );
  }
}
export default App;
