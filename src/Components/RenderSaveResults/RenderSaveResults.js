import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../Context/AppContext'

export default class RenderSaveResults extends React.Component {
    static contextType = AppContext
    
    async componentDidMount () { 
        this.context.runSaveSearch(this.props.currentSave.fips)
    }

    // <li key={`variable${currentState.variable_rank}`}></li>

        
    render() {
        const statesResults = this.context.currentSaveResults.map(state => {
            let currentState = this.context.allStates.find(states => states.id === state[0].id)
            return (
                <div className="state-container" key={`container-${state[0].state_name}-${state[0].fips}`}>
                    <h1>{state[0].state_name}</h1>
                    <Link to={`/state/${state[0].fips}`}>
                    <p className="inspect-link">Inspect this state's data closer</p>
                    </Link>
                    <h2>Total population: {new Intl.NumberFormat().format(state[0].pop)}</h2>
                        <h3>Racial Demographics:</h3>
                        <li key={`black${state[0].fips}`}>Black: {state[0].black}%</li>
                        <li className="ranking-list" key={`rankingblack${currentState.ranking_black}`}>Ranking: {currentState.ranking_black}/51</li>
                        <li key={`white${state[0].fips}`}>White: {state[0].white}%</li>
                        <li className="ranking-list" key={`rankingwhite${currentState.ranking_white}`}>Ranking: {currentState.ranking_white}/51</li>
                        <li key={`asian${state[0].fips}`}>Asian: {state[0].asian}%</li>
                        <li className="ranking-list" key={`rankingasian${currentState.ranking_asian}`}>Ranking: {currentState.ranking_asian}/51</li>
                        <li key={`hispanic${state[0].fips}`}>Hispanic: {state[0].hispanic}%</li>
                        <li className="ranking-list" key={`rankinghispanic${currentState.ranking_hispanic}`}>Ranking: {currentState.ranking_hispanic}/51</li>
                        <li key={`other${state[0].fips}`}>Other: {state[0].other}%</li>
                        <li className="ranking-list" key={`rankingother${currentState.ranking_other}`}>Ranking: {currentState.ranking_other}/51</li>
                        <li key={`mixed${state[0].fips}`}>Mixed Race: {state[0].mixed_race}%</li>
                        <li className="ranking-list" key={`rankingmixed${currentState.ranking_mixed}`}>Ranking: {currentState.ranking_mixed}/51</li>
                        <h3>Election Results:</h3>
                        <li key={`trump${state[0].fips}`}>Donald Trump: {state[0].trump}%</li>
                        <li className="ranking-list" key={`rankingrepub${currentState.ranking_repub}`}>Ranking: {currentState.ranking_repub}/51</li>
                        <li key={`biden${state[0].fips}`}>Joe Biden: {state[0].biden}%</li>
                        <li className="ranking-list" key={`rankingdem${currentState.ranking_dem}`}>Ranking: {currentState.ranking_dem}/51</li>
                        <h3>COVID:</h3>
                        <li key={`covid_infections${state[0].fips}`}>Number of confirmed COVID cases: {new Intl.NumberFormat().format(state[0].covid_infections)}</li>
                        <li className="ranking-list" key={`rankinginfections${currentState.ranking_covid_infections}`}>Ranking: {currentState.ranking_covid_infections}/51</li>
                        <li key={`covid_rate${state[0].fips}`}>Rate of COVID infections: {state[0].covid_rate}%</li>
                        <li className="ranking-list" key={`rankingcrate${currentState.ranking_covid_rate}`}>Ranking: {currentState.ranking_covid_rate}/51</li>
                        <li key={`covid_deaths${state[0].fips}`}>Number of COVID-related deaths: {new Intl.NumberFormat().format(state[0].covid_deaths)}</li>
                        <li className="ranking-list" key={`rankingdeaths${currentState.ranking_covid_deaths}`}>Ranking: {currentState.ranking_covid_deaths}/51</li>
                        <li key={`covid_fatality_rate${state[0].fips}`}>Fatality rate of COVID: {state[0].covid_fatality_rate}%</li>
                        <li className="ranking-list" key={`rankingcfrate${currentState.ranking_covid_fatality_rate}`}>Ranking: {currentState.ranking_covid_fatality_rate}/51</li>
                        <h3>Poverty:</h3>
                        <li key={`poverty${state[0].fips}`}>Rate of Individuals Populatin In Poverty: {state[0].poverty_rate}%</li>
                        <li className="ranking-list" key={`rankingpov${currentState.ranking_pov}`}>Ranking: {currentState.ranking_pov}/51</li>
                        <h3>Food Insecurity:</h3>
                        <li key={`foodInsecurity${state[0].fips}`}>Household Food Insecurity Rate: {state[0].food_insecurity_rate}%</li>
                        <li className="ranking-list" key={`rankingfi${currentState.ranking_fi}`}>Ranking: {currentState.ranking_fi}/51</li>
                </div>
            )
        })
        return (
            <>
            <div className="charts-button">
                <Link to="/save-charts">
                <button type="button" className="buttons">
                    View Charts
                </button>
                </Link>
            </div>
                {statesResults}
            </>
        )
    }
}