import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  
  render() {
    let header = '';
    if (this.state.username) {
      header = <h1>Hello {this.state.username}</h1>;
    } else {
      header = '';
    }
    return (
      <div>
        <form>
          <h1>Hello</h1>
          <p>Enter your name:</p>
          <input type="text"/>
        </form>
        <form>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name:</p>
          <input type='text' onChange={this.myChangeHandler}/>
        </form>
        <form>
          {header}
          <p>Enter your name:</p>
          <input type='text' onChange={this.myChangeHandler}/>
        </form>
      </div>      
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);


export default App;