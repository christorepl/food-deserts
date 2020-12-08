import React from 'react'
import { Redirect } from 'react-router-dom'
import AppContext from '../../Context/AppContext'
import API_BASE_URL from '../../config'

export default class CreateAccount extends React.Component {
    static contextType = AppContext

    async createAccount (e) {
        e.preventDefault()
    
        try {
          const { email, user_name, password } = this.context
          const body = { email, user_name, password }
        
          const response = await fetch(API_BASE_URL + "auth/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
          })
    
          const parseRes = await response.json()
          const new_user_name = parseRes.new_user_name
          
          // localStorage.setItem("jwt_token", parseRes.jwt_token)
          
          if(parseRes.jwt_token) {
            localStorage.setItem("jwt_token", parseRes.jwt_token)
            this.context.loginUser('create', new_user_name)
        }  else {
            this.context.loginUser(parseRes)
        }


        } catch(err) {
          console.error(err.message)
        }
    }
    

    render() {
        return(
            <div className="ui-info">
                {!this.context.isAuthenticated 
                ?
                <>
                <p>Making an account will allow users to save searches so they can quickly repeat searches instead od having to select states again. Users can delete saved searches and change the name of their saved searches.</p>
                <h1>Create Account</h1>
                <form className="create-account" onSubmit={e => this.createAccount(e)}>
                    <label htmlFor="user_name">Name:</label>
                    <input type="text" name="user_name" onChange={e => this.context.setName(e.target.value)} required/>
                    <label htmlFor="email">E-mail Address:</label>
                    <input type="email" name="email" onChange={e => this.context.setEmail(e.target.value)}required/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" onChange={e => this.context.setPassword(e.target.value)}required/>
                    <button className="buttons" type="submit">Create Account</button>
                </form>
                </>
                : 
                <Redirect to="/saved-search"/>}
            </div>
        )
    }
}