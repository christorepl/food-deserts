import React from 'react'
import { Redirect } from 'react-router-dom'
import API_ENDPOINT from '../config'
import AppContext from '../Context/AppContext'

export default class Saved extends React.Component {
    static contextType = AppContext

    async componentDidMount () {
        try {
            const response = await fetch(API_ENDPOINT + "api/save/user_save/", {
                method: "GET",
                headers: {jwt_token: localStorage.jwt_token},
            })
            
            const parseRes = await response.json()
            this.context.setName(parseRes.userName)

        } catch (err) {
            console.error(err.message)
        }
    }
    
    render() {
        return(
            <div className="ui-info">
                {!this.context.isAuthenticated 
                ?
                <Redirect to="/login" />
                : 
                <>
                <h1>Hello, {this.context.user_name}</h1>
                <h2>Your Saved Searches</h2>

                </>}
            </div>
        )
    }
}