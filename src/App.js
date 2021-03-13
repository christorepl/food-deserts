import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import ee from "event-emitter";
import API_BASE_URL from "./config";
import AppContext from "./Context/AppContext";
import AdditionalResources from "./Components/AdditionalResources/AdditionalResources";
import Footer from "./Components/Footer/Footer";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Login from "./Components/Login/Login";
import Search from "./Components/Search/Search";
import Home from "./Components/Home/Home";
import Charts from "./Components/Charts/Charts";
import ChartsSave from "./Components/ChartsSave/ChartsSave";
import StatePage from "./Components/StatePage/StatePage";
import SavedList from "./Components/SavedList/SavedList";
import SavePage from "./Components/SavePage/SavePage";
import NavBar from "./Components/NavBar/NavBar";
import Logout from "./Components/Logout/Logout";
import Map from "./Components/Map/Map";
import Notification from "./Components/Notification/Notification";

const emitter = new ee();

class App extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      isNotificationHidden: true,
      right: -500,
      navbarToggle: false,
      type: null,
      message: null,
      currentSaveResults: [],
      statesData: [],
      userSaves: [],
      allStates: [],
      saveData: [],
      selectedStates: [],
      stateResults: [],
      new_save_name: null,
      isAuthenticated: false,
      saveName: null,
      user_name: null,
      email: null,
      password: null,
    };

    this.timeout = null;

    emitter.on("notification", (type, message) => {
      this.onRenderNotification(type, message);
    });
  }

  notify = (type, message) => {
    emitter.emit("notification", type, message);
  };

  async componentDidMount() {
    const {
      isNotificationHidden,
      right,
      type,
      message,
      navbarToggle,
      currentSaveResults,
      new_save_name,
      password,
      email,
      user_name,
      saveName,
      stateResults,
      userSaves,
      selectedStates,
      saveData,
      statesData,
      allStates,
      isAuthenticated,
    } = this.context;
    this.setState({
      isNotificationHidden,
      right,
      type,
      message,
      navbarToggle,
      currentSaveResults,
      new_save_name,
      password,
      email,
      user_name,
      saveName,
      stateResults,
      userSaves,
      selectedStates,
      saveData,
      statesData,
      allStates,
      isAuthenticated,
    });
    this.checkAuth();
    this.updateCovidData();
    this.setName(this.state.user_name);
  }

  async populateUserSaves() {
    try {
      const response = await fetch(API_BASE_URL + "api/save/saved_search/", {
        method: "GET",
        headers: {
          jwt_token: localStorage.jwt_token,
        },
      });

      const parseRes = await response.json();
      parseRes[0].save_name
        ? this.setState({
            userSaves: parseRes,
          })
        : this.setState({
            userSaves: [],
          });
    } catch (err) {
      console.error(err.message);
    }
  }

  async checkAuth() {
    try {
      const response = await fetch(API_BASE_URL + "auth/verify", {
        method: "GET",
        headers: {
          jwt_token: localStorage.jwt_token,
        },
      });
      const parseRes = await response.json();
      if (parseRes.status === true) {
        this.setState({
          user_name: parseRes.user_name,
        });
        this.setState({
          isAuthenticated: true,
        });
        await this.populateUserSaves();
      } else {
        this.setState({
          isAuthenticated: false,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  async updateCovidData() {
    try {
      const response = await fetch(API_BASE_URL + "api/state/all");
      const allStates = await response.json();
      this.setState({
        allStates,
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  deleteSave = async (save_name, e) => {
    e.preventDefault();
    const body = {
      save_name,
    };

    try {
      const response = await fetch(
        API_BASE_URL + "api/save/saved_search/" + save_name,
        {
          method: "DELETE",
          headers: {
            jwt_token: localStorage.jwt_token,
          },
          body,
        }
      );
      const parseRes = await response.json();
      const { type, msg } = parseRes;
      this.notify(type, msg);
      this.populateUserSaves();
      this.props.history.push("/saved-search");
    } catch (err) {
      console.error(err.message);
    }
  };

  setUpdatedSaveName = (new_save_name) => {
    this.setState({
      new_save_name,
    });
  };

  updateSaveName = async (e, save_name) => {
    e.preventDefault();
    const { new_save_name } = this.state;
    const body = {
      new_save_name,
    };
    try {
      const response = await fetch(
        API_BASE_URL + "api/save/saved_search/" + save_name,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            jwt_token: localStorage.jwt_token,
          },
          body: JSON.stringify(body),
        }
      );
      const parseRes = await response.json();
      const { type, msg } = parseRes;
      this.notify(type, msg);

      if (type === "WARNING" || "DANGER" || "INFO") {
        this.notify(type, msg);
      } else {
        this.populateUserSaves();
        this.notify(type, msg);
        this.props.history.push("/saved-search");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  saveSearch = async (e) => {
    e.preventDefault();

    try {
      const save_name = this.state.saveName;
      const state_names = this.state.selectedStates.map((state) => state.label);
      const fips = this.state.selectedStates.map((state) => state.value);
      const body = {
        save_name,
        state_names,
        fips,
      };

      const response = await fetch(API_BASE_URL + "api/save/saved_search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          jwt_token: localStorage.jwt_token,
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      const { type, msg } = parseRes;
      if (type === "WARNING" || "DANGER" || "INFO") {
        this.notify(type, msg);
      } else {
        this.populateUserSaves();
        this.notify(type, msg);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  setSaveName = (saveName) => {
    this.setState({
      saveName,
    });
  };

  setEmail = (email) => {
    //updates state to reflect name written in the login field or create account field
    this.setState({
      email,
    });
  };

  setName = (user_name) => {
    //update state to reflect name in respective forms
    this.setState({
      user_name,
    });
  };

  setPassword = (password) => {
    //updates state to reflect the password written in the login field or create account field
    this.setState({
      password,
    });
  };

  handleStateSelection = (selectedStates) => {
    //whenever a user selects a state in the menu, this array is updated and used by the
    this.setState({
      selectedStates,
    });
  };

  fetchFips = async (e) => {
    e.preventDefault();

    //create an array that contains the fips code for each state the user wants to search

    if (!this.state.selectedStates.length) {
      this.notify(
        "INFO",
        "You must select at one or more states to run a search!"
      );
      return;
    } else {
      let statesToSearch = this.state.selectedStates.map(
        (state) => state.value
      );
      let queryURL = API_BASE_URL + "api/state/search?fips=" + statesToSearch;
      try {
        const response = await fetch(queryURL);
        const parseRes = await response.json();
        const { stateResults, type, msg } = parseRes;
        this.setState({
          stateResults,
        });
        this.notify(type, msg);
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  runSaveSearch = async (fips) => {
    //because the psql table sends up the fips as a string, we must turn it into an array so the fetch function works properly with the given fips
    const fipsString = fips
      .replaceAll('"', "")
      .replaceAll("{", "")
      .replaceAll("}", "")
      .replaceAll("[", "")
      .replaceAll("]", "");
    const fipsIds = fipsString.split(",");
    let fipsArray = [];
    for (let i = 0; i < fipsIds.length; i++) {
      fipsArray.push({
        value: fipsIds[i],
      });
    }
    let queryURL;
    const statesToSearch = fipsArray.map((state) => parseInt(state.value));
    queryURL = API_BASE_URL + "api/state/search?fips=" + statesToSearch;
    try {
      const response = await fetch(queryURL);
      const currentSaveResults = await response.json();
      this.setState({
        currentSaveResults,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  loginUser = async (attempt, user_name, type, msg) => {
    // logs in the user
    if (attempt === "login" || attempt === "create") {
      this.notify(type, msg);
      this.setState({
        isAuthenticated: true,
        user_name,
      });
      this.populateUserSaves();
    } else {
      this.notify(type, msg);
      this.setState({
        isAuthenticated: false,
      });
    }
  };

  logout = () => {
    localStorage.removeItem("jwt_token");
    this.notify("SUCCESS", "User is now logged out");
    this.setState({
      isAuthenticated: false,
      user_name: null,
      userSaves: [],
      statesData: [],
      selectedStates: [],
      saveData: [],
      saveName: null,
      email: null,
      password: null,
      stateResults: [],
    });
    this.props.history.push("/");
  };

  NavBarToggle = () => {
    this.setState({
      navbarToggle: !this.state.navbarToggle,
    });
  };

  onRenderNotification = (type, message) => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.setState(
        {
          // isNotificationHidden: !this.state.isNotificationHidden,
          right: -500,
          type,
          message,
        },
        () => {
          this.timeout = setTimeout(() => {
            this.renderNotification(type, message);
          }, 500);
        }
      );
    } else {
      this.renderNotification(type, message);
    }
  };

  renderNotification = (type, message) => {
    this.setState(
      {
        // isNotificationHidden: !this.state.isNotificationHidden,
        right: 10,
        type,
        message,
      },
      () => {
        this.timeout = setTimeout(() => {
          this.setState({
            // isNotificationHidden: !this.state.isNotificationHidden,
            right: -500,
            type: null,
            message: null,
          });
        }, 3000);
      }
    );
  };

  render() {
    const value = {
      isNotificationHidden: this.state.isNotificationHidden,
      right: this.state.right,
      type: this.state.type,
      message: this.state.message,
      new_save_name: this.state.new_save_name,
      isAuthenticated: this.state.isAuthenticated,
      allStates: this.state.allStates,
      userSaves: this.state.userSaves,
      statesData: this.state.statesData,
      saveData: this.state.saveData,
      user_name: this.state.user_name,
      saveName: this.state.saveName,
      email: this.state.email,
      password: this.state.password,
      selectedStates: this.state.selectedStates,
      stateResults: this.state.stateResults,
      currentSaveResults: this.state.currentSaveResults,
      navbarToggle: this.state.navbarToggle,
      NavBarToggle: this.NavBarToggle,
      runSaveSearch: this.runSaveSearch,
      setUpdatedSaveName: this.setUpdatedSaveName,
      updateSaveName: this.updateSaveName,
      deleteSave: this.deleteSave,
      saveSearch: this.saveSearch,
      setSaveName: this.setSaveName,
      loginUser: this.loginUser,
      fetchFips: this.fetchFips,
      handleStateSelection: this.handleStateSelection,
      setPassword: this.setPassword,
      setName: this.setName,
      setEmail: this.setEmail,
      logout: this.logout,
    };
    return (
      <div>
        <AppContext.Provider value={value}>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <NavBar />
          <Notification />
          <div className="page">
            <Route path="/logout" component={Logout} />
            <Route exact path="/charts" component={Charts} />
            <Route exact path="/save-charts" component={ChartsSave} />
            <Route exact path="/state-selection" component={Map} />
            <Route exact path="/state/:fips" component={StatePage} />
            <Route exact path="/home" component={Home} />
            <Route exacth path="/search" component={Search} />
            <Route exact path="/addtl" component={AdditionalResources} />
            <Route exact path="/create-account" component={CreateAccount} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/saved-search" component={SavedList} />
            <Route exact path="/saved-search/:save_name" component={SavePage} />
          </div>
        </AppContext.Provider>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
