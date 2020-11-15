import React from 'react'
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import About from './About/About'
import Footer from './Footer/Footer'
import HowTo from './HowTo/HowTo'
import AdditionalResources from './AdditionalResources/AdditionalResources'
import Contact from './Contact/Contact'
import CreateAccount from './CreateAccount/CreateAccount'
import Login from './Login/Login'
import AppContext from './Context/AppContext'

export default class App extends React.Component{
  static contextType = AppContext;

  state = {
    isLoggedIn: false,
    states: {},
    users: {},
    username: null,
    password: null
  }

  async componentDidMount () {
    const loggedInStatus = this.context.isLoggedIn
    const states = this.context.states
    const users = this.context.users
    const username = this.context.username
    const password = this.context.password
    this.setState({isLoggedIn: loggedInStatus, states, users, username, password})
  }

  setUsername = username => {
    this.setState({username})
  }

  setPassword = password => {
    this.setState({password})
  }

  authenticateUser = (e) => {
    e.preventDefault();
    const enteredUsername = this.state.username
    const enteredPassword = this.state.password
    if (enteredUsername === "christopher416" && enteredPassword === "password") {
      console.log('authenticated')
      this.setState({isLoggedIn: true})
      console.log(this.state)
    } else if (enteredUsername !== "christopher416" || enteredPassword !== "password" ) {
      alert('invalid username or password')
    }
    // const usernames = this.state.users.map(users => users)
    // console.log(usernames)
    // const passwords = this.state.users.map(users => users[1])
    // const authenticatedUsername = usernames.map(users => users[enteredUsername])
    // console.log(authenticatedUsername)

    
    // if(authenticatedUsername.length === 0) {
    //   return alert('Invalid username')
    // } else {
    //   console.log('hey')
    // }

  }

  render() {
    const value = {
      isLoggedIn: this.state.isLoggedIn,
      states: this.state.states,
      setPassword: this.setPassword,
      setUsername: this.setUsername,
      authenticateUser: this.authenticateUser
    }

    return(
      <div>
      <AppContext.Provider value={value}>
      <Route 
      path = "/"
      component={Header}
      />
      <Route
        exact path="/about"
        component={About}
      />
      <Route
        exact path="/how-to"
        component={HowTo}
      />
      <Route
        exact path="/addtl"
        component={AdditionalResources}
      />
      <Route
        exact path="/contact"
        component={Contact}
      />
      <Route
        exact path="/create-account"
        component={CreateAccount}
      />
      <Route
        exact path="/login"
        component={Login}
      />
      <Footer />
      </AppContext.Provider>
      </div>
    )
  }
}