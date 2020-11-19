import React from 'react'
import { Link } from 'react-router-dom'

export default class About extends React.Component {
    render() {
        return(
            <div className="ui-info">
                <p>Quick biography, picture of myself. Mission goal in becoming a developer. <Link to="/contact">Contact me</Link>.</p>
            </div>
        )
    }
}