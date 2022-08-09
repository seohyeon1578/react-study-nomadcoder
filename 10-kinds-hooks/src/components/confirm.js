import React from "react";
import { useConfirm } from "../hooks/useConfirm";

const Confirm = () => {
  const deleteWorld = () => console.log("DELETE")
  const abort = () => console.log("Aborted")
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort)
  return(
    <div>
      <button onClick={confirmDelete}>DELETE</button>
    </div>
  )
}

export default Confirm;