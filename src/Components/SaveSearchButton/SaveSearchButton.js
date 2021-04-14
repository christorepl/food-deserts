import React from "react";
import AppContext from "../../Context/AppContext";

export default class SaveSearchButton extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <>
        {!this.context.isAuthenticated ? (
          <></>
        ) : (
          <form className="forms" onSubmit={(e) => this.context.saveSearch(e)}>
            <fieldset>
              <legend> Save this Search </legend>
              <label htmlFor="save-name"> Name of Save: </label>
              <input
                type="text"
                name="save-name"
                value={this.context.saveName}
                onChange={(e) => this.context.setSaveName(e.target.value)}
                maxLength="30"
                required
              />
              <button type="submit">Save </button>
            </fieldset>
          </form>
        )}
      </>
    );
  }
}
