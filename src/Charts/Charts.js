import React from 'react'
import AppContext from '../Context/AppContext'
import { Bar, Line, Radar, PolarArea, Doughnut, Pie } from 'react-chartjs-2'


export default class Charts extends React.Component {
    static contextType = AppContext
    render() {
        const labels = this.context.stateResults.map(state => state.abbrev)
        const trump = this.context.stateResults.map(state => state.Trump)
        const biden = this.context.stateResults.map(state => state.Biden)
        const black = this.context.stateResults.map(state => state.black)
        const white = this.context.stateResults.map(state => state.white)
        const hispanic = this.context.stateResults.map(state => state.hispanic)        
        const asian = this.context.stateResults.map(state => state.asian)
        const foodInsecurity = this.context.stateResults.map(state => state.foodInsecurity)
        const poverty = this.context.stateResults.map(state => state.povertyRate)

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
                    height={400}
                    options={{ maintainAspectRatio: false }}
                />
                </div>
                <div className="raceChart">
                <Bar 
                    data={raceChartData}
                    width={50}
                    height={400}
                    options={{ maintainAspectRatio: false }}
                />
                </div>
                <div className="povertyChart">
                <Bar
                    data={povertyChartData}
                    width={500}
                    height={300}
                    options={{ maintainAspectRatio: false }}
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