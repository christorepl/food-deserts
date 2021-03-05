import React from "react";
import { withRouter } from "react-router-dom";
import AppContext from "../../Context/AppContext";
import USAMap from "react-usa-map";

class Map extends React.Component {
  static contextType = AppContext;

  //the usa map plugin needs a workaround for clicking DC to work. if a state has its own clickHandler it uses that, all other states default to a defined function. for some reason the color works for DC2 but not the clickHandler, so
  DCHandler = () => {
    this.props.history.push("/state/11");
  };

  statesFilling = () => {
    return {
      AL: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/1"),
      },
      AK: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/2"),
      },
      AZ: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/4"),
      },
      AR: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/5"),
      },
      CA: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/6"),
      },
      CO: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/8"),
      },
      CT: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/9"),
      },
      DC2: {
        fill: "blue",
      },
      DE: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/10"),
      },
      FL: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/12"),
      },
      GA: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/13"),
      },
      HI: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/15"),
      },
      ID: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/16"),
      },
      IL: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/17"),
      },
      IN: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/18"),
      },
      IA: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/19"),
      },
      KS: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/20"),
      },
      KY: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/21"),
      },
      LA: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/22"),
      },
      ME: {
        fill: "purple",
        clickHandler: () => this.props.history.push("/state/23"),
      },
      MD: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/24"),
      },
      MA: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/25"),
      },
      MI: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/26"),
      },
      MN: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/27"),
      },
      MS: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/28"),
      },
      MO: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/29"),
      },
      MT: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/30"),
      },
      NE: {
        fill: "purple",
        clickHandler: () => this.props.history.push("/state/31"),
      },
      NV: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/32"),
      },
      NH: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/33"),
      },
      NJ: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/34"),
      },
      NM: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/35"),
      },
      NY: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/36"),
      },
      NC: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/37"),
      },
      ND: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/38"),
      },
      OH: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/39"),
      },
      OK: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/40"),
      },
      OR: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/41"),
      },
      PA: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/42"),
      },
      RI: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/44"),
      },
      SC: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/45"),
      },
      SD: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/46"),
      },
      TN: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/47"),
      },
      TX: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/48"),
      },
      UT: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/49"),
      },
      VT: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/50"),
      },
      VA: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/51"),
      },
      WA: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/53"),
      },
      WV: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/54"),
      },
      WI: {
        fill: "blue",
        clickHandler: () => this.props.history.push("/state/55"),
      },
      WY: {
        fill: "red",
        clickHandler: () => this.props.history.push("/state/56"),
      },
    };
  };

  render() {
    return (
      <div className="state-selection">
        <USAMap customize={this.statesFilling()} onClick={this.DCHandler} />
      </div>
    );
  }
}

export default withRouter(Map);
