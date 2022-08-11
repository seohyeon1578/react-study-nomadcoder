import useFullscreen from "../hooks/useFullscreen";

const Fullscreen = () => {
  const onFullScreen = (isFullScreen) => {
    console.log(isFullScreen ? "We are Full Screen" : "We are Small Screen");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);

  return (
    <div>
      <div ref={element}>
        <img src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/resize/416/quality/80/optimize" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
}

export default Fullscreen;