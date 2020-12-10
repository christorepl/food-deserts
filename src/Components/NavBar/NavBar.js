import React from "react";
import { Route, withRouter } from 'react-router-dom'
import * as ReactNavbar from "react-responsive-animate-navbar";
import logo from '../../imgs/logo.png'

class NavBar extends React.Component {
  render() {
    return (
      <Route>
      <ReactNavbar.ReactNavbar
        color="rgb(164, 165, 81)"
        logo={logo}
        menu={[
          { name: "HOME", to: "/home" },
          { name: "SEARCH", to: "/search" },
          { name: "ABOUT ME", to: "/about" },
          { name: "CONTACT", to: "/contact" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />
      </Route>
    );
  }
}

export default withRouter(NavBar)