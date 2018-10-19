import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Navbar from './components/navbar/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Contents from './components/contents/Contents';
import Templates from './components/templates/Templates';
import OnlineService from './components/onlineService/onlineService';
import OnlineShop from './components/onlineShop/onlineShop';
import SocialNetwork from './components/socialNetwork/socialNetwork';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null, loading: true };
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
  
  drawSocial = (socialPosts) => {
    this.setState({posts: socialPosts, loading: false})
  }
  drawShop = (shopPost) => {
    this.setState({posts: shopPost, loading: false})
  }
  drawService = (servicePost) => {
    this.setState({posts: servicePost, loading: false})
  }
  
  render() {
    this.fetchUser()

    if(this.state.loggedInUser){
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Contents></Contents>
            <Templates drawSocial={this.drawSocial}></Templates>
            <Switch>
                 <Route exact path='/home' render={() => <Home />}/>
                 <Route exact path='/template/onlineService' render={({match}) => <div>{(!this.state.loading)?<OnlineService posts={this.state.posts} params={match.params}/> : <div></div>}</div>}/>
                 <Route exact path='/template/onlineShop' render={({match}) => <div>{(!this.state.loading)?<OnlineShop posts={this.state.posts} params={match.params}/> : <div></div>}</div>}/>
                <Route exact path='/template/socialNetwork' render={({match}) => <div>{(!this.state.loading)?<SocialNetwork posts={this.state.posts} params={match.params}/> : <div></div>}</div>}/>
            </Switch>
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Contents></Contents>
            <p>please, signup or login to access</p>
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