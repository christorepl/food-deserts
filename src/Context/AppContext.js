import React from 'react'

const AppContext = React.createContext({
    statesData: [],
    allStates: [],
    saveData: [],
    stateResults: [],
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