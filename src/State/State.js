import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../Context/AppContext'

///need to fetch from API_ENDPOINT/api/state/all for this to work



export default class State extends React.Component {
    static contextType = AppContext

    render() {
        const statesData = this.context.statesData.map(state => {
            return (
                <li key={state[0].fips}>
                    <Link to={`/state/${state[0].fips}`}>
                        {state[0].state_name}
                    </Link>
                </li>
            )
        })
    
        return(
            <div className="stateData">
            'hiya'
                {statesData}
            </div>
        )
    }
}