import React from 'react'
import AppContext from '../Context/AppContext'
import { Bar, defaults } from 'react-chartjs-2'


export default class Charts extends React.Component {
    static contextType = AppContext
    render() {
        const labels = this.context.stateResults.map(state => state.abbrev)
        const trump = this.context.stateResults.map(state => state.Trump)
        const biden = this.context.stateResults.map(state => state.Biden)
        console.log(this.context.stateResults)
        const black = this.context.stateResults.map(state => state.black)
        const white = this.context.stateResults.map(state => state.white)
        const hispanic = this.context.stateResults.map(state => state.hispanic)        
        const asian = this.context.stateResults.map(state => state.asian) 
        console.log(asian)

        const electionChartData = {
            labels,
            datasets: [
                {
                    label: '% of votes for Trump',
                    data: trump,
                    backgroundColor: 'red',
                },
                {
                    label: '% of votes for Biden',
                    data: biden,
                    backgroundColor: 'blue'
                }
            ],
            options: {
                legend: {
                    postion: 'left'
                }
            }
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

        


        return(
            <div className="chart">
                <div className="electionChart">
                <Bar
                    data={electionChartData}
                    width={100}
                    height={500}
                    options={{ maintainAspectRatio: false }}
                />
                </div>
                <div className="raceChart">
                <Bar 
                    data={raceChartData}
                    width={50}
                    height={500}
                    options={{ maintainAspectRatio: false }}
                />
                </div>
            </div>

        )
    }
}