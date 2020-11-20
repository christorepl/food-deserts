import React from 'react'
import AppContext from '../Context/AppContext'
import { Bar, defaults } from 'react-chartjs-2'


export default class Charts extends React.Component {
    static contextType = AppContext
    render() {
        const labels = this.context.stateResults.map(state => state.abbrev)
        const trumpData = this.context.stateResults.map(state => state.Trump)
        const bidenData = this.context.stateResults.map(state => state.Biden)
        console.log(this.context.stateResults)
        



        const chartData = {
            labels: labels,
            yAxisId: 'Stateaaaaaaaaaas',
            datasets: [
                {
                    label: '% of votes for Trump',
                    data: trumpData,
                    backgroundColor: 'red',
                    xAxisId: 'Percentage of Votes'
                },
                {
                    label: '% of votes for Biden',
                    data: bidenData,
                    backgroundColor: 'blue'
                }
            ]
        }

        return(
            <div className="chart">
                <Bar
                    data={chartData}
                    width={50}
                    height={500}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}