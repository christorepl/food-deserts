import React from 'react'
import AppContext from '../Context/AppContext'

export default class StatePage extends React.Component {
    static contextType = AppContext
    render() {
        const state = this.context.allStates.find(s => parseInt(s.fips) === parseInt(this.props.match.params.fips))
        console.log(state)
        return (
            <>
            //conditional rendering here. if state is NOT found, toastify an alert and redirect them to the state index page
            hey
            </>
        )
    }
}