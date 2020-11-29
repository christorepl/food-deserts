import React from 'react'
import STORE from '../data/STORE'

const AppContext = React.createContext({
    statesData: [],
    saveData: [],
    stateResults: [],
    users: STORE.users,
    isAuthenticated: false,
    saveName: null,
    email: null,
    user_name: null,
    password: null,
    selectedStates: [],
    saveSearch: () => {},
    setSaveName: () => {},
    loginUser: () => {},
    createAccount: () => {},
    fetchFips: () => {},
    handleStateSelection: () => {},
    setName: () => {},
    setPassword: () => {},
    setEmail: () => {},
    logout: () => {}
})

export default AppContext