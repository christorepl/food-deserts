import React from 'react'
import AppContext from '../../Context/AppContext'

export default class SaveSearchButton extends React.Component {
    static contextType = AppContext
    render() {
        return (
            <>
                {!this.context.isAuthenticated
                ?
                <>
                </>
                :
                <form className="save-search" onSubmit={e => this.context.saveSearch(e)}>
                <label htmlFor="save-name">Name of Save:</label>
                <input type="text" name="save-name" onChange={e => this.context.setSaveName(e.target.value)} required/>
                <button type="submit">
                    Save this Search
                </button>
                </form>
                }
            </>
        )
    }
}