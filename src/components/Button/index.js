import React from "react";
import "./styles.scss";

function Buttom({ title, handleClick }) {
  return (
    <button className="btn" onClick={handleClick}>
      {title}
    </button>
  );
}

export default Buttom;
