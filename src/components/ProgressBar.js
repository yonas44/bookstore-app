import React from 'react';
import './styles/ProgressBar.css';

const ProgressBar = () => (
  <div className="progress-holder">
    <svg className="svg-indicator">
      <circle cx="50px" cy="50px" r="40px" className="svg-indicator-track" />
      <circle
        style={{ strokeDashoffset: 256 - 256 * (0 / 100) }}
        cx="50px"
        cy="50px"
        r="40px"
        className="svg-indicator-indication"
      />
    </svg>
    <div id="progress-bar-info">
      <p id="percentage">0%</p>
      <p id="completed">Completed</p>
    </div>
  </div>
);

export default ProgressBar;
