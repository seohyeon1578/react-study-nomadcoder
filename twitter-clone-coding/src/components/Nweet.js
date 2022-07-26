import React, { useState } from 'react';
import { dbService, storageService } from '../fbase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import {
  deleteObject,
  ref
} from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`);
  const desertRef = ref(storageService, nweetObj.attachmentUrl);
  
  const onDeleteClick = async() => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if(ok){
      //delete nweet
      try{
        await deleteDoc((NweetTextRef));

        if(nweetObj.attachmentUrl !== ""){
          await deleteObject(desertRef);
        }
      }catch(error) {
        console.log(error)
      }
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
    <div className="nweet">
      {editing ? (
        <>
          {isOwner && (
            <>
            <form onSubmit={onSubmit} className="container nweetEdit">
              <input 
                type="text" 
                placeholder='Edit your nweet'
                value={newNweet} 
                required
                autoFocus
                onChange={onChange}
                className="formInput"
              />
              <input type="submit" value="Update Nweet" className="formBtn"/>
            </form>
            <span onClick={toggleEditing} className="formBtn cancelBtn">
              Cancel
            </span>
            </>
          )}
        </>
        ) : (
          <>
            <h4>{nweetObj.text}</h4>
            {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} />}
            {isOwner && (
              <div className="nweet__actions">
                <span onClick={onDeleteClick}>
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                <span onClick={toggleEditing}>
                  <FontAwesomeIcon icon={faPencilAlt} />
                </span>
              </div>
            )}
          </>
        )}
    </div>
  )
}

export default Nweet;