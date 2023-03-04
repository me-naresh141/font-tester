import React, { useState } from "react";
import Slider from "./Slider";
import DisplayCard from "./DisplayCard";
import "../Stylesheet/font.css";
import "../Stylesheet/slider.css";
function FontTester() {
  const [sentence, setsentence] = useState("");
  const [rangeValue, setrangeValue] = useState("30");
  const handleInput = (e) => {
    setsentence(e.target.value);
  };
  return (
    <div className="font-div">
      <div className="type-text-div">
        <input
          className="type-input"
          type={"text"}
          value={sentence}
          placeholder="Type something"
          onChange={handleInput}
        />
        <Slider rangeValue={rangeValue} setrangeValue={setrangeValue} />
      </div>
      <DisplayCard text={sentence} rangeValue={rangeValue} />
    </div>
  );
}

export default FontTester;
