import React from 'react'
import { Route, Link } from 'react-router-dom'
import Header from './Header/Header'
import About from './About/About'
import Footer from './Footer/Footer'
import HowTo from './HowTo/HowTo'
import AdditionalResources from './AdditionalResources/AdditionalResources'
import Contact from './Contact/Contact'
import CreateAccount from './CreateAccount/CreateAccount'
import Login from './Login/Login'
import AppContext from './Context/AppContext'
import Search from './Search/Search'

//IMPLEMENT A FEATURE THAT SHOWS THE RANKING OF THE DATA POINT NUMERICALLY - next to each data point, it will say "ranked 16 of 51" - write seeds/ organize tables to make this value equal to the id column
//IMPLEMENT A FEATURE THAT ALLOWS USERS TO SORT THE DATA IN DIFFERENT WAYS [ascending/ descending on X data point, alphabetically, etc] [easy in psql, harder in react]
//render a component for each state so users can browse all the data at once

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

  addRemoveStates = (e) => {
    //placeholder function for adding or remove states to this.state.selectedStates. selectedStates will be the query that is searched on the backend.
    // console.log('REFACTOR ME')
    // this.setState({selectedStates: [1, 2, 15, 26, 31, 40, 49, 50, 55] })
    // this.searchSelectedStates(this.state.selectedStates)
  }

  // addSelectedStates = (selectedState) => {
  //   const chosenStates = []
  //   chosenStates.push(selectedState)
  //   console.log('chosen ', chosenStates)
  //   console.log('selected ', selectedState)
  //   this.setState({selectedStates: chosenStates})
  // }

  // removeState = (state) => {
  //   const chosenStates = this.state.selectedStates
  //   const newChosenStates = chosenStates.filter(states => states !== state )
  //   this.setState({selectedStates: newChosenStates})
  // }

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

  searchStates = (e) => {
    e.preventDefault()
    //this.setState({selectedStates: [e.target.value]})
    // this.setState({selectedStates})
    // console.log('searching ', this.state.selectedStates, this.state.statesData)
    const statesToSearch = this.state.selectedStates
    const statesData = this.state.statesData
    let stateResults = []

    const filterStates = stateToSearch => {
      stateResults.push(statesData.filter(state => state.stateId === stateToSearch))
      this.setState({stateResults})
    }
    statesToSearch.forEach(filterStates)

    // for (let i = 0; i > statesData.length; i++) {
    // const stateResults = statesData.filter(state=> state.stateId === statesToSearch[i])
    // console.log('hiya', stateResults)
    // }

    // this.setState({stateResults})
    // console.log(stateResults)
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
      addRemoveStates: this.addRemoveStates,
      // removeState: this.removeState,
      // addSelectedStates: this.addSelectedStates,
      setPassword: this.setPassword,
      setUsername: this.setUsername,
      authenticateUser: this.authenticateUser,
      isUserLoggedIn: this.isUserLoggedIn
    }
    return(
      <div>
      <AppContext.Provider value={value}>
      <Route
        path="/"
        component={Header}
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