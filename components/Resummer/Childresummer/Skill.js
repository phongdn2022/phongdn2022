import React from "react";

export default function Skill(props) {
  const { Skill } = props;
  return (
    Skill.map((item)=>(
    <div>
      <div>{item.text}</div>
      <div style={{ width: "100%", backgroundColor: "white", height: "20px" }}>
        <div
          style={{
            width: `${item.percent}%`,
            backgroundColor: "yellow",
            height: "20px",
            borderRight: "1px solid black",
          }}
        ></div>
      </div>
    </div>
  ))
  );
}
