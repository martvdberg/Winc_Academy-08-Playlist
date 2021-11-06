import React from "react";
import createKey from "../util";

function Filter(props) {
  // create chackboxes for all genres
  const genres = props.genres.map((genre) => {
    return (
      <label htmlFor={genre.genre} key={createKey()}>
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
      <label htmlFor={rating.rating} key={createKey()}>
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
    <section>
      <section>
        <h2>Ratings</h2>
        {ratings}
      </section>
      <section>
        <h2>genre</h2>
        {genres}
      </section>
      <button onClick={props.handleClickReset}>Reset filter</button>
    </section>
  );
}

export default Filter;
