import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../Context/AppContext'

export default class Home extends React.Component {
    static contextType = AppContext
    
    render() {
        return(
            <div className="ui-info">
                <h3>What is the intention of this app?</h3>

                <p>With the rise of COVID-19 and racial tensions some of America's deepest, most shameful flaws are being exposed. Systematic racism and economic inequalities have been exacerbated by economic shutdowns. Some of the most disadvantaged populations are facing the worst effects of strained supply chains and inadequate government aid. Food insecurity is on the rise and racial minorities are being hit the hardest. Black and indigenous people live under the highest rates of food insecurity and have the highest rates reported of COVID-19 fatalities. Because of this intersection of racism, economic inequality, and now rampant disease, it is imperative that we analyze the correlation and causation of these factors. I designed this app so that users can see data relevant to these correlations, hopefully as a starting point for supporting a case for causation. The states with the largest black populations also have some of the highest rates of poverty and food insecurity. In order to eliminate injustice, you must first understand it. I hope this app can help people start to understand the injustices around us that are too often overlooked. I strongly recommend that interpretation of the data presented in this app is analyzed in conjunction with the resources on the <Link to="/addtl">Additional Resources page.</Link></p>

                <p className="other-note">A note on the "other" demographic in the census: The data used on this page has 6 demographics for race: White, Black, Asian, Hispanic, Mixed, and Other. Due to failings of American perception of racial origin and the manner in which census data is compiled, the term 'other' tends to group together people who do not fit into the first 5 groups. It is reasonable to assume that 'other' largely refers to Indigenous populations. I have shared some articles about this issue and related topics in the <Link to="/addtl">Additional Resources page.</Link></p>

                <p>If you wish to save your searches and quickly pull them up again, you can <Link to="/create-account">create an account</Link> and save a search.</p>

                <p>Now that we have some perspective on the intent of this app, <Link to="/search">let's run a search!</Link></p>


                <p>To learn more about who wrote this app check out the <Link to="/about">About page</Link>.</p>

            </div>
        )
    }
}