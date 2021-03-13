import React from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../../Context/AppContext";
import RenderSaveResults from "../RenderSaveResults/RenderSaveResults";

export default class SavePage extends React.Component {
  static contextType = AppContext;

  render() {
    let currentSave = this.context.userSaves.find(
      (saves) => saves.save_name === this.props.match.params.save_name
    );

    let currentSaveName = currentSave.save_name;

    let saveData = (
      <div className="save-data">
        <h1>{currentSaveName}</h1>
        <fieldset>
          <legend>Edit Save</legend>
          <form
            className="forms"
            onSubmit={(e) => this.context.updateSaveName(e, currentSaveName)}
          >
            <label htmlFor="new_save_name">New Save Name</label>
            <input
              type="text"
              name="new_save_name"
              onChange={(e) => this.context.setUpdatedSaveName(e.target.value)}
              maxLength="30"
              required
            />
            <button type="submit">Submit</button>
          </form>
          <div className="forms">
            <p className="delete-p">
              If you wish to delete your save, click the button below
            </p>
            <div className="delete-save-button">
              <button
                type="submit"
                onClick={(e) => this.context.deleteSave(currentSaveName, e)}
              >
                Delete this save
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    );
    return (
      <>
        {!currentSave ? (
          <>
            {this.redirectMessage()}
            <Redirect to="/saved-search" />
          </>
        ) : (
          <>
            {saveData}
            <RenderSaveResults currentSave={currentSave} />
          </>
        )}
      </>
    );
  }
}
