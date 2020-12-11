import React from 'react'
import { Bar } from 'react-chartjs-2'
import AppContext from '../../Context/AppContext'


export default class Charts extends React.Component {
    static contextType = AppContext
    render() {
        const labels = this.context.stateResults.map(state => state[0].state_abbrev)
        const trump = this.context.stateResults.map(state => state[0].trump)
        const biden = this.context.stateResults.map(state => state[0].biden)
        const black = this.context.stateResults.map(state => state[0].black)
        const white = this.context.stateResults.map(state => state[0].white)
        const hispanic = this.context.stateResults.map(state => state[0].hispanic)        
        const asian = this.context.stateResults.map(state => state[0].asian)
        const other = this.context.stateResults.map(state => state[0].other)        
        const mixed = this.context.stateResults.map(state => state[0].mixed_race)        
        const foodInsecurity = this.context.stateResults.map(state => state[0].food_insecurity_rate)
        const poverty = this.context.stateResults.map(state => state[0].poverty_rate)
        const covidInfections = this.context.stateResults.map(state => state[0].covid_infections)
        const population = this.context.stateResults.map(state => state[0].pop)
        const covidDeaths = this.context.stateResults.map(state => state[0].covid_deaths)
        let covidRates = []
        for (let i = 0; i < covidInfections.length; i++) {
            covidRates.push(new Intl.NumberFormat().format(covidInfections[i]/population[i] * 100))
        }
        let covidDeathRate = []
        for (let i =0; i < covidInfections.length; i++) {
            covidDeathRate.push(new Intl.NumberFormat().format(covidDeaths[i]/covidInfections[i] * 100))
        }

        const covidChartData = {
            labels,
            datasets: [
                {
                    label: 'Rate of C19 Infection',
                    data: covidRates,
                    backgroundColor: 'yellow',
                    borderColor: 'black',
                    borderWidth: .5
                },
                {
                    label: 'Fatality Rate of C19 Infection',
                    data: covidDeathRate,
                    backgroundColor: 'brown',
                    borderColor: 'black',
                    borderWidth: .5
                }
            ]
        }
        

        const foodChartData = {
            labels,
            datasets: [
                {
                    label: 'Rate of food insecure households',
                    data: foodInsecurity,
                    backgroundColor: 'slateblue',
                    borderColor: 'black',
                    borderWidth: .5
                }
            ]
        }

        const povertyChartData = {
            labels,
            datasets: [
                {
                    label: 'Rate of Poverty',
                    data: poverty,
                    backgroundColor: 'seagreen',
                    borderColor: 'black',
                    borderWidth: .5
                }
            ]
        }

        const povertyVsFoodChartData = {
            labels,
            datasets: [
                {
                    label: 'Rate of Poverty',
                    data: poverty,
                    backgroundColor: 'seagreen',
                    borderColor: 'black',
                    borderWidth: .5
                },
                {
                    label: 'Rate of food insecure Households',
                    data: foodInsecurity,
                    backgroundColor: 'slateblue',
                    borderColor: 'black',
                    borderWidth: .5
                }
            ]
        }

        const electionChartData = {
            labels,
            datasets: [
                {
                    label: 'Trump vote Rate',
                    data: trump,
                    backgroundColor: 'red',
                    borderColor: 'black',
                    borderWidth: .5

                },
                {
                    label: 'Biden vote Rate',
                    data: biden,
                    backgroundColor: 'blue',
                    borderColor: 'black',
                    borderWidth: .5
                },
            ],
        }

        
        const raceChartData = {
            labels,
            datasets: [
                {
                    label: 'Black',
                    data: black,
                    backgroundColor: 'purple',
                    borderColor: 'black',
                    borderWidth: .5
                },
                {
                    label: 'White',
                    data: white,
                    backgroundColor: 'orange',
                    borderColor: 'black',
                    borderWidth: .5
                },
                {
                    label: 'Hispanic',
                    data: hispanic,
                    backgroundColor: 'gray',
                    borderColor: 'black',
                    borderWidth: .5
                },
                {
                    label: 'Asian',
                    data: asian,
                    backgroundColor: 'darkblue',
                    borderColor: 'black',
                    borderWidth: .5
                },
                {
                    label: 'Mixed Race',
                    data: mixed,
                    backgroundColor: 'green',
                    borderColor: 'black',
                    borderWidth: .5
                },
                {
                    label: 'Other Race',
                    data: other,
                    backgroundColor: 'magenta',
                    borderColor: 'black',
                    borderWidth: .5
                }
            ]
        }

        const raceVsElectionChartData = {
            labels,
            datasets: [
                {
                    label: 'Trump vote Rate',
                    data: trump,
                    backgroundColor: 'red',
                    borderColor: 'black',
                    borderWidth: .5
                },
                {
                    label: 'Biden vote Rate',
                    data: biden,
                    backgroundColor: 'blue',
                    borderColor: 'black',
                    borderWidth: .5
                },
                {
                    label: 'Black',
                    data: black,
                    backgroundColor: 'purple',
                    borderColor: 'black',
                    borderWidth: .5
                },
                {
                    label: 'White',
                    data: white,
                    backgroundColor: 'orange',
                    borderColor: 'black',
                    borderWidth: .5
                }
            ]
        }

        return(
            <div className="charts">
                <p className="data-disclaimer">All data points are represented as a percentage</p>
                <div className="chart">
                <Bar
                    data={electionChartData}
                    height={400}
                    options={{ 
                        maintainAspectRatio: false,
                        scales: {yAxes: [{ticks:{beginAtZero: true}}]}
                    }}
                />
                </div>
                <div className="chart">
                <Bar 
                    data={raceChartData}
                    height={400}
                    options={{ 
                        maintainAspectRatio: false,
                        scales: {yAxes: [{ticks:{beginAtZero: true}}]}
                    }}
                />
                </div>
                <div className="chart">
                    <Bar
                        data={covidChartData}
                        height={400}
                        options={{ 
                        maintainAspectRatio: false,
                        scales: {yAxes: [{ticks:{beginAtZero: true}}]}
                    }}
                    />
                </div>
                <div className="chart">
                <Bar
                    data={povertyChartData}
                    height={300}
                    options={{ 
                        maintainAspectRatio: false,
                        scales: {yAxes: [{ticks:{beginAtZero: true}}]}
                    }}
                />
                </div>
                <div className="chart">
                <Bar
                    data={foodChartData}
                    height={300}
                    options={{ 
                        maintainAspectRatio: false,
                        scales: {yAxes: [{ticks:{beginAtZero: true}}]}
                    }}
                />
                </div>
                <div className="chart">
                <Bar
                    data={raceVsElectionChartData}
                    height={400}
                    options={{ 
                        maintainAspectRatio: false,
                        scales: {yAxes: [{ticks:{beginAtZero: true}}]}
                    }}
                />
                </div>
                <div className="chart">
                <Bar
                    data={povertyVsFoodChartData}
                    height={350}
                    options={{ 
                        maintainAspectRatio: false,
                        scales: {yAxes: [{ticks:{beginAtZero: true}}]}
                    }}
                />
                </div>
            </div>
        )
    }
}