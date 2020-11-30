import React from 'react'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import AppContext from '../Context/AppContext'

toast.configure()

export default class StatePage extends React.Component {
    static contextType = AppContext
    
    redirectMessage = () => {
        console.log('jerks')
        toast.info('That page does not exist. Redirected to states index page.', {autoClose: 2000, hideProgressBar: true, position: "bottom-left", pauseOnHover: false, pauseOnFocusLoss: false})
    }

    render() {
        const state = this.context.allStates.find(s => parseInt(s.fips) === parseInt(this.props.match.params.fips))
        console.log(state)
        return (
            <>
            {state
            ?
            <div className="statePage">
                state
            </div>
            :
            <>
            {console.log('idiot')}
            {this.redirectMessage()}
            {/* <Redirect to="/states"/> */}
            </>
            }
            </>
        )
    }
}