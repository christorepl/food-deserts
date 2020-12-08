import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../Context/AppContext'

export default class UserSaves extends React.Component {
    static contextType = AppContext

    render() {
        return(
            <>
            <h1>{this.context.user_name}'s Dashboard</h1>
            {this.context.userSaves.length
            ?
            <>
            {this.context.userSaves.map(save => {
            return (
                <div className="user-save" key={save.save_name}>
                <li><Link to={`/saved-search/${save.save_name}`}>{save.save_name} - {save.state_names?.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '').replaceAll(',', ', ')}</Link></li>
                </div>
            )})}
            </>
            :
            <p>You do not have any saved searches. Save a search and they will be in your dashboard.</p>
            }
            </>
        )
    }
}