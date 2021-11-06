import React from "react";

function Sort(props) {
  return (
    <label className="sort__item" htmlFor="sort">
      Sort songs:
      <select
        className="sort__item--checkbox"
        value={props.sortValue}
        onChange={props.handleChangeSort}
      >
        <option value="">-select-</option>
        <option value="artist">Artist A-Z</option>
        <option value="artistREV">Artist Z-A</option>
        <option value="title">Title A-Z</option>
        <option value="titleREV">Title Z-A</option>
        <option value="rating">Rating 1-5</option>
        <option value="ratingREV">Rating 5-1</option>
      </select>
    </label>
  );
}

export default Sort;
