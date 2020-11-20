import React from 'react'
import STORE from '../data/STORE'

// const statesNames = STORE.statesIds.map(state => state.stateName)
// const statesIds = STORE.statesIds.map(state => state.stateId)
const usernames = STORE.users.map(user => user.username)

const AppContext = React.createContext({
    statesData: STORE.statesData,
    stateResults: [],
    users: STORE.users,
    usernames: usernames,
    isLoggedIn: false,
    username: '',
    password: '',
    selectedStates: [],
    renderChartsButton: () => {},
    searchStates: () => {},
    handleStateSelection: () => {},
    setPassword: () => {},
    setUsername: () => {},
    authenticateUser: () => {},
    isUserLoggedIn: () => {}
})

export default AppContext