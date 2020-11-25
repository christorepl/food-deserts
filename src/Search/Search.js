import React from 'react'
import AppContext from '../Context/AppContext'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes'
import MenuOptions from '../MenuOptions/MenuOptions'
import RenderResults from '../RenderResults/RenderResults'

export default class StateSelection extends React.Component {
    static contextType = AppContext;

    render() {
        const povertyRates = this.context.statesData.map(state => state.raceData)
        console.log(povertyRates)
        const nums = Object.values(povertyRates)
        console.log(nums)
        return(
            <>
                <form className="ui-form" onSubmit={(e) => this.context.searchStates(e)}>
                    <h1>Select one or more US States </h1>  <button type="submit">Perform search</button>
                    <ReactMultiSelectCheckboxes
                        options={MenuOptions}
                        value={this.context.selectedStates}
                        onChange={this.context.handleStateSelection}
                    />
                </form>
                <RenderResults />
            </>
        )
    }
}