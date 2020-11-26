import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../Context/AppContext'

export default class CheckLogin extends React.Component {
    static contextType = AppContext

    render() {
        return (
            <>
            {!this.context.isAuthenticated 
            ?
            <>
                <Link to='/login'>
                    <span className="sign-in-out">
                    Login
                    </span>
                </Link>
                <Link to='/create-account'>
                    <span className="sign-up-saved">
                    Create Account
                    </span>
                </Link>
          </>
          :
          <>
                <Link to="/">
                    <span className="sign-in-out" onClick={() => this.context.logout()}>
                        Logout
                    </span>
                </Link>
                <Link to="/saved-searches">
                    <span className="sign-up-saved">
                        View Saved Searches
                    </span>
                </Link>
            </>
            }
            </>
        )
    }
}