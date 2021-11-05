import React from "react";
import Sort from "./Sort";

function SortContainer(props) {
  return (
    <Sort
      sortValue={props.sortValue}
      handleChangeSort={props.handleChangeSort}
    />
  );
}

export default SortContainer;
