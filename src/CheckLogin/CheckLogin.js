import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../Context/AppContext'

export default class CheckLogin extends React.Component {
    static contextType = AppContext

    isLoggedIn = this.context.isLoggedIn

    isUserLoggedIn = (isLoggedIn) => {
        if(isLoggedIn === false) {
            return (
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
            )
        } else {
            return (
                <>
                    <Link to="/">
                        <span className="sign-in-out" onClick={() => this.setState({isLogged: false})}>
                            Logout
                        </span>
                    </Link>
                    <Link>
                        <span className="sign-up-saved">
                            View Saved Searches
                        </span>
                    </Link>
                </>
            )
        }

    }
    render() {
        return (
            <>
            {this.isUserLoggedIn(this.isLoggedIn)}
            </>
        )
    }
}