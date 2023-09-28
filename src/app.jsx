// Write your Color component here
import React, { useState } from "react";
import "./index.css";

const Color = ({ color, setSelectedColor, isSelected }) => {
  return (
    <div
      className={`color ${color} ${isSelected ? "selected" : ""}`}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={`color ${selectedColor}`}>{selectedColor}</div>
      </div>

      <div id="colors-list">
        <Color
          color="red"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === "red"}
        />
        <Color
          color="blue"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === "blue"}
        />
        <Color
          color="green"
          setSelectedColor={setSelectedColor}
          isSelected={selectedColor === "green"}
        />
      </div>
    </div>
  );
};

export default Picker;