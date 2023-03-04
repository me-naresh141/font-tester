import React from "react";
import "../Stylesheet/slider.css";
const Slider = (props) => {
  //   console.log(props);
  const handleSlider = (e) => {
    props.setrangeValue(e.target.value);
  };
  return (
    <div className="slider-div">
      <h2>{props.rangeValue + "px"}</h2>
      <input
        className="slider-input"
        type="range"
        min="30"
        max="500"
        onChange={(e) => handleSlider(e)}
      />
    </div>
  );
};

export default Slider;
