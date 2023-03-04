import React from "react";
import "../Stylesheet/displaycard.css";
import data from "../data/data.json";
const DisplayCard = (props) => {
  return (
    <div className="card-parent-div">
      {/* card div */}

      {data.families.map((ffamily) => {
        return (
          <div className="card-div" key={ffamily}>
            <p className="font-family-p">{ffamily}</p>
            <p
              style={{ fontFamily: ffamily, fontSize: props.rangeValue + "px" }}
            >
              {props.text
                ? props.text
                : "where recognition of the inherit dignity"}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayCard;
