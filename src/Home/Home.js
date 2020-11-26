import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../Context/AppContext'

export default class Home extends React.Component {
    static contextType = AppContext
    
    render() {
        return(
            <div className="ui-info-home">
                <p>This is a placeholder page which will contain some information about the intent of this app and will have a little how-to on how to use the app and some interesting ways of looking at the data. this will be sort of like a readme.md file.</p>

                <p>Point of making an account?</p>

                <p>Paragraph on the intent of this app. If you wish to see further info on these correlations and where the data comes from, check out the <Link to="/addtl">additional resources page.</Link></p>

                <div>Section on how to use the app.</div>

                <p>To learn more about who wrote this app and why, check out the <Link to="/about">About page</Link>.</p>

                <p>Now that we have some perspective on the data and the intent of this app, <Link to="/search">let's run a search!</Link></p>

            </div>
        )
    }
}