import React, { useState, useEffect } from "react";
import { dbService } from "../fbase";
import { 
  addDoc, 
  collection, 
  query,
  onSnapshot,
  orderBy 
} from "firebase/firestore";
import Nweet from "../components/Nweet";

const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const [attachment, setAttachment] = useState(); 

  useEffect(() => {
    const q = query(
      collection(dbService, "nweets"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray)
    });
  },[])

  const onSubmit = async(e) => {
    e.preventDefault();
    
    await addDoc(collection(dbService, "nweets"),{
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,

    })
    setNweet("");

  }

  const onChange = e => {
    const {target:{value}} = e;
    setNweet(value);
  }

  const onFileChange = e => {
    const {target:{files}} = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: {result}
      } = finishedEvent;
      setAttachment()
    }
    reader.readAsDataURL(theFile);
  }

  return(
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={nweet} onChange={onChange} placeholder="What's on your mind?" maxLength={120}/>
        <input type="file" accept="image/*" onChange={onFileChange}/>
        <input type="submit" value="Nweet"/>
        {attachment && <img src={attachment} width="50px" height="50px"/>}
      </form>
      <div>
        {nweets.map((nweet) => (
          <Nweet 
            key={nweet.id} 
            nweetObj={nweet} 
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
    )
}
export default Home;