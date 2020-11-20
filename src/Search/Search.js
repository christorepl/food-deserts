import React from 'react'
import AppContext from '../Context/AppContext'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes'
import MenuOptions from '../MenuOptions/MenuOptions'
import RenderResults from '../RenderResults/RenderResults'

export default class StateSelection extends React.Component {
    static contextType = AppContext;

    render() {
        return(
            <>
                <form className="ui-form" onSubmit={(e) => this.context.searchStates(e)}>
                    <h1>Select one or more US States: </h1>
                    <ReactMultiSelectCheckboxes
                        options={MenuOptions}
                        value={this.context.selectedStates}
                        onChange={this.context.handleStateSelection}
                    />
                    <button type="submit">Perform search</button>
                </form>
                <RenderResults />
            </>
        )
    }
}