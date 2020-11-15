import React from 'react'
import AppContext from '../Context/AppContext'

export default class Login extends React.Component {
    static contextType = AppContext;

    static defaultProps = {
        setUsername: () => {},
    }

    render() {
        return (
            <form className="login" onSubmit={e => this.context.authenticateUser(e)}>
            <label htmlFor="username">Username:</label>
               <input type="text" name="username" id="username" required onChange={e => this.context.setUsername(e.target.value)}/>
               <br />
               <br />
               <label htmlFor="password">Password:</label>
               <input type="password" name="password" id="password" required onChange={e => this.context.setPassword(e.target.value)}/>
               <br/>
               <br/>
               <button type="submit" className="submit">Login</button>
               <p>For purposes of this static app, username MUST BE "christopher416" and password MUST BE "password"</p>
            </form>
        )
    }
}