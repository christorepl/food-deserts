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

//IMPLEMENT A FEATURE THAT SHOWS THE RANKING OF THE DATA POINT NUMERICALLY
//IMPLEMENT A FEATURE THAT ALLOWS USERS TO SORT THE DATA IN DIFFERENT WAYS [ascending/ descending on X data point, alphabetically, etc] [easy in psql, harder in react
//IMPLEMENT A FEATURE so that in the chart view of the search results, the charts initially are smaller but each section'd off chart contains a link to view a bigger version of that chart

toast.configure()

export default class App extends React.Component{
  static contextType = AppContext;

  state = {
    selectMessage: null,
    statesData: [],
    userSaves: [],
    allStates: [],
    saveData: [],
    selectedStates: [],
    stateResults: [],
    new_save_name: null,
    isAuthenticated: false,
    saveName: null,
    user_name: null,
    email: null,
    password: null
  }

  toastifyParams = {autoClose: 2500, hideProgressBar: true, position: "bottom-left", pauseOnHover: false, pauseOnFocusLoss: false}

  async populateUserSaves () {
    try {
      const response = await fetch(API_ENDPOINT + "api/save/user_save/", {
          method: "GET",
          headers: {jwt_token: localStorage.jwt_token},
      })
      
      const parseRes = await response.json()
      // console.log(parseRes)
      this.setUserSaves(parseRes)
      this.setName(parseRes[0].user_name)
      // console.log('userSaves:', this.context.userSaves)
  } catch (err) {
      console.error(err.message)
  }}

  async checkAuth () {
    try {
      const response = await fetch(API_ENDPOINT + "auth/verify", {
        method: "GET",
        headers: {jwt_token: localStorage.jwt_token}
      })
      const parseRes = await response.json()
      if(parseRes === true) {
        this.setState({isAuthenticated: true})
        await this.populateUserSaves()
      } else {
        this.setState({isAuthenticated: false})
      }
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
    console.log('app did mount')
    const { new_save_name, selectMessage, password, email, user_name, saveName, stateResults, userSaves, selectedStates, saveData, statesData, allStates, isAuthenticated } = this.context
    this.setState({new_save_name, selectMessage, password, email, user_name, saveName, stateResults, userSaves, selectedStates, saveData, statesData, allStates, isAuthenticated})
    this.checkAuth()
    this.updateCovidData()
  }
  
  deleteSave = async(save_name, e) => {
    e.preventDefault()
    console.log(save_name)
    const body =  { save_name }

    try {
      const response = await fetch(API_ENDPOINT + "api/save/user_save/" + save_name, {
          method: "DELETE",
          headers: {jwt_token: localStorage.jwt_token},
          body
      })
      
      const parseRes = await response.json()
      /////toastify response\\\\\\\\\\\\\\\\\\\\\\\\
      this.context.setUserSaves(parseRes)
  } catch (err) {
      console.error(err.message)
  }
  }


  setUpdatedSaveName = new_save_name => {
    this.setState({new_save_name})
  }

  updateSaveName = async(e, save_name) => {
    e.preventDefault();
    const { new_save_name } = this.state 
    console.log('new save name: ', new_save_name, ' old name: ', save_name)
    const body = { new_save_name }
    console.log(body)
    try {
      const response = await fetch(API_ENDPOINT + "api/save/user_save/" + save_name, {
          method: "PUT",
          headers: {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Origin" : "http://localhost:3000",
            jwt_token: localStorage.jwt_token
          },
          body: body
      })
      
      const parseRes = await response.json()
      console.log(parseRes)
      /////toastify response\\\\\\\\\\\\\\\\\\\\\\\\
      // this.context.setUserSaves(parseRes)
    } catch (err) {
        console.error(err.message)
    }

  }

  setUserSaves = (userSaves) => {
    this.setState({userSaves})
  }

  saveSearch = async(e) => {
    e.preventDefault();
    
    try {
      
      const save_name = this.state.saveName
      const state_names = this.state.selectedStates.map(state => state.label)
      const fips = this.state.selectedStates.map(state => state.value)
      const body =  { save_name, state_names, fips }
      console.log(state_names, save_name, fips)
    
      const response = await fetch(API_ENDPOINT + "api/save/user_save", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        jwt_token: localStorage.jwt_token
      },
        body: JSON.stringify(body)
      })

      const parseRes = await response.json()
      console.log(parseRes)
      //toastify with parseRes\\\\\\\\\\\\\\\\\\\\\\\\\
      
    } catch(err) {
      console.error(err.message)
    }
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
    //whenever a user selects a state in the menu, this array is updated and used by the
    this.setState({selectedStates})
  }

  handleSavedSearch = (selectedStates, e) => {
    //whenever a user selects a state in the menu, this array is updated and used by the
    this.setState({selectedStates})
    this.fetchFips(e)
  }
  
  fetchFips = async(e) => {
    e.preventDefault()
    this.setState({selectMessage: null})

    //create an array that contains the fips code for each state the user wants to search
    let queryURL
    const statesToSearch = this.state.selectedStates.map(state => state.value)
    console.log('fetch1', statesToSearch)
    statesToSearch.length === 0
    ?
    this.setState({selectMessage: 'You must select one or more states.'})
    :
    queryURL = API_ENDPOINT + "api/state/search?fips=" + statesToSearch

    try {
      const response = await fetch(queryURL)
      const stateResults = await response.json()
      this.setState({stateResults})
    } catch (error) {
      console.error(error.message)
    }
  }


  loginUser = async(attempt) => {
    // logs in the user
    if (attempt === 'login'){
      toast.success('Login successful', this.toastifyParams)
      this.setState({ isAuthenticated: true })
      this.populateUserSaves()
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
    localStorage.removeItem('jwt_token')
    toast.info('Logout successful', this.toastifyParams)
    this.setState({ isAuthenticated: false, user_name: null, userSaves: [], statesData: [], selectedStates: [], saveData: [], saveName: null, email: null, password: null, stateResults: []})

  }

  render() {
    const value = {
      new_save_name: this.state.new_save_name,
      selectMessage: this.state.selectMessage,
      isAuthenticated: this.state.isAuthenticated,
      allStates: this.state.allStates,
      userSaves: this.state.userSaves,
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
      setUpdatedSaveName: this.setUpdatedSaveName,
      updateSaveName: this.updateSaveName,
      deleteSave: this.deleteSave,
      handleSavedSearch: this.handleSavedSearch,
      setUserSaves: this.setUserSaves,
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