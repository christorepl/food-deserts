import React from 'react'
import AppContext from '../Context/AppContext'

export default class CheckLogin extends React.Component {
    static contextType = AppContext

    render() {
        return (
            <>
            {this.context.isUserLoggedIn(this.context.isLoggedIn)}
            </>
        )
    }
}