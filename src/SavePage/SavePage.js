import React from 'react'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import AppContext from '../Context/AppContext'
import RenderSaveResults from '../RenderSaveResults/RenderSaveResults'

///GET RID OF 'RUN SEARCH' BUTTON AND REPLACE BY RENDERING THE SEARCH UNDER THE FORM

export default class SavePage extends React.Component {
    static contextType = AppContext

    redirectMessage = () => {
        toast.info('That save does not exist. Redirected to your User Dashboard.', {autoClose: 2500, hideProgressBar: true, position: "bottom-left", pauseOnHover: false, pauseOnFocusLoss: false})
    }


    currentSave = this.context.userSaves.find(saves => saves.save_name === this.props.match.params.save_name);
    
    saveData = 
    <div className='save-data'>
        {this.currentSave.save_name}    
        <button type="submit" onClick={(e) => this.context.deleteSave(this.currentSave.save_name, e)}>Delete this save</button>
        <form className="update-save" onSubmit={(e) => this.context.updateSaveName(e, this.currentSave.save_name)}>
            <fieldset>
                <legend>Change Save Name</legend>
                    <label htmlFor="new_save_name">New Save Name</label>
                    <input type="text" name="new_save_name" onChange={e => this.context.setUpdatedSaveName(e.target.value)} required/>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    </div>

    render() {
        return(
            <>
            {!this.currentSave
            ?
            <>
            {this.redirectMessage()}
            <Redirect to="/saved-search"/>
            </>
            :
            <>
            {this.saveData}
            <RenderSaveResults currentSave={this.currentSave}/>
            </>
            }    
            </>
        )
    }
}