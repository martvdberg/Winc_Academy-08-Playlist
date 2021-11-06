import React from "react";
import createKey from "../util";
import Song from "./Song";

function SongList(props) {
  // create an array of checked genres
  const selectedGenres = props.genres.reduce((newArray, current) => {
    if (current.checked) {
      newArray.push(current.genre);
    }
    return newArray;
  }, []);

  // create an array of all the checked ratings
  const selectedRatings = props.ratings.reduce((newArray, current) => {
    if (current.checked) {
      newArray.push(current.rating);
    }
    return newArray;
  }, []);

  // filter songs based on checked ratings and genres
  const songs = props.songs.reduce((filterdSongs, current) => {
    if (
      (selectedGenres.length === 0 || selectedGenres.includes(current.genre)) &&
      (selectedRatings.length === 0 || selectedRatings.includes(current.rating))
    ) {
      filterdSongs.push(current);
    }
    return filterdSongs;
  }, []);

  // sort the song list by the sort value
  if (props.sortValue.slice(-3) !== "REV") {
    songs.sort((a, b) => a[props.sortValue] > b[props.sortValue]);
  } else {
    songs.sort(
      (a, b) => a[props.sortValue.slice(-3)] > b[props.sortValue.slice(-3)]
    );
    songs.reverse();
  }

  // create a list per genre with the song items in it
  const genreList = props.genres.map((genre) => {
    // filter songs by gerne and create a Song component for every song that is filterd
    const filterdSongItems = songs
      .filter((e) => e.genre === genre.genre)
      .map((song) => {
        return (
          <Song
            song={song}
            key={createKey()}
            handleDelete={props.handleDelete}
          />
        );
      });

    // only create a genre element if it have songs in it
    if (filterdSongItems.length > 0) {
      return (
        <tbody key={createKey()}>
          <tr className="songist__subheadings">
            <th>{genre.genre}</th>
          </tr>
          {filterdSongItems}
        </tbody>
      );
    } else {
      return null;
    }
  });

  // create a Song component for each song in songs for one long list
  const songItems = songs.map((song) => {
    return (
      <Song song={song} key={createKey()} handleDelete={props.handleDelete} />
    );
  });

  return (
    <table className="songList">
      <thead className="songList__headings">
        <tr>
          <th>Artist</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
      </thead>
      {props.sortByGenre ? genreList : <tbody>{songItems}</tbody>}
    </table>
  );
}

export default SongList;
