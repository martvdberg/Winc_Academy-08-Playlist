import React from "react";
import createKey from "../util";

function InputItems(props) {
  // create an option element for each genre
  const genres = props.genres.map((genre) => {
    return (
      <option value={genre.genre} key={createKey()}>
        {genre.genre}
      </option>
    );
  });

  return (
    <fieldset className="addSong">
      <label htmlFor="artist" className="addSong__item">
        <input
          className="addSong__item--textInput"
          type="text"
          name="artist"
          placeholder="Artist"
          value={props.inputState.artist}
          onChange={props.handleChange}
          required
        />
      </label>

      <label htmlFor="title" className="addSong__item">
        <input
          className="addSong__item--textInput"
          type="text"
          name="title"
          placeholder="Title"
          value={props.inputState.title}
          onChange={props.handleChange}
          required
        />
      </label>

      <label htmlFor="genre" className="addSong__item">
        Genre:
        <select
          className="addSong__item--selectbox"
          name="genre"
          value={props.inputState.genre}
          onChange={props.handleChange}
          required
        >
          <option value="" disabled>
            -select-
          </option>
          {genres}
          <option value="other">other</option>
        </select>
        {/* Only render the new genre input field if genre = other */}
        {props.inputState.genre === "other" ? (
          <input
            className="addSong__item--textInput"
            type="text"
            name="newGenre"
            placeholder="add a new genre"
            value={props.inputState.newGenre}
            onChange={props.handleChange}
            required
          />
        ) : null}
      </label>

      <label htmlFor="rating" className="addSong__item">
        Rating:
        <select
          className="addSong__item--selectbox"
          name="rating"
          value={props.inputState.rating}
          onChange={props.handleChange}
          required
        >
          <option value="" disabled>
            -select-
          </option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
      </label>
      <button className="addSong__item--btn">Add song</button>
    </fieldset>
  );
}

export default InputItems;
