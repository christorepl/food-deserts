import React from 'react'
import { Link } from 'react-router-dom'
import Table from "rc-table"
import AppContext from '../../Context/AppContext'

export default class UserSaves extends React.Component {
    static contextType = AppContext

    columns = [
        {
            title: 'Name of Save',
            dataIndex: 'save_name',
            key: 'save_name',
            width: 200
        },
        {
            title: 'States in Search',
            dataIndex: 'state_names',
            key: 'state_names',
            width: 300
        },
        {
            title: 'Last Modified',
            dataIndex: 'modified',
            key: 'modified',
            width: 200
        }
    ]

    data = this.context.userSaves.map(save => {

        const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
        }
        return (
        {
            save_name: <Link to={`/saved-search/${save.save_name}`}>{save.save_name}</Link>,
            state_names: save.state_names.replaceAll('"', '').replaceAll('[', '').replaceAll(']', '').replaceAll(',', ', '),
            modified: formatDate(save.modified)
        }
        )
    })


    ///capitalize the first letter of each 'word' in a user's name
    //during testing most users did not capitalize the first letter in their name
    user_name = this.context.user_name
    splitName = this.user_name.split(" ");

    formattedName = this.splitName.map((word) => { 
            return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");


    render() {
        console.log('USER SAVES:   ', this.context.userSaves)
        return(
            <>
            <h1>{this.formattedName}'s Saved Searches</h1>
            {this.context.userSaves.length
            ?
            <div className="save-table">
                {/* /////////////TABLE HERE\\\\\\\\\\\\\\\\ */}
                <Table columns={this.columns} data={this.data} />
            </div>
            :
            <p>You do not have any saved searches. Save a search and they will be stored on this page.</p>
            }
            </>
        )
    }
}