import React from "react";
import Count from "./components/count";
import Input from "./components/input";

function App() {
  return (
    <div style={{display:'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 height: '100vh'}}>
      {/* <Count/> */}
      <Input />
    </div>
  );
};

export default App;
