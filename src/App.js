import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from './Header/Header'
import About from './About/About'
import Footer from './Footer/Footer'
import AdditionalResources from './AdditionalResources/AdditionalResources'
import Contact from './Contact/Contact'
import CreateAccount from './CreateAccount/CreateAccount'
import Login from './Login/Login'
import AppContext from './Context/AppContext'
import Search from './Search/Search'
import Home from './Home/Home'
import Charts from './Charts/Charts'
import State from './State/State'
import StatePage from './StatePage/StatePage'
import Saved from './Saved/Saved'

//IMPLEMENT A FEATURE THAT SHOWS THE RANKING OF THE DATA POINT NUMERICALLY - next to each data point, it will say "ranked 16 of 51" - write seeds/ organize tables to make this value equal to the id column
//IMPLEMENT A FEATURE THAT ALLOWS USERS TO SORT THE DATA IN DIFFERENT WAYS [ascending/ descending on X data point, alphabetically, etc] [easy in psql, harder in react]
//IMPLEMENT A FEATURE so that you can see the charts of just your search results, and make each stateContainer link to the chart page of the respective state
//IMPLEMENT A FEATURE so that in the chart view of the search results, the charts initially are smaller but each section'd off chart contains a link to view a bigger version of that chart. should be pretty easy to do!

export default class App extends React.Component{
  static contextType = AppContext;

  state = {
    statesData: {},
    selectedStates: [],
    stateResults: [],
    isAuthenticated: false,
    users: {},
    user_name: null,
    email: null,
    password: null
  }

  async componentDidMount () {
    const isAuthenticated = this.context.isAuthenticated
    const statesData = this.context.statesData
    const selectedStates = this.context.selectedStates
    const stateResults = this.context.stateResults
    const users = this.context.users
    const user_name = this.context.user_name
    const email = this.context.email
    const password = this.context.password
    this.setState({isAuthenticated, users, user_name, email, password, statesData, stateResults, selectedStates})
  }
    
  setEmail = email => {
    //updates state to reflect name written in the login field or create account field
    this.setState({email})
  }
  
  setName = user_name => {
    //update state to reflect name in respective forms
    this.setState({user_name})
  }

  setPassword = password => {
    //updates state to reflect the password written in the login field or create account field
    this.setState({password})
  }
  
  handleStateSelection = selectedStates => {
    this.setState({
      selectedStates
    })
    // const statesToSearch = this.state.selectedStates.map(state => state.value)
  }

  // async createAccount (e) {
  //   e.preventDefault()

  //   try {
  //     console.log(this.context)
  //     console.log(this.state)
  //     const { email, name, password } = this.context
  //     const body = { email, name, password }

  //     console.log(body)

  //     const response = await fetch("http://localhost:8001/auth/register", {
  //       method: "POST",
  //       headers: {"Content-Type": "application/json"},
  //       body: JSON.stringify(body)
  //     })

  //     const parseRes = await response.json()

  //     console.log(parseRes)

  //   } catch(err) {
  //     console.error(err.message)
  //   }
  // }
    
  searchStates = e => {
    e.preventDefault()
    const statesToSearch = this.state.selectedStates.map(state => state.value)
    const statesData = this.state.statesData
    this.setState({stateResults: statesData.filter(state => statesToSearch.includes(state.stateId))})
  }

  authenticateUser = e => {
    e.preventDefault();
    const enteredEmail = this.state.email
    const enteredPassword = this.state.password
    if (enteredEmail === "christopher416@gmail.com" && enteredPassword === "password") {
      console.log('logging in')
      this.loginUser(true)
    } else {
      alert('invalid name or password')
    }
  }

  loginUser = () => {
    //authenticateUser calls this function if a users passes authentication. resets the name/ password fields and logins the user.
    this.setState({password: null, name: null, isAuthenticated: true})
  }

  logout = () => {
    this.setState({isAuthenticated: false})
  }

  render() {
    const value = {
      isAuthenticated: this.state.isAuthenticated,
      statesData: this.state.statesData,
      users: this.state.users,
      user_name: this.state.user_name,
      email: this.state.email,
      password: this.state.password,
      selectedStates: this.state.selectedStates,
      stateResults: this.state.stateResults,
      createAccount: this.createAccount,
      loginUser: this.loginUser,
      searchStates: this.searchStates,
      handleStateSelection: this.handleStateSelection,
      setPassword: this.setPassword,
      setName: this.setName,
      setEmail: this.setEmail,
      authenticateUser: this.authenticateUser,
      logout: this.logout
    }
    return(
      <div>
      <AppContext.Provider value={value}>
      <Route exact path="/"><Redirect to="/home" /></Route>
      <Route
        path="/"
        component={Header}
      />
      <Route 
        path="/charts"
        component={Charts}
      />
      <Route
        path="/states"
        component={State}
      />
      <Route 
        path="/state/:stateId"
        component={StatePage}
      />
      <Route
        exact path="/home"
        component={Home}
        />
      <Route
        exacth path="/search"
        component={Search}
        />
      <Route
        exact path="/about"
        component={About}
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
      <Route 
        exact path="/saved-searches"
        component={Saved}
      />
      </AppContext.Provider>
      <Footer />
      </div>
    )
  }
}