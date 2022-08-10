import React from "react";
import { usePreventLeave } from "../hooks/usePreventLeave";

const Prevent = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  )
}

export default Prevent;