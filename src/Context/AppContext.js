import React from 'react'
import STORE from '../data/STORE'

const AppContext = React.createContext({
    statesData: STORE.statesData,
    stateResults: [],
    users: STORE.users,
    isAuthenticated: false,
    email:'',
    user_name: '',
    password: '',
    selectedStates: [],
    loginUser: () => {},
    createAccount: () => {},
    searchStates: () => {},
    handleStateSelection: () => {},
    setName: () => {},
    setPassword: () => {},
    setEmail: () => {},
    authenticateUser: () => {},
    logout: () => {}
})

export default AppContext