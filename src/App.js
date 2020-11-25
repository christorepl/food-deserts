import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
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
    isLoggedIn: false,
    users: {},
    usernames: [],
    username: null,
    password: null
  }

  async componentDidMount () {
    const isLoggedIn = this.context.isLoggedIn
    const statesData = this.context.statesData
    const selectedStates = this.context.selectedStates
    const stateResults = this.context.stateResults
    const users = this.context.users
    const usernames = this.context.usernames
    const username = this.context.username
    const password = this.context.password
    this.setState({isLoggedIn, users, username, password, statesData, stateResults, selectedStates, usernames})
  }

  
  isUserLoggedIn = (loginState) => {
    //conditional rendering for if the user is logged in or not. logged in users see a logout/ saved searches button and users not logged in see login/ create account buttons.
    if(!loginState) {
      return (
        <>
                <Link to='/login'>
                    <span className="sign-in-out">
                    Login
                    </span>
                </Link>
                <Link to='/create-account'>
                    <span className="sign-up-saved">
                    Create Account
                    </span>
                </Link>
            </>
        )
      } else {
        return (
          <>
                <Link to="/">
                    <span className="sign-in-out" onClick={() => this.setState({isLoggedIn: false})}>
                        Logout
                    </span>
                </Link>
                <Link to="/saved-searches">
                    <span className="sign-up-saved">
                        View Saved Searches
                    </span>
                </Link>
            </>
        )
      }
  }
    
  setUsername = username => {
    //updates state to reflect username written in the login field
    this.setState({username})
  }
  
  setPassword = password => {
    //updates state to reflect the password written in the login field
    this.setState({password})
  }
  
  handleStateSelection = (selectedStates) => {
    this.setState({
      selectedStates
    })
    // const statesToSearch = this.state.selectedStates.map(state => state.value)
  }
    
  searchStates = (e) => {
  e.preventDefault()
  const statesToSearch = this.state.selectedStates.map(state => state.value)
  const statesData = this.state.statesData
  this.setState({stateResults: statesData.filter(state => statesToSearch.includes(state.stateId))})
  }

  authenticateUser = (e) => {
    e.preventDefault();
    const enteredUsername = this.state.username
    const enteredPassword = this.state.password
    if (enteredUsername === "christopher416" && enteredPassword === "password") {
      console.log('logging in')
      this.loginUser(true)
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

  loginUser = () => {
    //authenticateUser calls this function if a users passes authentication. resets the username/ password fields and logins the user.
    this.setState({password: '', username: '', isLoggedIn: true})
    console.log(this.props.history)
  }

  render() {
    const value = {
      isLoggedIn: this.state.isLoggedIn,
      statesData: this.state.statesData,
      users: this.state.users,
      usernames: this.state.usernames,
      username: this.state.username,
      password: this.state.password,
      selectedStates: this.state.selectedStates,
      stateResults: this.state.stateResults,
      searchStates: this.searchStates,
      handleStateSelection: this.handleStateSelection,
      setPassword: this.setPassword,
      setUsername: this.setUsername,
      authenticateUser: this.authenticateUser,
      isUserLoggedIn: this.isUserLoggedIn
    }
    console.log('app', this.context.statesData)
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
      </AppContext.Provider>
      <Footer />
      </div>
    )
  }
}