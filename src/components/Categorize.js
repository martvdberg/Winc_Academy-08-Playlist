import React from "react";

function Categorize(props) {
  return (
    <p onClick={props.handleClickSortByGenre}>
      Sort songs by genre: <span>yes</span> | <span>no</span>
    </p>
  );
}
export default Categorize;
