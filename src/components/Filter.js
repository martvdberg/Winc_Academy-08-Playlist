import React from "react";
import createKey from "../util";

function Filter(props) {
  // create chackboxes for all genres
  const genres = props.genres.map((genre) => {
    return (
      <label
        className="filter__section--item"
        htmlFor={genre.genre}
        key={createKey()}
      >
        <input
          type="checkbox"
          id={genre.genre}
          name="genres"
          checked={genre.checked}
          value={genre.genre}
          onChange={props.handleChangeFilter}
        />{" "}
        {genre.genre}
      </label>
    );
  });

  // create chackboxes for all ratings
  const ratings = props.ratings.map((rating) => {
    return (
      <label
        className="filter__section--item"
        htmlFor={rating.rating}
        key={createKey()}
      >
        <input
          type="checkbox"
          id={rating.rating}
          name="ratings"
          checked={rating.checked}
          value={rating.rating}
          onChange={props.handleChangeFilter}
        />{" "}
        {rating.rating} {rating.rating === "1" ? "star" : "stars"}
      </label>
    );
  });

  return (
    <section className="filter">
      <section className="filter__section">
        <h2 className="filter__section--headerText">Ratings</h2>
        {ratings}
      </section>
      <section className="filter__section">
        <h2 className="filter__section--headerText">genre</h2>
        {genres}
      </section>
      <button className="filter__section--btn" onClick={props.handleClickReset}>
        Reset filter
      </button>
    </section>
  );
}

export default Filter;
