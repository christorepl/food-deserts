import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../Context/AppContext'
import UserUI from '../UserUI/UserUI'

export default class Header extends React.Component {
    static contextType = AppContext
    isAuthenticated = this.context.isAuthenticated


    render() {
    
        return (
            <header>
            <div className="background">
              <span className="title">Food Security, Race, Poverty and Voting Tendencies in the U.S.</span>
              <nav className="help-menu">
                <Link to='/'>
                  <div className="help-item">Home</div>
                </Link>
                |
                <Link to="/search">
                  <div className="help-item">Search</div>
                </Link>
                |
                <Link to="/state-selection">
                  <div className="help-item">Inspect Individual States</div>
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
              <nav className="membership"><UserUI /></nav>
            </div>
          </header>      
        )
    }
}