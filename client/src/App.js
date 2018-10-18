import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/home';
import Navbar from './components/navbar/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Contents from './components/contents/Contents';
import OnlineService from './components/onlineService/onlineService';
import OnlineShop from './components/onlineShop/onlineShop';
import SocialNetwork from './components/socialNetwork/socialNetwork';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
    })
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        })
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        })
      })
    }
  }

  render() {
    this.fetchUser()

    if(this.state.loggedInUser){
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Contents></Contents>
            <Switch>
                 <Route exact path='/home' render={() => <Home />}/>
                 <Route exact path='/template/onlineService' render={({match}) => <OnlineService params={match.params}/>}/>
                 <Route exact path='/template/onlineShop' render={({match}) => <OnlineShop params={match.params}/>}/>
                 <Route exact path='/template/socialNetwork' render={({match}) => <SocialNetwork params={match.params}/>}/>
            </Switch>
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Switch>
              <Route exact path='/home' render={() => <Home />}/>
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
            </Switch>
          </header>
        </div>
      );
    }
  }
}


export default App;