import React from "react";
import useNetwork from "../hooks/useNetwork";

const Newwork = () => {
  const handleNetworkChange = onLine => {
    console.log(onLine ? "Online" : "Offline");
  }
  const onLine = useNetwork(handleNetworkChange);
  return(
    <div>
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default Newwork;