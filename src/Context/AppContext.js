import React from 'react'
import STORE from '../data/STORE'

const AppContext = React.createContext({
    isLoggedIn: false,
    states: STORE.states,
    users: STORE.users,
    username: '',
    password: '',
    setPassword: () => {},
    setUsername: () => {},
    authenticateUser: () => {},
    isUserLoggedIn: () => {}
})

export default AppContext