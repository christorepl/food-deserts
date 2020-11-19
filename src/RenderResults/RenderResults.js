import React from 'react'
// import { Route } from 'react-router-dom'
import AppContext from '../Context/AppContext'

export default class RenderResults extends React.Component {
    static contextType = AppContext

    render() {
        console.log(this.context.stateResults)
        const { stateResults } = this.context

        // console.log(p, state[p])

        // const stateResult = stateResults.forEach(state => {
        //     for (let a in state) { console.log(state[a].stateId)
        //     // return(
        //     //     <div className="stateContainer">
        //     //         {state[a].stateName}
        //     //     </div>
        //     // )
        // }})

        let jsxResults = stateResults.map(state => {
            return (
                <div className="stateContainer">
                    <h1>{state[0].stateName}</h1>
                    <div className="raceContainer">
                        <h3>Racial Data:</h3>
                        <li key={state[0].stateId}>Black: {state[0].black}%</li>
                        <li key="fdsf"{...state[0].stateId}>White: {state[0].white}%</li>
                        <li>Asian: {state[0].asian}%</li>
                        <li>Hispanic: {state[0].hispanic}%</li>
                    </div>
                    <div className="electionContainer">
                        <h3>Election Results Data:</h3>
                        <li key={state[0].Trump}>Donald Trump: {state[0].Trump}%</li>
                        <li key={state[0].Biden}>Joe Biden: {state[0].Biden}%</li>
                    </div>
                    <div className="povertyContainer">
                        <h3>Poverty Data:</h3>
                        <li key={state[0].povertyRate}>Poverty Rate: {state[0].povertyRate}%</li>
                    </div>
                    <div className="foodInsecurityContainer">
                        <h3>Food Insecurity Data:</h3>
                        <li key={state[0].foodInsecurity}>Household Food Insecurity Rate: {state[0].foodInsecurity}%</li>
                    </div>
                </div>
            )
        })
        console.log(jsxResults)

        // let stateResult = stateResults.forEach(state => {
        //     for(let [key, value] of Object.entries(state))
        //     return (
        //         <div className="stateContainer">
        //             {key} : {value}
        //         </div>
        //     )
        // })



    //     const stateResult = stateResults.map(stateResults => {
        //    return (
        //     <div className="stateContainer" key={stateResults.stateId}>
        //         <p>{stateResults.foodInsecurity}</p>
        //     </div>
        //    )
    //    })
       return (
           <>
           hi
           {jsxResults}
           </>
       )
    }
}