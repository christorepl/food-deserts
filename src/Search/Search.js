import React from 'react'
import AppContext from '../Context/AppContext'
import MultiSelect from "react-multi-select-component";
import MenuOptions from '../MenuOptions/MenuOptions'
import RenderResults from '../RenderResults/RenderResults'

export default class StateSelection extends React.Component {
    static contextType = AppContext;

    render() {
        return(
            <>
                <form className="ui-form" onSubmit={(e) => this.context.searchStates(e)}>
                    <h1>Select one or more US States</h1>
                    <MultiSelect
                        options={MenuOptions}
                        value={this.context.selectedStates}
                        // onChange={(e) => this.context.addRemoveStates(this.context.selectedStates)}
                        labelledBy={"Select"}
                    />
                    <button type="submit">Perform search</button>
                </form>
                <RenderResults />
            </>
        )
    }
}