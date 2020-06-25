import React from "react";
import "./Header.css";

const header = (props) => {

  return (
    <>
      <div className="main-head">
        <div className="header">
          <h3 id="header">{props.title}</h3>
        </div>
      </div>
    </>
  );
};

export default header;
