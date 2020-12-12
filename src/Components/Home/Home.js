import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../Context/AppContext'


export default class Home extends React.Component {
    static contextType = AppContext
    
    render() {
        return(
            <div className="homepage">

                <h3>What is the intention of this app?</h3>


                <p>Food insecurity is an all too often overlooked issue in the United States. Racial minorities already had the highest rates of poverty and food insecurity, and now they have the highest rates of COVID infections and fatalities. The spread of COVID has highlighted America's racial and economic structural inequalities, and this app allows users to inspect the data relative to these intersections.</p>

                <p>I recommend checking out the <Link to="/addtl">Additional Resources page</Link> for in depth statistical analysis of these intersections of inequality.</p>


                <p>If you wish to save your searches and quickly pull them up again, you can <Link to="/create-account">create an account</Link> and save a search.</p>

                <p>Now that we have some perspective on the intent of this app, <Link to="/search">let's run a search!</Link></p>

                <div className="other-note">A note on the "other" demographic in the census: The data used on this page has 6 demographics for race: White, Black, Asian, Hispanic, Mixed, and Other. Due to failings of American perception of racial origin and the manner in which census data is compiled, the term 'other' tends to group together people who do not fit into the first 5 groups. It is reasonable to assume that 'other' largely refers to Indigenous populations. I have shared some articles about this issue and related topics in the <Link to="/addtl">Additional Resources page.</Link></div>

            </div>
        )
    }
}