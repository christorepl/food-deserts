import React from 'react'
// import { Route } from 'react-router-dom'
import AppContext from '../Context/AppContext'

export default class RenderResults extends React.Component {
    static contextType = AppContext

    render() {
        // console.log(this.context.stateResults)
        const { stateResults } = this.context

        // console.log(p, state[p])

        // const stateResult = stateResults.forEach(state => {
        //     for (let p in state) {
        //         return (
        //             <>
        //             {state}
        //             </>
        //         )}
        // })

        let stateResult = stateResults.forEach(state => {
            for(let [key, value] of Object.entries(state))
            return (
                <div className="stateContainer">
                    {key} : {value}
                </div>
            )
        })
        console.log(stateResult)


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
           {stateResult}
           </>
       )
    }
}