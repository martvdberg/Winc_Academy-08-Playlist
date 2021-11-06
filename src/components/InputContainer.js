import React, { Component } from "react";
import InputItems from "./InputItems";

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      title: "",
      genre: "",
      newGenre: "",
      rating: "",
    };
  }

  //   handle input events for the text fields and select options
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // reset the form on submit
  resetForm = () => {
    this.setState({
      artist: "",
      title: "",
      genre: "",
      newGenre: "",
      rating: "",
    });
  };

  render() {
    return (
      <form
        className="addSongWrapper"
        onSubmit={(event) => {
          this.resetForm();
          this.props.handleSubmit(event);
        }}
      >
        <InputItems
          handleChange={this.handleChange}
          resetForm={this.resetForm}
          genres={this.props.genres}
          inputState={this.state}
        />
      </form>
    );
  }
}

export default InputContainer;
