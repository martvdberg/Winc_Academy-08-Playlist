import React from "react";
import createKey from "../util";
import Song from "./Song";

function SongList(props) {
  const songs = props.songs;

  // sort the song list by the sort value
  if (props.sortValue.slice(-3) !== "REV") {
    songs.sort((a, b) => a[props.sortValue] > b[props.sortValue]);
  } else {
    songs.sort(
      (a, b) => a[props.sortValue.slice(-3)] > b[props.sortValue.slice(-3)]
    );
    songs.reverse();
  }

  // create a Song component for each song in songs
  const songItems = songs.map((song) => {
    return (
      <Song song={song} key={createKey()} handleDelete={props.handleDelete} />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Artist</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>{songItems}</tbody>
    </table>
  );
}

export default SongList;
