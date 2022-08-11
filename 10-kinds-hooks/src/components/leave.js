import React from "react";
import { useBeforeLeave } from "../hooks/useBeforeLeave";

const Leave = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return(
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default Leave;