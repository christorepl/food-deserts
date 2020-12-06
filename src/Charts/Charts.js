import React from 'react'
import { Bar } from 'react-chartjs-2'
import AppContext from '../Context/AppContext'


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
                    backgroundColor: 'yellow'
                },
                {
                    label: 'Fatality Rate of C19 Infection',
                    data: covidDeathRate,
                    backgroundColor: 'green'
                }
            ]
        }
        

        const foodChartData = {
            labels,
            datasets: [
                {
                    label: 'Rate of food insecure households',
                    data: foodInsecurity,
                    backgroundColor: 'green'
                }
            ]
        }

        const povertyChartData = {
            labels,
            datasets: [
                {
                    label: 'Rate of Poverty',
                    data: poverty,
                    backgroundColor: 'orange'
                }
            ]
        }

        const povertyVsFoodChartData = {
            labels,
            datasets: [
                {
                    label: 'Rate of Poverty',
                    data: poverty,
                    backgroundColor: 'purple'
                },
                {
                    label: 'Rate of food insecure Households',
                    data: foodInsecurity,
                    backgroundColor: 'black'
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
                },
                {
                    label: 'Biden vote Rate',
                    data: biden,
                    backgroundColor: 'blue'
                }
            ]
        }

        
        const raceChartData = {
            labels,
            datasets: [
                {
                    label: 'Black',
                    data: black,
                    backgroundColor: 'purple',
                },
                {
                    label: 'White',
                    data: white,
                    backgroundColor: 'orange'
                },
                {
                    label: 'Hispanic',
                    data: hispanic,
                    backgroundColor: 'gray'
                },
                {
                    label: 'Asian',
                    data: asian,
                    backgroundColor: 'darkblue'
                },
                {
                    label: 'Mixed Race',
                    data: mixed,
                    backgroundColor: 'green'
                },
                {
                    label: 'Other',
                    data: other,
                    backgroundColor: 'magenta'
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
                },
                {
                    label: 'Biden vote Rate',
                    data: biden,
                    backgroundColor: 'blue'
                },
                {
                    label: 'Black',
                    data: black,
                    backgroundColor: 'purple',
                },
                {
                    label: 'White',
                    data: white,
                    backgroundColor: 'orange'
                },
                {
                    label: 'Hispanic',
                    data: hispanic,
                    backgroundColor: 'gray'
                },
                {
                    label: 'Asian',
                    data: asian,
                    backgroundColor: 'darkblue'
                }
            ]
        }
        


        return(
            <div className="chart">
                <div className="electionChart">
                <Bar
                    data={electionChartData}
                    width={100}
                    height={100}
                    options={{ maintainAspectRatio: true }}
                />
                </div>
                <div className="raceChart">
                <Bar 
                    data={raceChartData}
                    width={50}
                    height={20}
                    options={{ maintainAspectRatio: true }}
                />
                </div>
                <div className="covidChart">
                    <Bar
                        data={covidChartData}
                        width={1}
                        height={1}
                        options={{ maintainAspectRatio: true }}
                    />
                </div>
                <div className="povertyChart">
                <Bar
                    data={povertyChartData}
                    width={50}
                    height={20}
                    options={{ maintainAspectRatio: true }}
                />
                </div>
                <div className="foodChart">
                <Bar
                    data={foodChartData}
                    width={500}
                    height={300}
                    options={{ maintainAspectRatio: false }}
                />
                </div>
                <Bar
                    data={raceVsElectionChartData}
                    height={200}
                    options={{ maintainAspectRatio: true }}
                />
                <Bar
                    data={povertyVsFoodChartData}
                    height={200}
                    options={{ maintainAspectRatio: true }}
                />
            </div>

        )
    }
}