import React from "react";
import createKey from "../util";
import Song from "./Song";

function SongList(props) {
  const songs = props.songs.map((song) => {
    return <Song song={song} key={createKey()} />;
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
      <tbody>{songs}</tbody>
    </table>
  );
}

export default SongList;
