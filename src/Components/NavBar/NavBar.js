import React from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import * as AiIcons from 'react-icons/ai'
import * as SiIcons from 'react-icons/si'
import * as GrIcons from 'react-icons/gr'
import AppContext from '../../Context/AppContext'
import logo from '../../imgs/logo.png'

export default class NavBar extends React.Component {
    static contextType = AppContext

    render() {

        const NavBarMenu = [
            {
                title: 'Home',
                path: '/home',
                icon: <AiIcons.AiOutlineHome/>,
                className: 'nav-text'
            },
            {
                title: 'Search',
                path: '/search',
                icon: <AiIcons.AiOutlineSearch/>,
            },
            {
                title: 'Select from Map',
                path: '/state-selection',
                icon: <SiIcons.SiOpenstreetmap/>
            },
            {
                title: !this.context.isAuthenticated ? 'Create Account' : 'My Saves',
                path: !this.context.isAuthenticated ? '/create-account' : '/saved-search',
                icon: !this.context.isAuthenticated ? <AiIcons.AiOutlineUserAdd/> : <AiIcons.AiOutlineUser/>,
            },
            {
                title: !this.context.isAuthenticated ? 'Login' : 'Logout',
                path: !this.context.isAuthenticated ? '/login' : '/logout',
                icon: !this.context.isAuthenticated ? <AiIcons.AiOutlineLogin/> : <AiIcons.AiOutlineLogout/>,
            },
            {
                title: 'About',
                path: '/about',
                icon: <AiIcons.AiOutlineQuestionCircle/>,
            },
            {
                title: 'Contact',
                path: '/contact',
                icon: <AiIcons.AiOutlineContacts/>,
            },
            {
                title: 'Additional Resources',
                path: '/addtl',
                icon: <AiIcons.AiOutlineFile/>
            }
        
        ]

        const toggleClass = this.context.navbarToggle ? 'nav-menu active' : 'nav-menu'
        return(
            <>
            <IconContext.Provider value={{color: 'white'}}>
                <div className="navbar">
                    <div className="nav-bars">
                        <Link to="#" className="navbar-icons">
                            <AiIcons.AiOutlineMenu onClick={() => this.context.NavBarToggle()}/>
                        </Link>
                    </div>
                    <div className="nav-logo">
                        <img src={logo} alt="a digital image of a clenched fist with the phrase 'food justice now' in stencil lettering below it, against a backdrop of a crossed fork and knife "/>
                    </div>
                </div>
                    <nav className={toggleClass}>
                        <ul className="navbar-menu-items" onClick={() => this.context.NavBarToggle()}>
                            <li className="navbar-toggle">
                                <Link to="#" className="navbar-icons">
                                    <AiIcons.AiOutlineClose/>
                                </Link>
                            </li>
                            {NavBarMenu.map((item, i) => {
                                return (
                                    <li key={i} className="nav-text">
                                        <Link to={item.path}>
                                                {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
            </IconContext.Provider>
            </>
        )
    }
}