import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../Context/AppContext'

export default class RenderResults extends React.Component {
    static contextType = AppContext

    render() {
        const { stateResults } = this.context
        // stateResults[0]

        let statesResults = stateResults.map(state => {
            return (
                <>
                <div className="stateContainer">
                    <h1>{state[0].state_name}</h1>
                    <h2>Total population: {new Intl.NumberFormat().format(state[0].pop)}</h2>
                    <div className="raceContainer">
                        <h3>Racial Demographics:</h3>
                        <li key={`black${state[0].fips}`}>Black: {state[0].black}%</li>
                        <li key={`white${state[0].fips}`}>White: {state[0].white}%</li>
                        <li key={`asian${state[0].fips}`}>Asian: {state[0].asian}%</li>
                        <li key={`hispanic${state[0].fips}`}>Hispanic: {state[0].hispanic}%</li>
                        <li key={`other${state[0].fips}`}>Other: {state[0].other}%</li>
                        <li key={`mixed${state[0].fips}`}>Mixed Race: {state[0].mixed_race}%</li>
                    </div>
                    <div className="electionContainer">
                        <h3>Election Results:</h3>
                        <li key={`trump${state[0].fips}`}>Donald Trump: {state[0].trump}%</li>
                        <li key={`biden${state[0].fips}`}>Joe Biden: {state[0].biden}%</li>
                    </div>
                    <div className="povertyContainer">
                        <h3>Covid:</h3>
                        <li key={`covid_infections${state[0].fips}`}>Number of confirmed COVID cases: {new Intl.NumberFormat().format(state[0].covid_infections)}</li>
                        <li key={`covid_rate${state[0].fips}`}>Rate of COVID infections: {new Intl.NumberFormat().format((state[0].covid_infections/state[0].pop)*100)}%</li>
                        <li key={`covid_deaths${state[0].fips}`}>Number of COVID-related deaths: {new Intl.NumberFormat().format(state[0].covid_deaths)}</li>
                        <li key={`covid_fatality_rate${state[0].fips}`}>Fatality rate of COVID: {new Intl.NumberFormat().format((state[0].covid_deaths/state[0].covid_infections)*100)}%</li>
                    </div>
                    <div className="povertyContainer">
                        <h3>Poverty:</h3>
                        <li key={`poverty${state[0].fips}`}>Rate of Individuals Populatin In Poverty: {state[0].poverty_rate}%</li>
                    </div>
                    <div className="foodInsecurityContainer">
                        <h3>Food Insecurity:</h3>
                        <li key={`foodInsecurity${state[0].fips}`}>Household Food Insecurity Rate: {state[0].food_insecurity_rate}%</li>
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