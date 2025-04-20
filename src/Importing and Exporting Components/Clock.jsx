import React from "react";

const Clock = ({ time, color, bg }) => {
  return (
    <div style={{ backgroundColor: bg, padding: 20, display: "flex", justifyContent: "center" }}>
      <h1 style={{ color: color }}>{time}</h1>
    </div>
  );
};

export default Clock;
