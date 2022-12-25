import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="settings" style={{display:isActive? 'none' : 'block'}}>
        <h4>Bmi Calculator</h4>
        <div className="height">
          <p>Height</p>
          <h4>
            <span>cm</span>
          </h4>
          <input
            type="range"
            className="height-range-slider"
            min="100"
            max="200"
          />
        </div>
        <div className="weight">
          <p>Weight</p>
          <h4>
            <span>KG</span>
          </h4>
          <input type="range" className="weight-range-slider" min='20' max="200" />
        </div>
      </div>
    </div>
  );
}

export default App;
