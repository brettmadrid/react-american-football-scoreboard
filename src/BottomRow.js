import React from "react";
import "./App.css";

const BottomRow = ({ down, setDown, toGo, setToGo, quarter, setQuarter }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  return (
    <div className="bottomRow">
      <div className="down">
        <button
          className="down__title"
          onClick={down !== 4 ? () => setDown(down + 1) : () => setDown(1)}
        >
          Down
        </button>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <button
          className="toGo__title"
          onClick={() => setToGo(getRandomInt(10))}
        >
          To Go
        </button>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <button className="ballOn__title">Ball on</button>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <button
          className="quarter__title"
          onClick={
            quarter !== 4 ? () => setQuarter(quarter + 1) : () => setQuarter(1)
          }
        >
          Quarter
        </button>
        <div className="quarter__value">{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
