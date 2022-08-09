import React from "react";
import Click from "./components/click";
import Confirm from "./components/confirm";
import Count from "./components/count";
import Input from "./components/input";
import Tab from "./components/tab";
import Title from "./components/title";

function App() {
  return (
    <div style={{display:'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 height: '100vh'}}>
      {/* <Count/> */}
      {/* <Input /> */}
      {/* <Tab /> */}
      {/* <Title /> */}
      {/* <Click /> */}
      <Confirm />
    </div>
  );
};

export default App;
