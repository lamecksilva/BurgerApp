import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="Person">
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default Person;
