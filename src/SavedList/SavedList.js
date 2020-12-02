import React from 'react'
import { Redirect } from 'react-router-dom'
import API_ENDPOINT from '../config'
import AppContext from '../Context/AppContext'
import UserSaves from '../UserSaves/UserSaves'

export default class Saved extends React.Component {
    static contextType = AppContext

    async componentDidMount () {
        // try {
        //     const response = await fetch(API_ENDPOINT + "api/save/user_save/", {
        //         method: "GET",
        //         headers: {jwt_token: localStorage.jwt_token},
        //     })
            
        //     const parseRes = await response.json()
        //     // console.log(parseRes)
        //     this.context.setUserSaves(parseRes)
        //     this.context.setName(parseRes[0].user_name)
        //     console.log('userSaves:', this.context.userSaves)
        // } catch (err) {
        //     console.error(err.message)
        // }
    }
    conditionalRendering = (userSaves) => {
        // console.log(userSaves)
        if (userSaves[0]) {
            return (
                <>
                <h2>Your Saved Searches</h2>
                </>
            )
        } else {
            return (
            <p>You do not have any saved searches yet.</p>
            )
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