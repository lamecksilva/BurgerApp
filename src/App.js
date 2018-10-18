import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";

class App extends Component {
  state = {
    name: "jorge"
  };

  nameChangedHandler = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Person changed={this.nameChangedHandler}>Testing React</Person>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default App;
