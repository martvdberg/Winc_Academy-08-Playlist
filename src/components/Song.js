import React from "react";

function Song(props) {
  return (
    <tr className="songList__song">
      <td>{props.song.artist}</td>
      <td>{props.song.title}</td>
      <td>{props.song.genre}</td>
      <td>{props.song.rating}</td>
      <td
        className="songList__song--del"
        onClick={() => props.handleDelete(props.song.id)}
      >
        del
      </td>
    </tr>
  );
}

export default Song;
