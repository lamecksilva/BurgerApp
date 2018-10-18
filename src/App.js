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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };

    return (
      <div className="App">
        <Person changed={this.nameChangedHandler}>Testing React</Person>
        <p>{this.state.name}</p>
        <button style={style}>Click Me</button>
      </div>
    );
  }
}

export default App;
