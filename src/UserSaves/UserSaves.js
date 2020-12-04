import React from 'react'
import API_ENDPOINT from '../config'
import AppContext from '../Context/AppContext'
import RenderResults from '../RenderResults/RenderResults'
// import RenderResults from '../RenderResults/RenderResults'
// import Search from '../Search/Search'

export default class UserSaves extends React.Component {
    static contextType = AppContext

    async componentDidMount () {
        console.log('saves did mount')
        try {
            const response = await fetch(API_ENDPOINT + "api/save/user_save/", {
                method: "GET",
                headers: {jwt_token: localStorage.jwt_token},
            })
            
            const parseRes = await response.json()
            this.context.setUserSaves(parseRes)
            this.context.setName(parseRes[0].user_name)
        } catch (err) {
            console.error(err.message)
        }

    }

    runSearch = async(fips, e) => {
        //because the psql table sends up the fips as a string, we must turn it into an array so the fetch function works properly with the given fips
        const fipsString = fips.replaceAll('"', '').replaceAll('{', '').replaceAll('}', '').replaceAll('[', '').replaceAll(']', '')
        const fipsIds = fipsString.split(',')
        let fipsArray = []
        for (let i = 0; i < fipsIds.length; i++){
            fipsArray.push({"value": fipsIds[i]})
        }
        await this.context.handleSavedSearch(fipsArray, e)
    }

    listSaves = 
    this.context.userSaves[0].fips
    ?
    this.context.userSaves.map(save => {
        return (
            <div className="userSave" key={save.save_name}>
                {save.save_name} - {save.state_names.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '').replaceAll(',', ', ')}
                <button type="submit" onClick={(e) => this.runSearch(save.fips, e)}>Run this search</button>
                <button type="submit" onClick={(e) => this.context.deleteSave(save.save_name, e)}>Delete this save</button>
                <form className="update-save" onSubmit={(e) => this.context.updateSaveName(e, save.save_name)}>
                    <fieldset>
                        <legend>Change Save Name</legend>
                            <label htmlFor="new_save_name">New Save Name</label>
                            <input type="text" name="new_save_name" onChange={e => this.context.setUpdatedSaveName(e.target.value)} required/>
                            <button type="submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    })
    :
    null
    
    render() {
        console.log('userSaves: ', this.context.userSaves)
        return (
            <>
            <h1>{this.context.user_name}'s Dashboard</h1>
            {this.context.userSaves.length
            ?
            <>
            {this.listSaves}
            </>
            :
            <>
            <p>You do not have any saved searches.</p>
            </>
            }
            </>
        )
    }
}