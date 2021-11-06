import React from "react";

function Categorize(props) {
  return (
    <p className="sort__item" onClick={props.handleClickSortByGenre}>
      Sort songs by genre: <span>yes</span> | <span>no</span>
    </p>
  );
}
export default Categorize;
