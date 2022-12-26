import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(65);
  const [isActive, setIsActive] = useState(false);
  const [bmi, setBmi] = useState(0);
  const [weightRange, setWeightRange] = useState("");
  const [range, setRange] = useState("");
  const [color, setColor] = useState("");

  let handleHeightInput = (e) => {
    setHeight(e.target.value);
  };

  let handleWeightInput = (e) => {
    setWeight(e.target.value);
  };

  let calculateBmi = () => {
    let bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    if (bmi < 18.5) {
      setWeightRange("UnderWeight");
      setRange("your in the underweight range");
      setColor("#ffc44d");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setWeightRange("normal weight");
      setRange("your in the normal weight range");
      setColor("#4AC38D");
    } else if (bmi >= 24.9 && bmi <= 29.9) {
      setWeightRange("Over Weight");
      setRange("your in the Over Weight Range");
      setColor("#ff884d");
    } else {
      setWeightRange("Obesity");
      setRange("Your in obesity Range.. Careful!!!");
      setColor("#ff5e57");
    }
    setIsActive(true);
    setBmi(bmi);
  };

  let goBack = () => {
    setIsActive(false);
  };
  return (
    <div className="container">
      <div
        className="settings"
        style={{ display: isActive ? "none" : "block" }}
      >
        <h4 className="app-title">Bmi Calculator</h4>
        <div className="height">
          <p>Height</p>
          <h4>
            {height}
            <span>cm</span>
          </h4>
          <input
            type="range"
            value={height}
            className="height-range-slider"
            min="100"
            max="200"
            onChange={handleHeightInput}
          />
        </div>
        <div className="weight">
          <p>Weight</p>
          <h4>
            {weight}
            <span>KG</span>
          </h4>
          <input
            type="range"
            value={weight}
            className="weight-range-slider"
            min="20"
            max="200"
            onChange={handleWeightInput}
          />
        </div>
        <button className="calculate-btn" onClick={calculateBmi}>
          Calculate your bmi
        </button>
      </div>
      <div className="result" style={{ display: isActive ? "block" : "none" }}>
        <h3>Your Result</h3>
        <div className="final-result">
          <p className="health-status" style={{ color: `${color}` }}>
            {weightRange}
          </p>
          <h3 className="bmi">{bmi}</h3>
          <p className="n_b_r_text">Normal Bmi Range</p>
          <p className="normal-range">18.5 - 25kg/m2</p>
          <p className="range">{range}</p>
          <button className="go-back-btn" onClick={goBack}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
