import React from 'react'
import { Redirect } from 'react-router-dom'
import API_ENDPOINT from '../config'
import AppContext from '../Context/AppContext'
import UserSaves from '../UserSaves/UserSaves'

export default class Saved extends React.Component {
    static contextType = AppContext

    async componentDidMount () {
        try {
            const response = await fetch(API_ENDPOINT + "api/save/user_save/", {
                method: "GET",
                headers: {jwt_token: localStorage.jwt_token},
            })
            
            const parseRes = await response.json()
            // console.log(parseRes)
            //////toastify
            this.context.setUserSaves(parseRes)
            this.context.setName(parseRes[0].user_name)
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
                <UserSaves />
                }
            </div>
        )
    }
}