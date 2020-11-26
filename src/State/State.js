import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../Context/AppContext'

export default class State extends React.Component {
    static contextType = AppContext
    
    render() {
        const statesData = this.context.statesData.map(state => {
            return (
                <li key={state.stateId}>
                    <Link to={`/state/${state.stateId}`}>
                        {state.stateName}
                    </Link>
                </li>
            )
        })
    
        return(
            <div className="stateData">
                {statesData}
            </div>
        )
    }
}