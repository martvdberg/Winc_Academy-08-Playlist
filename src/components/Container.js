import React, { Component } from "react";
import createKey from "../util";
import InputContainer from "./InputContainer";
import SongContainer from "./SongContainer";
import SortContainer from "./SortContainer";

const createNewSong = (songData) => {
  return {
    artist: songData.artist.value.toLowerCase(),
    title: songData.title.value.toLowerCase(),
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
      sort: "",
      sortByGenre: false,
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

  // delete song from state
  handleDelete = (id) => {
    this.setState((prevState) => {
      const updatedSongs = prevState.songs;
      const songToDel = updatedSongs.findIndex((song) => song.id === id);
      updatedSongs.splice(songToDel, 1);
      return {
        ...prevState,
        songs: updatedSongs,
      };
    });
  };

  // set state with the sort value
  handleChangeSort = (event) => {
    this.setState({ sort: event.target.value });
  };

  // change state for sort by genre option
  handleClickSortByGenre = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        sortByGenre: !prevState.sortByGenre,
      };
    });
  };

  render() {
    return (
      <div>
        <InputContainer
          handleSubmit={this.handleSubmit}
          genres={this.state.genres}
        />
        <SortContainer
          sortValue={this.state.sort}
          handleChangeSort={this.handleChangeSort}
          handleClickSortByGenre={this.handleClickSortByGenre}
        />
        <SongContainer
          songs={this.state.songs}
          genres={this.state.genres}
          handleDelete={this.handleDelete}
          sortValue={this.state.sort}
          sortByGenre={this.state.sortByGenre}
        />
      </div>
    );
  }
}

export default Container;
