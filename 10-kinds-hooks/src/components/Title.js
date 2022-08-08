import React from "react";
import { useTitle } from "../hooks/useTitle";

const Title = () => {
  const titleUpdater = useTitle("Loding....");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div>
      <div>hello</div>
    </div>
  )
}

export default Title;