import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const header = (props) => {
  // const [title, setTitle] = useState('')

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
