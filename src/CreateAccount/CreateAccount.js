import React from 'react'
import { Redirect } from 'react-router-dom'
import AppContext from '../Context/AppContext'


export default class CreateAccount extends React.Component {
    static contextType = AppContext

    async createAccount (e) {
        e.preventDefault()
    
        try {
          const { email, user_name, password } = this.context
          const body = { email, user_name, password }
        
          const response = await fetch("http://localhost:8001/auth/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
          })
    
          const parseRes = await response.json()
    
          localStorage.setItem("jwt_token", parseRes.jwt_token)
    
          this.context.loginUser()

        } catch(err) {
          console.error(err.message)
        }
      }
    

    render() {

        // let {name, email, password} = this.context


        return(
            <div className="ui-info">
                {!this.context.isAuthenticated 
                ?
                <>
                <p>point of making an account? create account page here....</p> 

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
                <Redirect to="/"/>}
            </div>
        )
    }
}