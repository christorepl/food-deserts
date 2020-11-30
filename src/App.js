import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import API_ENDPOINT from './config'
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
import Saved from './SavedList/SavedList'
import 'react-toastify/dist/ReactToastify.css'

//IMPLEMENT A FEATURE THAT SHOWS THE RANKING OF THE DATA POINT NUMERICALLY - next to each data point, it will say "ranked 16 of 51" - write seeds/ organize tables to make this value equal to the id column
//IMPLEMENT A FEATURE THAT ALLOWS USERS TO SORT THE DATA IN DIFFERENT WAYS [ascending/ descending on X data point, alphabetically, etc] [easy in psql, harder in react]
//IMPLEMENT A FEATURE so that you can see the charts of just your search results, and make each stateContainer link to the chart page of the respective state
//IMPLEMENT A FEATURE so that in the chart view of the search results, the charts initially are smaller but each section'd off chart contains a link to view a bigger version of that chart. should be pretty easy to do!

toast.configure()

export default class App extends React.Component{
  static contextType = AppContext;

  state = {
    statesData: [],
    allStates: [],
    saveData: [],
    selectedStates: [],
    stateResults: [],
    isAuthenticated: false,
    saveName: null,
    user_name: null,
    email: null,
    password: null
  }

  toastifyParams = {autoClose: 2500, hideProgressBar: true, position: "bottom-left", pauseOnHover: false, pauseOnFocusLoss: false}

  async checkAuth () {
    try {
      const response = await fetch(API_ENDPOINT + "auth/verify", {
        method: "GET",
        headers: {jwt_token: localStorage.jwt_token}
      })
      const parseRes = await response.json()
      parseRes === true ? this.setState({isAuthenticated: true}) : this.setState({isAuthenticated: false})
    } catch (error) {
      console.error(error.message)
    }
  }

  async updateCovidData () {
    try {
      const response = await fetch(API_ENDPOINT + 'api/state/all')
      const allStates = await response.json()
      this.setState({allStates})
  } catch (error) {
      console.error(error.message)
  }

  }

  async componentDidMount () {
    const { password, email, user_name, saveName, stateResults, selectedStates, saveData, statesData, allStates, isAuthenticated } = this.context
    this.setState({isAuthenticated, user_name, saveName, email, password, allStates, statesData, saveData, stateResults, selectedStates})
    this.checkAuth()
    this.updateCovidData()
  }
  
  saveSearch = results => {

  }
  
  setSaveName = saveName => {
    this.setState({saveName})
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
  }
  
  fetchFips = async(e) => {
    e.preventDefault()
    //create an array that contains the fips code for each state the user wants to search
    const statesToSearch = this.state.selectedStates.map(state => state.value)

    //this function will build the query string for the actual fetch
    function encodeQueryData(data) {
      const query = []
      for (let d in data)
        query.push('fips=' + data[d])
     return query.join('&')
   }

   const query = encodeQueryData(statesToSearch)
   const queryURL = API_ENDPOINT + "api/state/search?" + query

    try {
      const response = await fetch(queryURL)
      const stateResults = await response.json()
      this.setState({stateResults})
    } catch (error) {
      console.error(error.message)
    }
  }


  loginUser = (attempt) => {
    // logs in the user
    if (attempt === 'login'){
      toast.success('Login successful', this.toastifyParams)
      this.setState({ isAuthenticated: true })
    } else if (attempt === 'create') {
      toast.success('Account creation successful! You are now logged in.', this.toastifyParams)
      this.setState({ isAuthenticated: true})
    } else {
      toast.info(attempt, this.toastifyParams)
      this.setState({ isAuthenticated: false })
    }
  }

  logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("jwt_token")
    toast.info('Logout successful', this.toastifyParams)
    this.setState({ isAuthenticated: false })
  }

  render() {
    const value = {
      isAuthenticated: this.state.isAuthenticated,
      allStates: this.state.allStates,
      statesData: this.state.statesData,
      saveData: this.state.saveData,
      user_name: this.state.user_name,
      saveName: this.state.saveName,
      email: this.state.email,
      password: this.state.password,
      selectedStates: this.state.selectedStates,
      stateResults: this.state.stateResults,
      createAccount: this.createAccount,
      toastNotifications: this.toastNotifications,
      saveSearch: this.saveSearch,
      setSaveName: this.setSaveName,
      loginUser: this.loginUser,
      fetchFips: this.fetchFips,
      handleStateSelection: this.handleStateSelection,
      setPassword: this.setPassword,
      setName: this.setName,
      setEmail: this.setEmail,
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
        path="/state-selection"
        component={State}
      />
      <Route 
        path="/state/:fips"
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