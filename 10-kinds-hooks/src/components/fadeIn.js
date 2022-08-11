import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";

const FadeIn = () => {
  const fadeInH1 = useFadeIn(1,2);
  const fadeInP = useFadeIn(5, 10);
  return(
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lolololololol</p>
    </div>
  );
};

export default FadeIn;