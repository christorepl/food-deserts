import React from 'react'
import { Redirect } from 'react-router-dom'
import AppContext from '../../Context/AppContext'
import API_BASE_URL from '../../config'


export default class Login extends React.Component {
    static contextType = AppContext;

    onSubmitLogin = async(e) => {
        e.preventDefault()
        try {

            const { email, password } = this.context
            const body = { email, password }
            const response = await fetch(API_BASE_URL + "auth/login", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(body)
            })

            const parseRes = await response.json()
            const user_name = parseRes.user_name
            
            if(parseRes.jwt_token) {
                localStorage.setItem("jwt_token", parseRes.jwt_token)
                this.context.loginUser('login', user_name)
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
               <br/>
               <label htmlFor="password">Password:</label>
               <input type="password" name="password" required onChange={e => this.context.setPassword(e.target.value)}/>
               <br/>
               <button type="submit" className="buttons">Login</button>
            </form>
            :
            <Redirect to="/home"/>
            }
            </>
        )
    }
}