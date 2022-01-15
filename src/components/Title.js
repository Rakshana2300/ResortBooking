import React from "react";

const Title = ({ title }) => {
  console.log({title});
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div />
    </div>
  );
};

export default Title;
