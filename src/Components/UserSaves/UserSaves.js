import React from 'react'
import UserSavesTable from '../UserSavesTable/UserSavesTable'
import AppContext from '../../Context/AppContext'

export default class UserSaves extends React.Component {
    static contextType = AppContext

    ///capitalize the first letter of each 'word' in a user's name
    //during testing most users did not capitalize the first letter in their name
    user_name = this.context.user_name
    splitName = this.user_name.split(" ");

    formattedName = this.splitName.map((word) => { 
            return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");


    render() {
        return(
            <>
            <h1>{this.formattedName}'s Saved Searches</h1>
            {this.context.userSaves.length
            ?
            <>
            <div className="save-table">
                <UserSavesTable/>
            </div>
            </>
            :
            <p>You do not have any saved searches. Save a search and they will be stored on this page.</p>
            }
            </>
        )
    }
}