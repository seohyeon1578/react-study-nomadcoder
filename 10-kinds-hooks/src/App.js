import React from "react";
import Count from "./components/Count";
import Input from "./components/Input";
import Tab from "./components/Tab";
import Title from "./components/Title";

function App() {
  return (
    <div style={{display:'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 height: '100vh'}}>
      {/* <Count/> */}
      {/* <Input /> */}
      {/* <Tab /> */}
      <Title />
    </div>
  );
};

export default App;
