import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../Context/AppContext'
import CheckLogin from '../CheckLogin/CheckLogin'

export default class Header extends React.Component {
    static contextType = AppContext
    isLoggedIn = this.context.isLoggedIn


    render() {
    
        return (
            <header>
            <div className="background">
              <span className="title">Food Security, Race, Poverty and Voting Tendencies</span>
              <nav className="help-menu">
              <Link to='/'>
              <div className="help-item">Home</div>
              </Link>
              |
              <Link to='/how-to'>
              <div className="help-item">How to use this tool</div>
              </Link> 
              |
              <Link to='/addtl'>
              <div className="help-item">Additional Resources</div>
              </Link>
              |
              <Link to='/about'> 
              <div className="help-item">About</div>
              </Link>
              | 
              <Link to='/contact'>
              <div className="help-item">Contact</div>
              </Link>
              </nav>
              <nav className="membership"><CheckLogin /></nav>
            </div>
          </header>      
        )
    }
}