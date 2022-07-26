import React, { useState } from "react";
import { authService } from "../fbase";

const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onLogOutClick = () => authService.signOut();

  const onChange = e => {
    const {target:{value}} = e;
    setNewDisplayName(value);
  }

  const onSubmit = async(e) => {
    e.preventDefault();

    if(userObj.displayName !== newDisplayName){
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input 
          onChange={onChange}
          type="text"
          placeholder="Display name"
          autoFocus 
          value={newDisplayName}
          className="formInput"
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  )
}

export default Profile;