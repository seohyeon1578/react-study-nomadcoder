import React from "react";
import Click from "./components/click";
import Confirm from "./components/confirm";
import Count from "./components/count";
import FadeIn from "./components/fadeIn";
import Input from "./components/input";
import Leave from "./components/leave";
import Newwork from "./components/network";
import Prevent from "./components/prevent";
import Scroll from "./components/scroll";
import Tab from "./components/tab";
import Title from "./components/title";

function App() {
  return (
    <div style={{display:'flex',
                //  justifyContent: 'center',
                //  alignItems: 'center',
                 height: '1000vh'}}>
      {/* <Count/> */}
      {/* <Input /> */}
      {/* <Tab /> */}
      {/* <Title /> */}
      {/* <Click /> */}
      {/* <Confirm /> */}
      {/* <Prevent /> */}
      {/* <Leave /> */}
      {/* <FadeIn /> */}
      {/* <Newwork /> */}
      <Scroll />
    </div>
  );
};

export default App;
