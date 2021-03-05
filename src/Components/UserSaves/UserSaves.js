import React from "react";
import UserSavesTable from "../UserSavesTable/UserSavesTable";
import AppContext from "../../Context/AppContext";

export default class UserSaves extends React.Component {
  static contextType = AppContext;

  render() {
    ///capitalize the first letter of each 'word' in a user's name
    //during testing most users did not capitalize the first letter in their name
    const { user_name } = this.context;
    const splitName = user_name.split(" ");

    const formattedName = splitName
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");

    return (
      <>
        <h1>{formattedName}'s Saved Searches</h1>
        {this.context.userSaves.length ? (
          <>
            <div className="save-table">
              <UserSavesTable />
            </div>
          </>
        ) : (
          <p>
            You do not have any saved searches. Save a search and they will be
            stored on this page.
          </p>
        )}
      </>
    );
  }
}
