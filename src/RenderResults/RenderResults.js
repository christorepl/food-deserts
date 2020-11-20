import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../Context/AppContext'

export default class RenderResults extends React.Component {
    static contextType = AppContext

    render() {
        const { stateResults } = this.context

        let statesResults = stateResults.map(state => {
            return (
                <>
                <Link to="/charts">go to charts</Link>
                <div className="stateContainer">
                    <h1>{state.stateName}</h1>
                    <div className="raceContainer">
                        <h3>Racial Data:</h3>
                        <li key={`black${state.stateId}`}>Black: {state.black}%</li>
                        <li key={`white${state.stateId}`}>White: {state.white}%</li>
                        <li key={`asian${state.stateId}`}>Asian: {state.asian}%</li>
                        <li key={`hispanic${state.stateId}`}>Hispanic: {state.hispanic}%</li>
                    </div>
                    <div className="electionContainer">
                        <h3>Election Results Data:</h3>
                        <li key={`trump${state.stateId}`}>Donald Trump: {state.Trump}%</li>
                        <li key={`biden${state.stateId}`}>Joe Biden: {state.Biden}%</li>
                    </div>
                    <div className="povertyContainer">
                        <h3>Poverty Data:</h3>
                        <li key={`poverty${state.stateId}`}>Poverty Rate: {state.povertyRate}%</li>
                    </div>
                    <div className="foodInsecurityContainer">
                        <h3>Food Insecurity Data:</h3>
                        <li key={`foodInsecurity${state.stateId}`}>Household Food Insecurity Rate: {state.foodInsecurity}%</li>
                    </div>
                </div>
                </>
            )
        })
       return (
           <>
           {statesResults}
           </>
       )
    }
}