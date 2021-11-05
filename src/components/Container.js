import React, { Component } from "react";
import createKey from "../util";
import InputContainer from "./InputContainer";
import SongContainer from "./SongContainer";

const createNewSong = (songData) => {
  return {
    artist: songData.artist.value,
    title: songData.title.value,
    rating: songData.rating.value,
    id: createKey(),
    genre:
      songData.genre.value === "other"
        ? songData.newGenre.value.toLowerCase()
        : songData.genre.value,
  };
};

class Container extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      genres: [
        {
          genre: "rock",
          checked: false,
        },
        {
          genre: "jazz",
          checked: false,
        },
        {
          genre: "soul",
          checked: false,
        },
        {
          genre: "blues",
          checked: false,
        },
      ],
    };
  }

  //   handle the submit of a new song
  handleSubmit = (event) => {
    event.preventDefault();

    // create a new song object from the submit data
    const newSong = createNewSong(event.target);

    // update state with the new song object and if needed a new genre
    this.setState((prevState) => {
      const updatedSongs = this.state.songs;
      updatedSongs.push(newSong);
      const updatedGenres = this.state.genres;

      if (updatedGenres.some((genre) => genre.genre === newSong.genre)) {
        return {
          ...prevState,
          songs: updatedSongs,
        };
      } else {
        const newGenre = { genre: newSong.genre, checked: false };
        updatedGenres.push(newGenre);
        return {
          ...prevState,
          songs: updatedSongs,
          genres: updatedGenres,
        };
      }
    });
  };

  render() {
    return (
      <div>
        <InputContainer
          handleSubmit={this.handleSubmit}
          genres={this.state.genres}
        />
        <SongContainer songs={this.state.songs} />
      </div>
    );
  }
}

export default Container;
