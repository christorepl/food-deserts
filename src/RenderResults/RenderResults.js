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
                <div className="stateContainer">
                    <h1>{state.stateName}</h1>
                    <div className="raceContainer">
                        <h3>Racial Demographics:</h3>
                        <li key={`black${state.stateId}`}>Black: {state.raceData.black}%</li>
                        <li key={`white${state.stateId}`}>White: {state.raceData.white}%</li>
                        <li key={`asian${state.stateId}`}>Asian: {state.raceData.asian}%</li>
                        <li key={`hispanic${state.stateId}`}>Hispanic: {state.raceData.hispanic}%</li>
                        <li key={`other${state.stateId}`}>Hispanic: {state.raceData.other}%</li>
                        <li key={`mixed${state.stateId}`}>Hispanic: {state.raceData.mixed}%</li>
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
                </>
            )
        })
        
       return (
           <>
            {statesResults.length 
            ?
            <>
            <Link to="/charts">
            <button type="button">
            Go to Charts
            </button>
            </Link>
            <form className="save-search" onSubmit={e => this.conext.saveSearch(e)}>
            <label htmlFor="save-name">Name of Save:</label>
            <input type="text" name="save-name" onChange={e => this.context.setSaveName(e.target.value)} required/>
            <button type="button">
                Save this Search
            </button>
            </form>
            </>
            :
            <>
            </>
            }
            {statesResults}
           </>
       )
    }
}