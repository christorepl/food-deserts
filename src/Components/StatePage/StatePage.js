import React from "react";
import { Redirect } from "react-router-dom";
import { Pie, Bar } from "react-chartjs-2";
import AppContext from "../../Context/AppContext";

export default class StatePage extends React.Component {
  static contextType = AppContext;

  currentState = this.context.allStates.find(
    (states) => parseInt(states.fips) === parseInt(this.props.match.params.fips)
  );

  render() {
    let electionData = [this.currentState.trump, this.currentState.biden];

    const electionChartData = {
      labels: ["Trump", "Biden"],
      datasets: [
        {
          label: "2020 Election Results",
          data: electionData,
          backgroundColor: ["red", "blue"],
          borderColor: ["black", "black"],
          borderWidth: [0.5, 0.5],
        },
      ],
    };

    const { covid_rate, covid_fatality_rate } = this.currentState;

    let covidInfectionData = [parseInt(covid_rate), 100 - parseInt(covid_rate)];

    let covidDeathData = [covid_fatality_rate, 100 - covid_fatality_rate];

    const covidInfectionChartData = {
      labels: ["Diagnosed with COVID", "Not Diagnosed with COVID"],
      datasets: [
        {
          label: "COVID Infection Rate",
          data: covidInfectionData,
          backgroundColor: ["yellow", "green"],
          borderColor: ["black", "black"],
          borderWidth: [0.5, 0.5],
        },
      ],
    };

    const covidDeathChartData = {
      labels: ["COVID Fatality Rate", "COVID Survival Rate"],
      datasets: [
        {
          label: "COVID Fatality Rate",
          data: covidDeathData,
          backgroundColor: ["red", "purple"],
          borderColor: ["black", "black"],
          borderWidth: [0.5, 0.5],
        },
      ],
    };

    const foodInsecurityData = [
      this.currentState.food_insecurity_rate,
      100 - this.currentState.food_insecurity_rate,
    ];

    const foodInsecurityChartData = {
      labels: ["Food insecure households", "Food secure households"],
      datasets: [
        {
          label: "Food Insecurity Rate",
          data: foodInsecurityData,
          backgroundColor: ["brown", "yellow"],
          borderColor: ["black", "black"],
          borderWidth: [0.5, 0.5],
        },
      ],
    };

    const raceData = [
      this.currentState.black,
      this.currentState.white,
      this.currentState.hispanic,
      this.currentState.asian,
      this.currentState.other,
      this.currentState.mixed_race,
    ];

    const raceChartData = {
      labels: [
        "Black",
        "White",
        "Hispanic",
        "Asian",
        "Other Race",
        "Mixed Race",
      ],
      datasets: [
        {
          label: "Race Demographics",
          data: raceData,
          backgroundColor: [
            "magenta",
            "yellow",
            "purple",
            "blue",
            "red",
            "cyan",
          ],
          borderColor: ["black", "black", "black", "black", "black", "black"],
          borderWidth: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
        },
      ],
    };

    const povertyData = [
      this.currentState.poverty_rate,
      100 - this.currentState.poverty_rate,
    ];

    const povertyChartData = {
      labels: ["At or Below Poverty Line", "Above Poverty Line"],
      datasets: [
        {
          label: "Poverty Rate",
          data: povertyData,
          backgroundColor: ["brown", "green"],
          borderColor: ["black", "black"],
          borderWidth: [0.5, 0.5],
        },
      ],
    };

    const povertyRateData = [this.currentState.poverty_rate];
    const foodInsecurityRateData = [this.currentState.food_insecurity_rate];
    const covidRateData = [covid_rate];
    const covidFRateData = [covid_fatality_rate];
    const bData = [this.currentState.black];
    const wData = [this.currentState.white];
    const aData = [this.currentState.asian];
    const hData = [this.currentState.hispanic];
    const mData = [this.currentState.mixed_race];
    const oData = [this.currentState.other];
    const tData = [this.currentState.trump];
    const biData = [this.currentState.biden];

    const compiledChartData = {
      labels: [`${this.currentState.state_name} Data`],
      datasets: [
        {
          label: "Poverty Rate",
          data: povertyRateData,
          backgroundColor: ["seagreen"],
          borderColor: ["black"],
          borderWidth: [0.5, 0.5],
        },
        {
          label: "Black",
          data: bData,
          backgroundColor: ["purple"],
          borderColor: ["black"],
          borderWidth: [0.5],
        },
        {
          label: "White",
          data: wData,
          backgroundColor: ["orange"],
          borderColor: ["black"],
          borderWidth: [0.5],
        },
        {
          label: "Asian",
          data: aData,
          backgroundColor: ["darkblue"],
          borderColor: ["black"],
          borderWidth: [0.5],
        },
        {
          label: "Hispanic",
          data: hData,
          backgroundColor: ["gray"],
          borderColor: ["black"],
          borderWidth: [0.5],
        },
        {
          label: "Mixed Race",
          data: mData,
          backgroundColor: ["green"],
          borderColor: ["black"],
          borderWidth: [0.5],
        },
        {
          label: "Other Race",
          data: oData,
          backgroundColor: ["magenta"],
          borderColor: ["black"],
          borderWidth: [0.5],
        },
        {
          label: "Food Insecurity Rate",
          data: foodInsecurityRateData,
          backgroundColor: ["slateblue"],
          borderColor: ["black"],
          borderWidth: [0.5, 0.5],
        },
        {
          label: "COVID Infection Rate",
          data: covidRateData,
          backgroundColor: ["yellow"],
          borderColor: ["black"],
          borderWidth: [0.5, 0.5],
        },
        {
          label: "COVID Fatality Rate",
          data: covidFRateData,
          backgroundColor: ["brown"],
          borderColor: ["black"],
          borderWidth: [0.5],
        },
        {
          label: "Trump Vote Rate",
          data: tData,
          backgroundColor: ["red"],
          borderColor: ["black"],
          borderWidth: [0.5, 0.5],
        },
        {
          label: "Biden Vote Rate",
          data: biData,
          backgroundColor: ["blue"],
          borderColor: ["black"],
          borderWidth: [0.5],
        },
      ],
    };

    return (
      <>
        {this.currentState ? (
          <div className="state-page">
            <h1> {this.currentState.state_name} </h1>
            <p className="data-disclaimer">
              All data points are represented as a percentage
            </p>
            <div className="state-charts-container">
              <div className="state-chart-container">
                <Bar
                  data={compiledChartData}
                  height={400}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                  }}
                />
              </div>
              <div className="state-chart-container">
                <Pie
                  data={covidInfectionChartData}
                  height={150}
                  options={{
                    maintainAspectRatio: false,
                  }}
                />
              </div>
              <div className="state-chart-container">
                <Pie
                  data={covidDeathChartData}
                  height={150}
                  options={{
                    maintainAspectRatio: false,
                  }}
                />
              </div>
              <div className="state-chart-container">
                <Pie
                  data={foodInsecurityChartData}
                  height={150}
                  options={{
                    maintainAspectRatio: false,
                  }}
                />
              </div>
              <div className="state-chart-container">
                <Pie
                  data={raceChartData}
                  height={150}
                  options={{
                    maintainAspectRatio: false,
                  }}
                />
              </div>
              <div className="state-chart-container">
                <Pie
                  data={povertyChartData}
                  height={150}
                  options={{
                    maintainAspectRatio: false,
                  }}
                />
              </div>
              <div className="state-chart-container">
                <Pie
                  data={electionChartData}
                  height={150}
                  options={{
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </div>
            <div className="state-page-container">
              <div className="state-page-data-container">
                <h3> Racial Demographics : </h3>
                <li key={`black${this.currentState.fips}`}>
                  Black: {this.currentState.black} %
                </li>
                <li
                  className="ranking-list"
                  key={`rankingblack${this.currentState.ranking_black}`}
                >
                  Ranking: {this.currentState.ranking_black}
                  /51
                </li>
                <li key={`white${this.currentState.fips}`}>
                  White: {this.currentState.white} %
                </li>
                <li
                  className="ranking-list"
                  key={`rankingwhite${this.currentState.ranking_white}`}
                >
                  Ranking: {this.currentState.ranking_white}
                  /51
                </li>
                <li key={`asian${this.currentState.fips}`}>
                  Asian: {this.currentState.asian} %
                </li>
                <li
                  className="ranking-list"
                  key={`rankingasian${this.currentState.ranking_asian}`}
                >
                  Ranking: {this.currentState.ranking_asian}
                  /51
                </li>
                <li key={`hispanic${this.currentState.fips}`}>
                  Hispanic: {this.currentState.hispanic} %
                </li>
                <li
                  className="ranking-list"
                  key={`rankinghispanic${this.currentState.ranking_hispanic}`}
                >
                  Ranking: {this.currentState.ranking_hispanic}
                  /51
                </li>
                <li key={`other${this.currentState.fips}`}>
                  Other Race: {this.currentState.other} %
                </li>
                <li
                  className="ranking-list"
                  key={`rankingother${this.currentState.ranking_other}`}
                >
                  Ranking: {this.currentState.ranking_other}
                  /51
                </li>
                <li key={`mixed${this.currentState.fips}`}>
                  Mixed Race: {this.currentState.mixed_race} %
                </li>
                <li
                  className="ranking-list"
                  key={`rankingmixed${this.currentState.ranking_mixed}`}
                >
                  Ranking: {this.currentState.ranking_mixed}
                  /51
                </li>
              </div>
              <div className="state-page-data-container">
                <h3> COVID: </h3>
                <li key={`covid_infections${this.currentState.fips}`}>
                  Number of confirmed COVID cases:
                  {new Intl.NumberFormat().format(
                    this.currentState.covid_infections
                  )}
                </li>
                <li
                  className="ranking-list"
                  key={`ranking${this.currentState.ranking_covid_infections}`}
                >
                  Ranking: {this.currentState.ranking_covid_infections}
                  /51
                </li>
                <li key={`covid_rate${this.currentState.fips}`}>
                  Rate of COVID infections: {this.currentState.covid_rate} %
                </li>
                <li
                  className="ranking-list"
                  key={`rankingcr${this.currentState.ranking_covid_rate}`}
                >
                  Ranking: {this.currentState.ranking_covid_rate}
                  /51
                </li>
                <li key={`covid_deaths${this.currentState.fips}`}>
                  Number of COVID - related deaths:
                  {new Intl.NumberFormat().format(
                    this.currentState.covid_deaths
                  )}
                </li>
                <li
                  className="ranking-list"
                  key={`rankingcd${this.currentState.ranking_covid_deaths}`}
                >
                  Ranking: {this.currentState.ranking_covid_deaths}
                  /51
                </li>
                <li key={`covid_fatality_rate${this.currentState.fips}`}>
                  Fatality rate of COVID:{" "}
                  {this.currentState.covid_fatality_rate} %
                </li>
                <li
                  className="ranking-list"
                  key={`rankingcfr${this.currentState.ranking_covid_fatality_rate}`}
                >
                  Ranking: {this.currentState.ranking_covid_fatality_rate}
                  /51
                </li>
              </div>
              <div className="state-page-data-container">
                <h3> Election Results: </h3>
                <li key={`trump${this.currentState.fips}`}>
                  Donald Trump: {this.currentState.trump} %
                </li>
                <li
                  className="ranking-list"
                  key={`rankingrepub${this.currentState.ranking_repub}`}
                >
                  Ranking: {this.currentState.ranking_repub}
                  /51
                </li>
                <li key={`biden${this.currentState.fips}`}>
                  Joe Biden: {this.currentState.biden} %
                </li>
                <li
                  className="ranking-list"
                  key={`rankingdem${this.currentState.ranking_dem}`}
                >
                  Ranking: {this.currentState.ranking_dem}
                  /51
                </li>
              </div>
              <div className="state-page-data-container">
                <h3> Poverty Rate: </h3>
                <li key={`poverty${this.currentState.fips}`}>
                  Poverty Rate: {this.currentState.poverty_rate} %
                </li>
                <li
                  className="ranking-list"
                  key={`rankingpov${this.currentState.ranking_pov}`}
                >
                  Ranking: {this.currentState.ranking_pov}
                  /51
                </li>
                <h3> Food Insecurity Rate: </h3>
                <li key={`foodInsecurity${this.currentState.fips}`}>
                  Household Food Insecurity Rate:
                  {this.currentState.food_insecurity_rate} %
                </li>
                <li
                  className="ranking-list"
                  key={`rankingfi${this.currentState.ranking_fi}`}
                >
                  Ranking: {this.currentState.ranking_fi}
                  /51
                </li>
              </div>
            </div>
          </div>
        ) : (
          <>
            alert("There is no US state with that fips code. You shouldn't be
            here! Alerts are so ugly! Redirecting...")
            <Redirect to="/states" />
          </>
        )}
      </>
    );
  }
}
