import React from 'react'
import { Redirect } from 'react-router-dom'
import API_ENDPOINT from '../config'
import AppContext from '../Context/AppContext'
import UserSaves from '../UserSaves/UserSaves'

export default class Saved extends React.Component {
    static contextType = AppContext
    
    render() {
        return(
            <div className="ui-info">
                {!this.context.isAuthenticated 
                ?
                <Redirect to="/login" />
                : 
                <UserSaves />
                }
            </div>
        )
    }
}