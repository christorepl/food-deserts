import React from 'react'

const AppContext = React.createContext({
    statesData: [],
    userSaves: [],
    allStates: [],
    saveData: [],
    stateResults: [],
    new_save_name: null,
    isAuthenticated: false,
    saveName: null,
    email: null,
    user_name: null,
    password: null,
    selectedStates: [],
    currentSaveResults: [],
    toggle: false,
    Toggle: () => {},
    runSaveSearch: () => {},
    updateSaveName: () => {},
    deleteSave: () => {},
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