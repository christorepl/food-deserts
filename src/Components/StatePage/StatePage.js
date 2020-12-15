import React from 'react'
import { Redirect } from 'react-router-dom'
import { Pie, Bar } from 'react-chartjs-2'
import AppContext from '../../Context/AppContext'

toast.configure();

export default class StatePage extends React.Component {
    static contextType = AppContext

    toastifyParams = {
        autoClose: 2500, 
        hideProgressBar: true, 
        position: "bottom-left",
        pauseOnHover: false,
        pauseOnFocusLoss: false
      }
    
    
    redirectMessage = () => {
       toast.error('That page does not exist. Redirected to states index page.', this.toastifyParams)
    }
    
    
    render() {
        const currentState = this.context.allStates.find(states => parseInt(states.fips) === parseInt(this.props.match.params.fips));

        let electionData = [currentState.trump, currentState.biden]
        
        const electionChartData = {
            labels: ['Trump', 'Biden'],
            datasets: [
                {
                    label: '2020 Election Results',
                    data: electionData,
                    backgroundColor: ['red', 'blue'],
                    borderColor: ['black', 'black'],
                    borderWidth: [.5,.5]
                }
            ]
        }
                
        const { covid_rate, covid_fatality_rate} = currentState
        
        let covidInfectionData = [parseInt(covid_rate), (100-parseInt(covid_rate))]

        let covidDeathData = [covid_fatality_rate, (100-covid_fatality_rate)]
        
        const covidInfectionChartData = {
            labels: ['Diagnosed with COVID', 'Not Diagnosed with COVID'],
            datasets: [
                {
                    label: 'COVID Infection Rate',
                    data: covidInfectionData,
                    backgroundColor: ['yellow', 'green'],
                    borderColor: ['black', 'black'],
                    borderWidth: [.5,.5]
                }
            ]
        }
        
        const covidDeathChartData = {
            labels: ['COVID Fatality Rate', 'COVID Survival Rate'],
            datasets: [
                {
                    label: 'COVID Fatality Rate',
                    data: covidDeathData,
                    backgroundColor: ['red', 'purple'],
                    borderColor: ['black', 'black'],
                    borderWidth: [.5,.5]
                }
            ]
        }
        
        const foodInsecurityData = [currentState.food_insecurity_rate, 100 - currentState.food_insecurity_rate]

        const foodInsecurityChartData = {
            labels: ['Food insecure households', 'Food secure households'],
            datasets: [
                {
                    label: 'Food Insecurity Rate',
                    data: foodInsecurityData,
                    backgroundColor: ['brown', 'yellow'],
                    borderColor: ['black', 'black'],
                    borderWidth: [.5,.5]
                }
            ]
        }

        const raceData = [currentState.black, currentState.white, currentState.hispanic, currentState.asian, currentState.other, currentState.mixed_race]

        const raceChartData = {
            labels: ['Black', 'White', 'Hispanic', 'Asian', 'Other Race', 'Mixed Race'],
            datasets: [
                {
                    label: 'Race Demographics',
                    data: raceData,
                    backgroundColor: ['magenta', 'yellow', 'purple', 'blue', 'red', 'cyan'],
                    borderColor: ['black', 'black', 'black', 'black', 'black', 'black'],
                    borderWidth: [.5,.5,.5,.5,.5,.5]
                }
            ]
        }

        const povertyData = [currentState.poverty_rate, 100 - currentState.poverty_rate]

        const povertyChartData = {
            labels: ['At or Below Poverty Line', 'Above Poverty Line'],
            datasets: [
                {
                    label: 'Poverty Rate',
                    data: povertyData,
                    backgroundColor: ['brown', 'green'],
                    borderColor: ['black', 'black'],
                    borderWidth: [.5,.5]
                }
            ]
        }

        const povertyRateData = [currentState.poverty_rate]
        const foodInsecurityRateData = [currentState.food_insecurity_rate]
        const covidRateData = [covid_rate]
        const covidFRateData = [covid_fatality_rate]
        const bData = [currentState.black]
        const wData = [currentState.white]
        const aData = [currentState.asian]
        const hData = [currentState.hispanic]
        const mData = [currentState.mixed_race]
        const oData = [currentState.other]
        const tData = [currentState.trump]
        const biData = [currentState.biden]

        
        const compiledChartData = {
            labels: [`${currentState.state_name} Data`],
            datasets: [
                {
                    label: 'Poverty Rate',
                    data: povertyRateData,
                    backgroundColor: ['seagreen'],
                    borderColor: ['black'],
                    borderWidth: [.5,.5]
                },
                {
                    label: 'Black',
                    data: bData,
                    backgroundColor: ['purple'],
                    borderColor: ['black'],
                    borderWidth: [.5]

                },
                {
                    label: 'White',
                    data: wData,
                    backgroundColor: ['orange'],
                    borderColor: ['black'],
                    borderWidth: [.5]

                },                {
                    label: 'Asian',
                    data: aData,
                    backgroundColor: ['darkblue'],
                    borderColor: ['black'],
                    borderWidth: [.5]

                },                {
                    label: 'Hispanic',
                    data: hData,
                    backgroundColor: ['gray'],
                    borderColor: ['black'],
                    borderWidth: [.5]

                },                {
                    label: 'Mixed Race',
                    data: mData,
                    backgroundColor: ['green'],
                    borderColor: ['black'],
                    borderWidth: [.5]

                },                {
                    label: 'Other Race',
                    data: oData,
                    backgroundColor: ['magenta'],
                    borderColor: ['black'],
                    borderWidth: [.5]

                },
                {
                    label: 'Food Insecurity Rate',
                    data: foodInsecurityRateData,
                    backgroundColor: ['slateblue'],
                    borderColor: ['black'],
                    borderWidth: [.5,.5]
                },
                {
                    label: 'COVID Infection Rate',
                    data: covidRateData,
                    backgroundColor: ['yellow'],
                    borderColor: ['black'],
                    borderWidth: [.5,.5]
                },
                {
                    label: 'COVID Fatality Rate',
                    data: covidFRateData,
                    backgroundColor: ['brown'],
                    borderColor: ['black'],
                    borderWidth: [.5]

                },
                {
                    label: 'Trump Vote Rate',
                    data: tData,
                    backgroundColor: ['red'],
                    borderColor: ['black'],
                    borderWidth: [.5,.5]
                },
                {
                    label: 'Biden Vote Rate',
                    data: biData,
                    backgroundColor: ['blue'],
                    borderColor: ['black'],
                    borderWidth: [.5]

                },
            ]
        }

        console.log()

        return (
            <>
            {currentState
            ?
            <div className="state-page">
                <h1>{currentState.state_name}</h1>
                <p className="data-disclaimer">All data points are represented as a percentage</p>
            <div className="state-charts-container">
                <div className="state-chart-container">
                    <Bar
                        data={compiledChartData}
                        height={350}
                        options={{ 
                        maintainAspectRatio: false,
                        scales: {yAxes: [{ticks:{beginAtZero: true}}]}
                    }}
                    />
                </div>
                <div className="state-chart-container">
                    <Pie
                        data={covidInfectionChartData}
                        height={200}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
                <div className="state-chart-container">
                    <Pie
                        data={covidDeathChartData}
                        height={200}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
                <div className="state-chart-container">
                    <Pie
                        data={foodInsecurityChartData}
                        height={200}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
                <div className="state-chart-container">
                    <Pie
                        data={raceChartData}
                        height={200}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
                <div className="state-chart-container">
                    <Pie
                        data={povertyChartData}
                        height={200}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
                <div className="state-chart-container">
                    <Pie 
                        data={electionChartData}
                        height={200}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
            </div>
                <div className="state-page-container">
                    <div className="state-page-data-container">
                        <h3>Racial Demographics:</h3>
                            <li key={`black${currentState.fips}`}>Black: {currentState.black}%</li>
                            <li className="ranking-list" key={`rankingblack${currentState.ranking_black}`}>Ranking: {currentState.ranking_black}/51</li>
                            <li key={`white${currentState.fips}`}>White: {currentState.white}%</li>
                            <li className="ranking-list" key={`rankingwhite${currentState.ranking_white}`}>Ranking: {currentState.ranking_white}/51</li>
                            <li key={`asian${currentState.fips}`}>Asian: {currentState.asian}%</li>
                            <li className="ranking-list" key={`rankingasian${currentState.ranking_asian}`}>Ranking: {currentState.ranking_asian}/51</li>
                            <li key={`hispanic${currentState.fips}`}>Hispanic: {currentState.hispanic}%</li>
                            <li className="ranking-list" key={`rankinghispanic${currentState.ranking_hispanic}`}>Ranking: {currentState.ranking_hispanic}/51</li>
                            <li key={`other${currentState.fips}`}>Other Race: {currentState.other}%</li>
                            <li className="ranking-list" key={`rankingother${currentState.ranking_other}`}>Ranking: {currentState.ranking_other}/51</li>
                            <li key={`mixed${currentState.fips}`}>Mixed Race: {currentState.mixed_race}%</li>
                            <li className="ranking-list" key={`rankingmixed${currentState.ranking_mixed}`}>Ranking: {currentState.ranking_mixed}/51</li>
                    </div>
                    <div className="state-page-data-container">
                        <h3>COVID:</h3>
                            <li key={`covid_infections${currentState.fips}`}>Number of confirmed COVID cases: {new Intl.NumberFormat().format(currentState.covid_infections)}</li>
                            <li className="ranking-list" key={`ranking${currentState.ranking_covid_infections}`}>Ranking: {currentState.ranking_covid_infections}/51</li>
                            <li key={`covid_rate${currentState.fips}`}>Rate of COVID infections: {currentState.covid_rate}%</li>
                            <li className="ranking-list" key={`rankingcr${currentState.ranking_covid_rate}`}>Ranking: {currentState.ranking_covid_rate}/51</li>
                            <li key={`covid_deaths${currentState.fips}`}>Number of COVID-related deaths: {new Intl.NumberFormat().format(currentState.covid_deaths)}</li>
                            <li className="ranking-list" key={`rankingcd${currentState.ranking_covid_deaths}`}>Ranking: {currentState.ranking_covid_deaths}/51</li>
                            <li key={`covid_fatality_rate${currentState.fips}`}>Fatality rate of COVID: {currentState.covid_fatality_rate}%</li>
                            <li className="ranking-list" key={`rankingcfr${currentState.ranking_covid_fatality_rate}`}>Ranking: {currentState.ranking_covid_fatality_rate}/51</li>
                    </div>
                    <div className="state-page-data-container">
                        <h3>Election Results:</h3>
                            <li key={`trump${currentState.fips}`}>Donald Trump: {currentState.trump}%</li>
                            <li className="ranking-list" key={`rankingrepub${currentState.ranking_repub}`}>Ranking: {currentState.ranking_repub}/51</li>
                            <li key={`biden${currentState.fips}`}>Joe Biden: {currentState.biden}%</li>
                            <li className="ranking-list" key={`rankingdem${currentState.ranking_dem}`}>Ranking: {currentState.ranking_dem}/51</li>
                    </div>
                    <div className="state-page-data-container">
                        <h3>Poverty Rate:</h3>
                            <li key={`poverty${currentState.fips}`}>Poverty Rate: {currentState.poverty_rate}%</li>
                            <li className="ranking-list" key={`rankingpov${currentState.ranking_pov}`}>Ranking: {currentState.ranking_pov}/51</li>
                            <h3>Food Insecurity Rate:</h3>
                            <li key={`foodInsecurity${currentState.fips}`}>Household Food Insecurity Rate: {currentState.food_insecurity_rate}%</li>
                            <li className="ranking-list" key={`rankingfi${currentState.ranking_fi}`}>Ranking: {currentState.ranking_fi}/51</li>
                    </div>
                </div>
            </div>
            :
            <>
            {this.redirectMessage()}
            <Redirect to="/states"/>
            </>
            }
            </>
        )
    }
}