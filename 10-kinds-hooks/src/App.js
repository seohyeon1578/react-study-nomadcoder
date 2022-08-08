import React from "react";
import Count from "./components/Count";
import Input from "./components/Input";
import Tab from "./components/Tab";

function App() {
  return (
    <div style={{display:'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 height: '100vh'}}>
      {/* <Count/> */}
      {/* <Input /> */}
      <Tab />
    </div>
  );
};

export default App;
