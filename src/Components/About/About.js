import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../imgs/portrait.jpg'


export default class About extends React.Component {
    render() {
        return(
            <div className="ui-info">
                <p>I am a recent graduate of the Thinkful Software Engineer Bootcamp anddddd some other stuff about me. <Link to="/contact">Contact me</Link>.</p>
                <img src={img} alt="Portrait of app author, Chris O'Brien smiling, looking at the camera, sitting in front of a brick wall and next to a potted cactus."/>
            </div>
        )
    }
}