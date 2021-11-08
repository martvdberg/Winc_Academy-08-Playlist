import React from "react";

function Categorize(props) {
  return (
    <p className="sorter__item" onClick={props.handleClickSortByGenre}>
      Sort songs by genre:{" "}
      <span className={!props.sortByGenre ? "sorter__item--selected" : ""}>
        yes
      </span>{" "}
      |{" "}
      <span className={props.sortByGenre ? "sorter__item--selected" : ""}>
        no
      </span>
    </p>
  );
}
export default Categorize;
