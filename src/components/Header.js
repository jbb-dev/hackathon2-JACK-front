import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  // const [title, setTitle] = useState('')
  const arrow = props.arrow
  return (
    <>
      <div className="main-head">
        <div className="header">
          {arrow === 'true' ? <Link id='leftArrow' to={props.pathName}>
            <svg class="bi bi-chevron-left " width="2em" height="2em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg%22%3E">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </Link> : ""}
          <h3 id="header">{props.title}</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
