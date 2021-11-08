import React from "react";
import createKey, { selected } from "../util";
import Song from "./Song";

function SongList(props) {
  // create array's for checked genres and ratings
  const selectedGenres = selected(props.genres, "genre");
  const selectedRatings = selected(props.ratings, "rating");

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
          <tr className="songList__subheadings">
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
          <th className="songList__headings--artist">Artist</th>
          <th className="songList__headings--title">Title</th>
          <th className="songList__headings--genre">Genre</th>
          <th className="songList__headings--rating">Rating</th>
        </tr>
      </thead>
      {props.sortByGenre ? (
        genreList
      ) : (
        <tbody className="songList__body">{songItems}</tbody>
      )}
    </table>
  );
}

export default SongList;
