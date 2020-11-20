import React from 'react'
import AppContext from '../Context/AppContext'
import { Bar, Doughnut, Pie } from 'react-chartjs-2'


export default class Charts extends React.Component {
    static contextType = AppContext
    render() {
        const labels = this.context.stateResults.map(state => state.abbrev)
        const electionResults = this.context.stateResults.map(state => state.electionData)
        console.log(electionResults)

        // const election2020 = Object.values(electionResults)
        console.log(Object.values(electionResults))

        const obj = { foo: 'bar', baz: 42 };
        console.log('obj', Object.values(obj))
       

        // console.log('2020 results: ', electionResults)
        // for (const [key, value] of Object.entries(electionResults).forEach) {
        //     console.log(value.val)
        // }

        // const results = Object.entries(electionResults).forEach(([key, value]) => {
        //     console.log(value)
        // })
        // console.log(turd)
        // console.log(electionResult)
        const trump = this.context.stateResults.map(state => state.electionData.Trump)
        const biden = this.context.stateResults.map(state => state.electionData.Biden)
        const black = this.context.stateResults.map(state => state.raceData.black)
        const white = this.context.stateResults.map(state => state.raceData.white)
        const hispanic = this.context.stateResults.map(state => state.raceData.hispanic)        
        const asian = this.context.stateResults.map(state => state.raceData.asian)
        const foodInsecurity = this.context.stateResults.map(state => state.foodInsecurity)
        const poverty = this.context.stateResults.map(state => state.povertyRate)

        const twentyChartData = {
            labels: ['red', 'blue'],
            datasets: [
                {
                    label: 'lets see',
                    data: [3, 5],
                    backgroundColor:['red', 'blue']
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
                <Pie 
                    data={twentyChartData}
                    width={1}
                    height={1}
                    options={{ maintainAspectRatio: true }}
                />
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