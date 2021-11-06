import React from "react";
import Sort from "./Sort";
import Categorize from "./Categorize";

function SortContainer(props) {
  return (
    <section className="sorter">
      <Categorize handleClickSortByGenre={props.handleClickSortByGenre} />
      <Sort
        sortValue={props.sortValue}
        handleChangeSort={props.handleChangeSort}
      />
    </section>
  );
}

export default SortContainer;
