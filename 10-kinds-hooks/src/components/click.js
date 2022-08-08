import React from "react";
import { useClick } from "../hooks/useClick";

const Click = () => {
  const sayHello = () => console.log("say hello")
  const title = useClick(sayHello);
  return(
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default Click;