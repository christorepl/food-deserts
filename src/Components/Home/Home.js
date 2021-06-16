import React from "react";
import { Link } from "react-router-dom";
import Map from "../../Components/Map/Map";
import AppContext from "../../Context/AppContext";

export default class Home extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <div className="homepage">
        <p>
          Food insecurity is an all too often overlooked issue in the United
          States. Racial minorities already had the highest rates of poverty and
          food insecurity, and now they have the highest rates of COVID
          infections and fatalities. The spread of COVID has highlighted
          America's racial and economic structural inequalities, and this app
          allows users to inspect the data relative to these intersections.
        </p>
        <p>
          I recommend checking out the
          <Link to="/addtl"> Additional Resources page </Link> for in depth
          statistical analysis of these intersections of inequality.
        </p>
        <p>
          If you wish to save your searches and quickly pull them up again, you
          can <Link to="/create-account"> create an account </Link> and save a
          search.
        </p>
        <p>
          Now that we have some perspective on the intent of this app,
          <Link to="/search">let's run a search</Link> or check out the map
          below!
        </p>
        <Map />
      </div>
    );
  }
}
