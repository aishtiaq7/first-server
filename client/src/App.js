import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((users) => this.setState({ users }));

    //   .then(res = res.json())
    //   .then(users => this.setState({users}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.users.map((user) => (
              <li key={user.id}>{`${user.id} ------ ${user.username}`}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}
//hello
//hello

export default App;
