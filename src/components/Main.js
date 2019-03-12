import React from 'react';
import { Register } from './Register';
import { Login } from './Login';
import { Switch, Route , Redirect } from 'react-router-dom';
import { Home } from './Home';
export class Main extends React.Component {

    getLogin = () => {
        return this.props.isLoggedIn ? <Redirect to = "home"/> : <Login handleSuccessfullLogin = {this.props.handleSuccessfullLogin} />
    }
    getHome = () => {
        return this.props.isLoggedIn ? <Home/> : <Redirect to="/login"/>
    }
    render(){
        return (
            <div className="main">
                <Switch>
                    <Route exact path="/" component={this.getLogin}/>
                    <Route path="/login" render = {this.getLogin}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/home" component={this.getHome}/>
                    <Route component={this.getLogin}/>
                </Switch>
            </div>
        );
    }
}