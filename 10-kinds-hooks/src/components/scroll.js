import React from "react";
import { useScroll } from "../hooks/useScroll";

const Scroll = () => {
  const { y } = useScroll();
  return(
    <div>
      <h1 style={{position: "fixed",color: y > 100 ? "red": "blue"}}>Hi</h1>
    </div>
  )
};

export default Scroll;