import React from 'react'
import { Redirect } from 'react-router-dom'
import AppContext from '../../Context/AppContext'

export default class Logout extends React.Component {
    static contextType = AppContext

    componentDidMount () {
        this.context.logout()
    }

    render() {
        return(
            <Redirect to="/home"/>
        )
    }
}