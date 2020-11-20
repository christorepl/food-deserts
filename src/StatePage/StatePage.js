import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import AppContext from '../Context/AppContext'

export default class StatePage extends React.Component {
    static contextType = AppContext
    render() {
        const state = this.context.statesData.find(s => 
            s.stateId === parseInt(this.props.match.params.stateId)
        )
        const electionResults = state.electionData
        const electionData = Object.values(electionResults)
    
        const race = state.raceData
        const raceData = Object.values(race)

        const electionChartData = {
            labels: ['Trump', 'Biden'],
            datasets: [
                {
                    label: 'Election 2020 Results',
                    data: electionData,
                    backgroundColor: ['red', 'blue']
                }
            ]
        }

        const raceChartData = {
            labels: ['White', 'Black', 'Hispanic', 'Asian'],
            datasets : [
                {
                    label: 'Racial Demographics',
                    data: raceData,
                    backgroundColor: ['purple', 'magenta', 'gray', 'green']
                }
            ]
        }

        return(
            <div className="statePage">
                <div className="statePageContainer">
                    <h1>{state.stateName}</h1>
                    <div className="raceContainer">
                        <h3>Racial Demographics:</h3>
                        <li key={`black${state.stateId}`}>Black: {state.raceData.black}%</li>
                        <li key={`white${state.stateId}`}>White: {state.raceData.white}%</li>
                        <li key={`asian${state.stateId}`}>Asian: {state.raceData.asian}%</li>
                        <li key={`hispanic${state.stateId}`}>Hispanic: {state.raceData.hispanic}%</li>
                    </div>
                    <div className="electionContainer">
                        <h3>Election Results:</h3>
                        <li key={`trump${state.stateId}`}>Donald Trump: {state.electionData.Trump}%</li>
                        <li key={`biden${state.stateId}`}>Joe Biden: {state.electionData.Biden}%</li>
                    </div>
                    <div className="povertyContainer">
                        <h3>Poverty Rate:</h3>
                        <li key={`poverty${state.stateId}`}>Poverty Rate: {state.povertyRate}%</li>
                    </div>
                    <div className="foodInsecurityContainer">
                        <h3>Food Insecurity Rate:</h3>
                        <li key={`foodInsecurity${state.stateId}`}>Household Food Insecurity Rate: {state.foodInsecurity}%</li>
                    </div>
                </div>
                <div className="stateChartContainer">
                    <Pie
                        data={electionChartData}
                        // width={10}
                        // height={10}
                        options={{ maintainAspectRatio: false, responsive: true }}
                    />
                </div>
                <div className="stateChartContainer">
                    <Pie
                        data={raceChartData}
                        // width={10}
                        // height={10}
                        options={{ maintainAspectRatio: false, responsive: true }}
                    />
                </div>
            </div>
        )
    }
}