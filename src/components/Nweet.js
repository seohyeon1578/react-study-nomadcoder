import React, { useState } from 'react';
import { dbService } from '../fbase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`)
  const onDeleteClick = async() => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if(ok){
      //delete nweet
      await deleteDoc((NweetTextRef));
    }
  }

  const toggleEditing = () => setEditing((prev) => !prev);

  const onSubmit = async(e) => {
    e.preventDefault();
    
    await updateDoc(NweetTextRef,{
      text: newNweet,
    });

    setEditing(false)
  }

  const onChange = (e) => {
    const {target:{value}} = e;
    setNewNweet(value);
  }
  return (
    <div>
      {editing ? (
        <>
          {isOwner && (
            <>
            <form onSubmit={onSubmit}>
              <input 
                type="text" 
                placeholder='Edit your nweet'
                value={newNweet} 
                required
                onChange={onChange}
              />
              <input type="submit" value="Update Nweet"/>
            </form>
            <button onClick={toggleEditing}>Cancel</button>
            </>
          )}
        </>
        ) : (
          <>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
              <>
                <button onClick={onDeleteClick}>Delete</button>
                <button onClick={toggleEditing}>Edit</button>
              </>
            )}
          </>
        )}
    </div>
  )
}

export default Nweet;