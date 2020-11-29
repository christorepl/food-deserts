import React from 'react'
import { Redirect } from 'react-router-dom'
import AppContext from '../Context/AppContext'
import API_ENDPOINT from '../config'

export default class Login extends React.Component {
    static contextType = AppContext;

    onSubmitLogin = async(e) => {
        e.preventDefault()
        try {

            const { email, password } = this.context
            const body = { email, password }
            const response = await fetch(API_ENDPOINT + "auth/login", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })

            const parseRes = await response.json()
            
            if(parseRes.jwt_token) {
                localStorage.setItem("jwt_token", parseRes.jwt_token)
                this.context.loginUser('login')
            }  else {
                this.context.loginUser(parseRes)
            }

        } catch (err){
            console.error(err.message)
        }
    }

    render() {
        return (
            <>
            {!this.context.isAuthenticated
            ?
            <form className="forms" onSubmit={e => this.onSubmitLogin(e)}>
            <label htmlFor="email">E-mail Address:</label>
               <input type="email" name="email" required onChange={e => this.context.setEmail(e.target.value)}/>
               <label htmlFor="password">Password:</label>
               <input type="password" name="password" required onChange={e => this.context.setPassword(e.target.value)}/>
               <button type="submit" className="buttons">Login</button>
               <p>For purposes of this static app, email MUST BE "christopher416@gmail.com" and password MUST BE "password". My fullstack app will use jwt for authentication and user account creation.</p>
            </form>
            :
            <Redirect to="/saved-searches"/>
            }
            </>
        )
    }
}