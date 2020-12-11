import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import AppContext from '../../Context/AppContext'
import MenuOptions from '../MenuOptions/MenuOptions'
import SaveSearchButton from '../SaveSearchButton/SaveSearchButton'
import RenderResults from '../RenderResults/RenderResults'

export default class StateSelection extends React.Component {
    static contextType = AppContext;

    render() {
        return(
            <>
                <form className="forms" onSubmit={(e) => this.context.fetchFips(e)}>
                    <h1>Select one or more US States </h1>
                    <button type="submit" >Submit</button>
                    <div className="select-box">
                        <Select
                            required
                            placeholder={'Type a state name or use the dropdown arrow'}
                            isMulti={true}
                            closeMenuOnSelect={false}
                            isSearchable={true}
                            options={MenuOptions}
                            value={this.context.selectedStates}
                            onChange={this.context.handleStateSelection}
                        />
                    </div>
                    {this.context.stateResults.length
                    ?
                    <Link to="/charts">
                        <button type="button" >
                            View Charts
                        </button>
                    </Link>
                    :
                    null
                    }
                </form>
                {this.context.stateResults.length > 0
                ?
                <>
                <SaveSearchButton />
                </>
                :
                <>
                </>
                }
                <div className="search-results">
                    <RenderResults />
                </div>
            </>
        )
    }
}