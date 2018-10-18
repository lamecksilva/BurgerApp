import React from "react";

const Person = props => {
  return (
    <div>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default Person;
