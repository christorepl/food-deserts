import React from 'react'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Bar, Pie } from 'react-chartjs-2'
import AppContext from '../Context/AppContext'

toast.configure()

export default class StatePage extends React.Component {
    static contextType = AppContext
    
    redirectMessage = () => {
        toast.info('That page does not exist. Redirected to states index page.', {autoClose: 2500, hideProgressBar: true, position: "bottom-left", pauseOnHover: false, pauseOnFocusLoss: false})
    }

    
    
    render() {
        const currentState = this.context.allStates.find(states => parseInt(states.fips) === parseInt(this.props.match.params.fips));
        let population = currentState.pop

        let electionData = [currentState.trump, currentState.biden]
        
        const electionChartData = {
            labels: ['Trump', 'Biden'],
            datasets: [
                {
                    label: '2020 Election Results',
                    data: electionData,
                    backgroundColor: ['red', 'blue'] 
                }
            ]
        }
        
        
        let covidInfections = currentState.covid_infections
        let covidDeaths = currentState.covid_deaths 
        
        // let covidInfectionRate = (new Intl.NumberFormat().format(covidInfections/population * 100))
        
        
        let covidInfectionRatio = population - covidInfections        
        //covid ratio + covid infections = population
        let covidInfectionData = [covidInfectionRatio, covidInfections]
        //////CHANGE TO PERCENTAGE\\\\\\\\\\\\\
        //this will allow a pie chart to show the percent of population with a confirmed c19 diagnosis
        
        let covidDeathRatio = covidInfections - covidDeaths
        ////CHANGE TO PERCENTAGE\\\\\\\
        let covidDeathData = [covidDeathRatio, covidDeaths]
        
        //covid death rate
        // let covidDeathRate = new Intl.NumberFormat().format(covidDeaths/covidInfections * 100)
        
        const covidInfectionChartData = {
            labels: ['not-covid', 'covid'],
            datasets: [
                {
                    label: 'COVID Infection Rate',
                    data: covidInfectionData,
                    backgroundColor: ['yellow', 'green']
                }
            ]
        }
        
        const covidDeathChartData = {
            labels: ['Non-fatal cases', 'Fatal cases'],
            datasets: [
                {
                    label: 'COVID Fatality Rate',
                    data: covidDeathData,
                    backgroundColor: ['red', 'purple']
                }
            ]
        }
        
        let foodInsecurity = currentState.food_insecurity_rate
        let foodInsecurityRatio = 100 - foodInsecurity
        const foodInsecurityData = [foodInsecurity, foodInsecurityRatio]

        const foodInsecurityChartData = {
            labels: ['Food insecure households', 'Food secure households'],
            datasets: [
                {
                    label: 'Food Insecurity Rate',
                    data: foodInsecurityData,
                    backgroundColor: ['brown', 'yellow']
                }
            ]
        }

        const raceData = [currentState.black, currentState.white, currentState.hispanic, currentState.asian, currentState.other, currentState.mixed_race]

        const raceChartData = {
            labels: ['Black', 'White', 'Hispanic', 'Asian', 'Other', 'Mixed Race'],
            datasets: [
                {
                    label: 'Race Demographics',
                    data: raceData,
                    backgroundColor: ['magenta', 'yellow', 'purple', 'blue', 'red', 'cyan']
                }
            ]
        }

        return (
            <>
            {currentState
            ?
            <div className="statePage">
                <div className="statePageContainer">
                <h1>{currentState.state_name}</h1>
                    <div className="raceContainer">
                        <h3>Racial Demographics:</h3>
                        <li key={`black${currentState.fips}`}>Black: {currentState.black}%</li>
                        <li key={`white${currentState.fips}`}>White: {currentState.white}%</li>
                        <li key={`asian${currentState.fips}`}>Asian: {currentState.asian}%</li>
                        <li key={`hispanic${currentState.fips}`}>Hispanic: {currentState.hispanic}%</li>
                        <li key={`other${currentState.fips}`}>Hispanic: {currentState.other}%</li>
                        <li key={`mixed${currentState.fips}`}>Hispanic: {currentState.mixed_race}%</li>
                    </div>
                    <div className="povertyContainer">
                        <h3>Covid:</h3>
                        <li key={`covid_infections${currentState.fips}`}>Number of confirmed COVID cases: {new Intl.NumberFormat().format(currentState.covid_infections)}</li>
                        <li key={`covid_rate${currentState.fips}`}>Rate of COVID infections: {new Intl.NumberFormat().format((currentState.covid_infections/currentState.pop)*100)}%</li>
                        <li key={`covid_deaths${currentState.fips}`}>Number of COVID-related deaths: {new Intl.NumberFormat().format(currentState.covid_deaths)}</li>
                        <li key={`covid_fatality_rate${currentState.fips}`}>Fatality rate of COVID: {new Intl.NumberFormat().format((currentState.covid_deaths/currentState.covid_infections)*100)}%</li>
                    </div>

                <div className="electionContainer">
                <h3>Election Results:</h3>
                        <li key={`trump${currentState.fips}`}>Donald Trump: {currentState.trump}%</li>
                        <li key={`biden${currentState.fips}`}>Joe Biden: {currentState.biden}%</li>
                </div>
                <div className="povertyContainer">
                        <h3>Poverty Rate:</h3>
                        <li key={`poverty${currentState.fips}`}>Poverty Rate: {currentState.poverty_rate}%</li>
                    </div>
                    <div className="foodInsecurityContainer">
                        <h3>Food Insecurity Rate:</h3>
                        <li key={`foodInsecurity${currentState.fips}`}>Household Food Insecurity Rate: {currentState.food_insecurity_rate}%</li>
                    </div>
                </div>
                <div className="charts">
                    <div className="covidChart">
                    <Pie
                        data={covidInfectionChartData}
                        width={50}
                        options={{ maintainAspectRatio: true }}
                    />
                    <Pie
                        data={covidDeathChartData}
                        width={50}
                        options={{ maintainAspectRatio: true }}
                    />
                    <Pie
                        data={foodInsecurityChartData}
                        width={50}
                        options={{ maintainAspectRatio: true }}
                    />
                    <Pie
                        data={raceChartData}
                        width={50}
                        options={{ maintainAspectRatio: true }}
                    />
                    <Pie 
                        data={electionChartData}
                        width={50}
                        options={{ maintainAspectRatio: true }}
                    />
                    </div>
                </div>
            </div>
            :
            <>
            {this.redirectMessage()}
            <Redirect to="/states"/>
            </>
            }
            </>
        )
    }
}