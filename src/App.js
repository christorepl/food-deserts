import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import API_BASE_URL from './config'
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
import SavePage from './SavePage/SavePage'

//IMPLEMENT A FEATURE THAT SHOWS THE RANKING OF THE DATA POINT NUMERICALLY

toast.configure()

class App extends React.Component{
  static contextType = AppContext;

  state = {
    selectMessage: null,
    currentSaveResults: [],
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
  
  async componentDidMount () {
    const { currentSaveResults, new_save_name, selectMessage, password, email, user_name, saveName, stateResults, userSaves, selectedStates, saveData, statesData, allStates, isAuthenticated } = this.context
    this.setState({ currentSaveResults, new_save_name, selectMessage, password, email, user_name, saveName, stateResults, userSaves, selectedStates, saveData, statesData, allStates, isAuthenticated })
    this.checkAuth()
    this.updateCovidData()
    this.setName(this.state.user_name)
  }

  async populateUserSaves () {
    try {
      const response = await fetch(API_BASE_URL + "api/save/saved_search/", {
          method: "GET",
          headers: {jwt_token: localStorage.jwt_token},
      })
      
      const parseRes = await response.json()
      parseRes[0].save_name
      ?
      this.setState({userSaves: parseRes})
      :
      this.setState({userSaves: []})
    } catch (err) {
      console.error(err.message)
  }}

  async checkAuth () {
    try {
      const response = await fetch(API_BASE_URL + "auth/verify", {
        method: "GET",
        headers: {jwt_token: localStorage.jwt_token}
      })
      const parseRes = await response.json()
      if(parseRes.status === true) {
        this.setState({user_name: parseRes.user_name})
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
      const response = await fetch(API_BASE_URL + 'api/state/all')
      const allStates = await response.json()
      this.setState({allStates})
  } catch (error) {
      console.error(error.message)
  }}

  
  deleteSave = async(save_name, e) => {
    e.preventDefault()
    const body =  { save_name }

    try {
      const response = await fetch(API_BASE_URL + "api/save/saved_search/" + save_name, {
          method: "DELETE",
          headers: {jwt_token: localStorage.jwt_token},
          body
      })
      const parseRes = await response.json()
      toast.info(parseRes, this.toastifyParams)
      this.populateUserSaves()
      this.props.history.push('/saved-search')
  } catch (err) {
      console.error(err.message)
  }
  }

  setUpdatedSaveName = new_save_name => {
    this.setState({new_save_name})
  }

  updateSaveName = async(e, save_name) => {
    e.preventDefault()
    const { new_save_name } = this.state
    const body = { new_save_name }
    try {
      const response = await fetch(API_BASE_URL + 'api/save/saved_search/' + save_name, {
        method: 'PUT',
        headers: {
          "Content-Type" : "application/json",
          jwt_token: localStorage.jwt_token
        },
        body: JSON.stringify(body)
      })
      const parseRes = await response.json()

      if(typeof(parseRes) === 'string') {
        toast.info(parseRes, this.toastifyParams)
      } else {
        this.setState({userSaves: parseRes})
        toast.success('Save name updated. Redirecting you back to your dashboard...', this.toastifyParams)
        this.props.history.push('/saved-search')
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  saveSearch = async(e) => {
    e.preventDefault();
    
    try {
      
      const save_name = this.state.saveName
      const state_names = this.state.selectedStates.map(state => state.label)
      const fips = this.state.selectedStates.map(state => state.value)
      const body =  { save_name, state_names, fips }
    
      const response = await fetch(API_BASE_URL + "api/save/saved_search", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        jwt_token: localStorage.jwt_token
      },
        body: JSON.stringify(body)
      })

      const parseRes = await response.json()
      if (typeof(parseRes) === 'string') {
        toast.info(parseRes, this.toastifyParams)
      } else {
      this.populateUserSaves()
      toast.success('Save successful', this.toastifyParams)
      }
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
  
  fetchFips = async(e) => {
    e.preventDefault()
    this.setState({selectMessage: null})

    //create an array that contains the fips code for each state the user wants to search
    let queryURL
    const statesToSearch = this.state.selectedStates.map(state => state.value)
    statesToSearch.length === 0
    ?
    this.setState({selectMessage: 'You must select one or more states.'})
    :
    queryURL = API_BASE_URL + "api/state/search?fips=" + statesToSearch

    try {
      const response = await fetch(queryURL)
      const stateResults = await response.json()
      this.setState({stateResults})
    } catch (error) {
      console.error(error.message)
    }
  }

  runSaveSearch = async(fips) => {
    //because the psql table sends up the fips as a string, we must turn it into an array so the fetch function works properly with the given fips
    const fipsString = fips.replaceAll('"', '').replaceAll('{', '').replaceAll('}', '').replaceAll('[', '').replaceAll(']', '')
    const fipsIds = fipsString.split(',')
    let fipsArray = []
    for (let i = 0; i < fipsIds.length; i++){
        fipsArray.push({"value": fipsIds[i]})
    }
    let queryURL
    const statesToSearch = fipsArray.map(state => parseInt(state.value))
    queryURL = API_BASE_URL + "api/state/search?fips=" + statesToSearch
    try {
      const response = await fetch(queryURL)
      const currentSaveResults = await response.json()
      this.setState({currentSaveResults})
    } catch (error) {
      console.error(error.message)
    } 
  }

  loginUser = async(attempt, user_name) => {
    // logs in the user
    if (attempt === 'login'){
      toast.success('Login successful', this.toastifyParams)
      this.setState({ isAuthenticated: true, user_name })
      this.populateUserSaves()
    } else if (attempt === 'create') {
      toast.success('Account creation successful! You are now logged in.', this.toastifyParams)
      this.setState({ isAuthenticated: true, user_name })
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
    this.props.history.push('/')
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
      currentSaveResults: this.state.currentSaveResults,
      runSaveSearch: this.runSaveSearch,
      setUpdatedSaveName: this.setUpdatedSaveName,
      updateSaveName: this.updateSaveName,
      deleteSave: this.deleteSave,
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
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route
        path="/"
        component={Header}
      />
      <Route 
        exact path="/charts"
        component={Charts}
      />
      <Route
        exact path="/state-selection"
        component={State}
      />
      <Route 
        exact path="/state/:fips"
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
        exact path="/saved-search"
        component={Saved}
      />
      <Route
        exact path="/saved-search/:save_name"
        component={SavePage}
      />
      </AppContext.Provider>
      <Footer />
      </div>
    )
  }
}

export default withRouter(App)