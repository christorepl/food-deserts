import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import AppContext from "../../Context/AppContext";
import logo from "../../imgs/logo.png";

export default class NavBar extends React.Component {
  static contextType = AppContext;

  render() {
    const NavBarMenu = [
      {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiOutlineHome />,
        className: "nav-text",
      },
      {
        title: !this.context.isAuthenticated ? "Login" : "Logout",
        path: !this.context.isAuthenticated ? "/login" : "/logout",
        icon: !this.context.isAuthenticated ? (
          <AiIcons.AiOutlineLogin />
        ) : (
          <AiIcons.AiOutlineLogout />
        ),
      },
      {
        title: !this.context.isAuthenticated ? "Create Account" : "My Saves",
        path: !this.context.isAuthenticated
          ? "/create-account"
          : "/saved-search",
        icon: !this.context.isAuthenticated ? (
          <AiIcons.AiOutlineUserAdd />
        ) : (
          <AiIcons.AiOutlineUser />
        ),
      },
      {
        title: "Search",
        path: "/search",
        icon: <AiIcons.AiOutlineSearch />,
      },
      {
        title: "Select from Map",
        path: "/state-selection",
        icon: <SiIcons.SiOpenstreetmap />,
      },
      {
        title: "Additional Resources",
        path: "/addtl",
        icon: <AiIcons.AiOutlineFile />,
      },
    ];

    const NavBarContact = [
      {
        title: "My LinkedIn",
        path: "https://www.linkedin.com/in/christopheredwardobrien/",
        icon: <AiIcons.AiOutlineLinkedin />,
      },
      {
        title: "My GitHub",
        path: "https://github.com/christorepl",
        icon: <AiIcons.AiOutlineGithub />,
      },
    ];

    const toggleClass = this.context.navbarToggle
      ? "nav-menu active"
      : "nav-menu";
    return (
      <>
        <IconContext.Provider
          value={{
            color: "white",
          }}
        >
          <div className="navbar">
            <div className="nav-bars">
              <Link to="#" className="navbar-icons">
                <AiIcons.AiOutlineMenu
                  onClick={() => this.context.NavBarToggle()}
                />
              </Link>
            </div>
            <div className="nav-logo">
              <img
                src={logo}
                alt="a clenched fist with the phrase 'food justice now' in stencil lettering below it, against a backdrop of a crossed fork and knife"
              />
            </div>
          </div>
          <nav className={toggleClass}>
            <ul
              className="navbar-menu-items"
              onClick={() => this.context.NavBarToggle()}
            >
              <li className="navbar-toggle">
                <Link to="#" className="navbar-icons">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {NavBarMenu.map((item, i) => {
                return (
                  <li key={i} className="nav-text">
                    <Link to={item.path}>
                      {item.icon} <span> {item.title} </span>
                    </Link>
                  </li>
                );
              })}
              {NavBarContact.map((item, i) => {
                return (
                  <li key={"contact" + i} className="nav-text">
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon} <span> {item.title} </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
}
