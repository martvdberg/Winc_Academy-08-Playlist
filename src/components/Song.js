import React from "react";

function Song(props) {
  return (
    <tr>
      <td>{props.song.artist}</td>
      <td>{props.song.title}</td>
      <td>{props.song.genre}</td>
      <td>{props.song.rating}</td>
      <td onClick={() => props.handleDelete(props.song.id)}>del</td>
    </tr>
  );
}

export default Song;
