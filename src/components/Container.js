import React, { Component } from "react";
import createKey from "../util";
import Header from "./Header";
import InputContainer from "./InputContainer";
import SongContainer from "./SongContainer";
import SortContainer from "./SortContainer";
import Filter from "./Filter";

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
      songs: [
        {
          artist: "Blur",
          title: "song 2",
          genre: "rock",
          rating: "5",
          id: "1",
        },
        {
          artist: "Abba",
          title: "Waterloo",
          genre: "pop",
          rating: "3",
          id: "2",
        },
        {
          artist: "Beatles",
          title: "Yesterday",
          genre: "pop",
          rating: "4",
          id: "3",
        },
      ],
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
        {
          genre: "pop",
          checked: false,
        },
      ],
      ratings: [
        {
          rating: "1",
          checked: false,
        },
        {
          rating: "2",
          checked: false,
        },
        {
          rating: "3",
          checked: false,
        },
        {
          rating: "4",
          checked: false,
        },
        {
          rating: "5",
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
  handleClickSortByGenre = () => {
    this.setState((prevState) => {
      return {
        sortByGenre: !prevState.sortByGenre,
      };
    });
  };

  // change state of rating or genre when checked
  handleChangeFilter = (event) => {
    const inputValue = event.target.name;
    this.setState((prevState) => {
      const updatedState = prevState[inputValue].map((item) => {
        if (item[inputValue.slice(0, -1)] === event.target.value) {
          return {
            ...item,
            checked: !item.checked,
          };
        } else {
          return item;
        }
      });
      return {
        ...prevState,
        [inputValue]: updatedState,
      };
    });
  };

  // reset filter checkboxes
  handleClickReset = () => {
    this.setState((prevState) => {
      const updatedGenres = prevState.genres.map((genre) => {
        return { ...genre, checked: false };
      });
      const updatedRating = prevState.ratings.map((rating) => {
        return { ...rating, checked: false };
      });
      return {
        ...prevState,
        genres: updatedGenres,
        ratings: updatedRating,
      };
    });
  };

  render() {
    return (
      <section className="wrapper">
        <Header />

        <InputContainer
          handleSubmit={this.handleSubmit}
          genres={this.state.genres}
        />
        <SortContainer
          sortValue={this.state.sort}
          handleChangeSort={this.handleChangeSort}
          handleClickSortByGenre={this.handleClickSortByGenre}
        />
        <Filter
          genres={this.state.genres}
          ratings={this.state.ratings}
          handleChangeFilter={this.handleChangeFilter}
          handleClickReset={this.handleClickReset}
        />
        <SongContainer
          songs={this.state.songs}
          genres={this.state.genres}
          ratings={this.state.ratings}
          handleDelete={this.handleDelete}
          sortValue={this.state.sort}
          sortByGenre={this.state.sortByGenre}
        />
      </section>
    );
  }
}

export default Container;
