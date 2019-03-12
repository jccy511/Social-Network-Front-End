import React, { Component } from 'react';
import { TopBar } from './TopBar'
import { Main } from './Main'
import { TOKEN_KEY } from "../constants";

class App extends Component {
  state = {
      isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
  }

  handleSuccessfullLogin = (token) => {
      localStorage.setItem('TOKEN_KEY' , token);
      this.setState({ isLoggedIn: true });
  }
  // arrow function will automatically bind with this
  handleSuccessfullLogout = () => {
      localStorage.removeItem(TOKEN_KEY);
      this.setState({isLoggedIn : false});
  }
  render(){
    return (
      <div className="App">
        <TopBar isLoggedIn = {this.state.isLoggedIn} handleSuccessfullLogout = {this.handleSuccessfullLogout}/>;
        <Main handleSuccessfullLogin = {this.handleSuccessfullLogin} isLoggedIn = {this.state.isLoggedIn} className="main"/>
      </div>
    );
  }
}

export default App;
